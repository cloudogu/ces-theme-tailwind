import * as RadixCheckbox from "@radix-ui/react-checkbox";

import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../../constants/DefaultStyles";
import CheckboxIndicator from "./CheckboxIndicator";
import type Testid from "../../../types/Testid";
import type {CheckboxProps as RadixCheckboxProps} from "@radix-ui/react-checkbox";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type SegmentedCheckboxProps = RadixCheckboxProps & Testid;

type ComponentType = ComponentTypeWithRef<SegmentedCheckboxProps, HTMLButtonElement> & {
    CheckboxIndicator: typeof CheckboxIndicator;
};

const SegmentedCheckbox = forwardRef<HTMLButtonElement, SegmentedCheckboxProps>(({...props}, ref) => (
    <RadixCheckbox.Root
        {...props}
        className={twMerge(
            "border rounded-sm outline-none",
            DefaultStyles.Focus,
            "data-[state=checked]:bg-brand",
            "data-[state=checked]:border-brand",
            "data-[state=checked]:hover:bg-brand-strong",
            "data-[state=checked]:hover:border-brand-strong",
            "data-[state=checked]:focus-visible:bg-brand-strong",
            "data-[state=checked]:focus-visible:border-brand-strong",
            "data-[state=checked]:disabled:bg-neutral-weak",
            "data-[state=checked]:disabled:border-neutral",
            "data-[state=indeterminate]:bg-brand",
            "data-[state=indeterminate]:border-brand",
            "data-[state=indeterminate]:hover:bg-brand-strong",
            "data-[state=indeterminate]:hover:border-brand-strong",
            "data-[state=indeterminate]:focus-visible:bg-brand-strong",
            "data-[state=indeterminate]:focus-visible:border-brand-strong",
            "data-[state=indeterminate]:disabled:bg-neutral-weak",
            "data-[state=indeterminate]:disabled:border-neutral",
            "data-[state=unchecked]:border-neutral",
            "data-[state=unchecked]:bg-default-background",
            "data-[state=unchecked]:hover:border-2",
            "data-[state=unchecked]:hover:border-neutral-strong",
            "data-[state=unchecked]:focus-visible:border-2",
            "data-[state=unchecked]:focus-visible:border-neutral-strong",
            "data-[state=unchecked]:disabled:bg-neutral-weak",
            "data-[state=unchecked]:disabled:border-neutral",
            "data-[state=unchecked]:disabled:border",
            "min-w-[24px] w-[24px]",
            "min-h-[24px] h-[24px]",
            "flex items-center justify-center",
            props.className
        )}
        ref={ref}
    />)) as ComponentType;

SegmentedCheckbox.displayName = "Checkbox";
SegmentedCheckbox.CheckboxIndicator = CheckboxIndicator;

export default SegmentedCheckbox;
