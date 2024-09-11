import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import DefaultStyles from "@src/constants/DefaultStyles";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Indicator from "./Indicator";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";

export type SegmentedRadioGroupItemProps = RadixRadioGroup.RadioGroupItemProps & Testid;

type ComponentType = ComponentTypeWithRef<SegmentedRadioGroupItemProps, HTMLButtonElement> & {
    Indicator: typeof Indicator,
};

const SegmentedItem = forwardRef<HTMLButtonElement, SegmentedRadioGroupItemProps>((props, ref) => (
    <RadixRadioGroup.Item
        {...props}
        ref={ref}
        className={
            twMerge(
                DefaultStyles.Focus,
                "group",
                "border rounded-full outline-none",
                "data-[state=checked]:bg-default-background",
                "data-[state=checked]:border-brand",
                "data-[state=checked]:border-2",
                "data-[state=checked]:hover:border-brand-strong",
                "data-[state=checked]:focus-visible:border-brand-strong",
                "data-[state=checked]:disabled:border-neutral",
                "data-[state=checked]:disabled:bg-neutral-weak",
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
                props.className)
        }
    />
)) as ComponentType;

SegmentedItem.displayName = "SegmentedRadioGroupItem";
SegmentedItem.Indicator = Indicator;

export default SegmentedItem;