import { useCallback} from "react";
import { useToast} from "./useToast";
import type {ToastFunction} from "./useToast";
import type {ReactNode} from "react";

export type DefaultToastFunction = (_msg: ReactNode) => ReturnType<ToastFunction>;
export function useDefaultToasts(): {
    showError: DefaultToastFunction,
    showSuccess: DefaultToastFunction,
    showNeutral: DefaultToastFunction,
    showBrand: DefaultToastFunction,
    } {
    const {toast} = useToast();

    const showError = useCallback((msg: ReactNode) => toast({
        variant: "danger",
        description: msg,
    }), [toast]);

    const showSuccess = useCallback((msg: ReactNode) => toast({
        variant: "success",
        description: msg,
    }), [toast]);

    const showNeutral = useCallback((msg: ReactNode) => toast({
        variant: "neutral",
        description: msg,
    }), [toast]);

    const showBrand = useCallback((msg: ReactNode) => toast({
        variant: "brand",
        description: msg,
    }), [toast]);

    return {showError, showSuccess, showNeutral, showBrand};
}