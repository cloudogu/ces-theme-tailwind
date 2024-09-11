import { forwardRef } from "react";
import Button from "../inputs/Button";
import Action from "./Action";
import type { ToastActionProps } from "./Action";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { ReactElement} from "react";

export type ToastActionButtonProps = ToastActionProps & Testid & {
    children: string
    }
;

type ComponentType = ComponentTypeWithRef<ToastActionButtonProps, HTMLButtonElement>;

const ActionButton = forwardRef<HTMLButtonElement, ToastActionProps>(({className, children, ...props}, ref) => (
    <Action
        asChild
        className={className}
        {...props}
    >
        <Button ref={ref} color={"neutral"} variant={"tertiary"}>
            {children}
        </Button>
    </Action>
)) as ComponentType;

ActionButton.displayName = "ToastActionButton";

export type ToastActionButtonElement = ReactElement<typeof ActionButton>

export default ActionButton;



