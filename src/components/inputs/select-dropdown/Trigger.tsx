import * as RadixSelect from "@radix-ui/react-select";
import * as React from "react";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import Icon from "./Icon";
import Value from "./Value";
import type Testid from "../../../types/Testid";
import type {SelectTriggerProps as RadixSelectTriggerProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type SelectTriggerProps = RadixSelectTriggerProps & Testid;

type ComponentType = ComponentTypeWithRef<SelectTriggerProps, HTMLButtonElement> &
    {
        Icon: typeof Icon,
        Value: typeof Value,
    };

const Trigger = forwardRef<HTMLButtonElement, SelectTriggerProps>((props, ref) => (
    <RadixSelect.Trigger
        {...props}
        ref={ref}
        className={
            twMerge(
                "outline-0 rounded",
                props.className,
            )
        }
    />
)) as ComponentType;

Trigger.displayName = "Trigger";
Trigger.Icon = Icon;
Trigger.Value = Value;

export default Trigger;