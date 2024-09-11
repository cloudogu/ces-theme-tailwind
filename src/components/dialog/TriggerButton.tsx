import Button from "@components/inputs/Button";
import {forwardRef} from "react";
import Trigger from "./Trigger";
import type {DialogTriggerProps} from "./Trigger";
import type Testid from "../../types/Testid";
import type {ButtonProps} from "@components/inputs/Button";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type DialogTriggerButtonProps = ButtonProps & DialogTriggerProps & Testid;

type ComponentType = ComponentTypeWithRef<DialogTriggerButtonProps, HTMLButtonElement>;

const TriggerButton = forwardRef<HTMLButtonElement, DialogTriggerButtonProps>(({children, ...props}, ref) => (
    <Trigger asChild>
        <Button ref={ref} {...props}>
            {children}
        </Button>
    </Trigger>
)) as ComponentType;

TriggerButton.displayName = "DialogTriggerButton";

export default TriggerButton;
