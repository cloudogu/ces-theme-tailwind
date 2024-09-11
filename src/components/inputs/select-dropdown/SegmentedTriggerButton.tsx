import * as React from "react";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../../constants/DefaultStyles";
import Icon from "./Icon";
import Trigger from "./Trigger";
import Value from "./Value";

import type Testid from "../../../types/Testid";
import type {SelectTriggerProps as RadixSelectTriggerProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type SelectTriggerButtonProps = RadixSelectTriggerProps & Testid;

type ComponentType = ComponentTypeWithRef<SelectTriggerButtonProps, HTMLButtonElement> &
    {
        Icon: typeof Icon,
        Value: typeof Value,
    };

const SegmentedTriggerButton = forwardRef<HTMLButtonElement, SelectTriggerButtonProps>((props, ref) => (
    <Trigger {...props} asChild={true}>
        <button
            {...props}
            ref={ref}
            className={
                twMerge(
                    DefaultStyles.Focus,
                    DefaultStyles.DefaultTextStyling,
                    "border-solid border border-neutral p-[7px] box-border w-[240px] ",
                    "enabled:hover:border-3 enabled:hover:p-[5px] enabled:focus-visible:border-3 enabled:focus-visible:p-[5px]",
                    "enabled:aria-expanded:border-3 enabled:aria-expanded:border-brand enabled:aria-expanded:p-[5px]",
                    "enabled:active:border-3 enabled:active:border-brand enabled:active:p-[5px]",
                    "disabled:border-neutral-weak disabled:text-neutral-weak",
                    "flex flex-row justify-between items-center",
                    "group",
                    props.className
                )
            }
        />
    </Trigger>
)) as ComponentType;

SegmentedTriggerButton.displayName = "SegmentedTriggerButton";
SegmentedTriggerButton.Icon = Icon;
SegmentedTriggerButton.Value = Value;

export default SegmentedTriggerButton;