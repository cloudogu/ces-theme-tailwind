"use client";

import { useEffect, useState } from "react";
import type { ToastActionButtonElement } from "./ActionButton";
import type { ToastProps } from "./Toast";

const TOAST_LIMIT = 100;

export type UseToastProps = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    actionBtn?: ToastActionButtonElement;
};

const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
    | {
          type: ActionType["ADD_TOAST"];
          toast: UseToastProps;
      }
    | {
          type: ActionType["UPDATE_TOAST"];
          toast: Partial<UseToastProps>;
      }
    | {
          type: ActionType["REMOVE_TOAST"];
          toastId?: UseToastProps["id"];
      };

interface State {
    toasts: UseToastProps[];
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
    case "ADD_TOAST":
        return {
            ...state,
            toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
        };

    case "UPDATE_TOAST":
        return {
            ...state,
            toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
        };
    case "REMOVE_TOAST":
        if (action.toastId === undefined) {
            return {
                ...state,
                toasts: [],
            };
        }
        return {
            ...state,
            toasts: state.toasts.filter((t) => t.id !== action.toastId),
        };
    }
}

const listeners: Array<(_state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
    memoryState = reducer(memoryState, action);

    listeners.forEach((listener) => {
        listener(memoryState);
    });
}

export function toast({ ...props }: Omit<UseToastProps, "id">) {
    const id = genId();

    const update = (props: UseToastProps) =>
        dispatch({
            type: "UPDATE_TOAST",
            toast: { ...props, id },
        });

    const dismiss = () => dispatch({ type: "REMOVE_TOAST", toastId: id });

    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open: any) => {
                if (!open) dismiss();
            },
        },
    });

    return {
        id: id,
        dismiss,
        update,
    };
}

export function useToast() {
    const [state, setState] = useState<State>(memoryState);

    useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [state]);

    return {
        ...state,
        toast,
        dismiss: (toastId?: string) => dispatch({ type: "REMOVE_TOAST", toastId }),
    };
}

export type ToastFunction = typeof toast;
