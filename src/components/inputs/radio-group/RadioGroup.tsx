import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Item from "./Item";
import ItemField from "./ItemField";
import SegmentedItem from "./SegmentedItem";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";

export type RadioGroupProps = RadixRadioGroup.RadioGroupProps & Testid;

type ComponentType = ComponentTypeWithRef<RadioGroupProps, HTMLDivElement> & {
    Item: typeof Item,
    ItemField: typeof ItemField,
    SegmentedItem: typeof SegmentedItem,
};

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ className, ...props }, ref) => (
    <RadixRadioGroup.Root 
        {...props} 
        ref={ref}
        className= {twMerge(
            "grid gap-default-2x py-default",
            className
        )}
    />
)) as ComponentType;

RadioGroup.displayName = "RadioGroup";
RadioGroup.Item = Item;
RadioGroup.ItemField = ItemField;
RadioGroup.SegmentedItem = SegmentedItem;

export default RadioGroup;