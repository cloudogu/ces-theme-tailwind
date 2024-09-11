import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {useForwardedRef} from "@src/hooks/useForwardedRef";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../constants/DefaultStyles";
import type Testid from "../../types/Testid";
import type {DropdownMenuTriggerProps as RadixDropdownMenuTriggerProps} from "@radix-ui/react-dropdown-menu/dist";

export type DropdownMenuTriggerProps = RadixDropdownMenuTriggerProps & Testid;

const Trigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>((props, ref) => {
    const newRef = useForwardedRef<HTMLButtonElement>(ref);

    return (
        <DropdownMenu.Trigger
            {...props}
            ref={newRef}
            className={
                twMerge(
                    DefaultStyles.TextSize3Xl,
                    DefaultStyles.Focus,
                    "outline-0 rounded",
                )
            }
            onClick={(e) => {
                if (!newRef?.current)
                    return;
                // This is a workaround and should be removed as soon as https://github.com/radix-ui/primitives/issues/2700 resolves.
                newRef.current.dispatchEvent(new KeyboardEvent("keydown", {...e, key: "Enter"} as any));
            }}
            onPointerDown={(e) => {
                // This is a workaround and should be removed as soon as https://github.com/radix-ui/primitives/issues/2700 resolves.
                e.preventDefault();
            }}
        />
    );
});

Trigger.displayName = "Trigger";

export default Trigger;