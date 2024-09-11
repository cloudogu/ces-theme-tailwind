import * as RadixSelect from "@radix-ui/react-select";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../../constants/DefaultStyles";
import ItemIndicator from "./ItemIndicator";
import ItemText from "./ItemText";
import type Testid from "../../../types/Testid";
import type {SelectItemProps as RadixSelectItemProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type SelectSegmentedItemProps = RadixSelectItemProps & Testid;

type ComponentType =
    ComponentTypeWithRef<SelectSegmentedItemProps, HTMLDivElement>
    & {
    Indicator: typeof ItemIndicator,
    Text: typeof ItemText,
}

const SegmentedItem = forwardRef<HTMLDivElement, SelectSegmentedItemProps>((props, ref) => (
    <RadixSelect.Item
        {...props}
        ref={ref}
        className={
            twMerge(
                DefaultStyles.DefaultTextStyling,
                "m-0 bg-transparent focus-visible:text-inverted-text focus-visible:bg-brand outline-none p-2",
                "flex flex-row justify-between",
                "group-[&:not(:has([data-highlighted]))]/select-content:hover:text-inverted-text",
                "group-[&:not(:has([data-highlighted]))]/select-content:hover:bg-brand",
                "data-[highlighted]:bg-brand",
                "data-[highlighted]:text-inverted-text",
                "group/select-item",
                props.className)
        }
    />
)) as ComponentType;

SegmentedItem.displayName = "SegmentedItem";
SegmentedItem.Indicator = ItemIndicator;
SegmentedItem.Text = ItemText;

export default SegmentedItem;