import React, {forwardRef, useCallback,  useState} from "react";
import Button from "./Button";
import type {ButtonProps} from "./Button";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type AsyncActionButtonProps = Omit<ButtonProps, "onClick"> & {
    onClick?: (_event: any) => Promise<any>,
    onActionDisableChange?: (_state: boolean) => void,
};

type ComponentType = ComponentTypeWithRef<AsyncActionButtonProps, HTMLButtonElement>;

const AsyncActionButton = forwardRef<HTMLButtonElement, AsyncActionButtonProps>(
    ({onClick, onActionDisableChange, disabled, ...props}, ref) => {
        const [actionDisabled, setActionDisabled] = useState(false);
        const actionOnClick = useCallback((event: any) => {
            if (onClick) {
                onActionDisableChange?.call(undefined,true);
                setActionDisabled(true);
                onClick(event).finally(() => {
                    onActionDisableChange?.call(undefined,false);
                    setActionDisabled(false);
                });
            }
        }, [onClick, onActionDisableChange]);

        return (
            <Button {...props} ref={ref} disabled={actionDisabled || disabled} onClick={actionOnClick}/>
        );
    }) as ComponentType;

AsyncActionButton.displayName = "AsyncActionButton";

export default AsyncActionButton;