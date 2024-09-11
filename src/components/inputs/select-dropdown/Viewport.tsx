import SegmentedItem from "@components/inputs/select-dropdown/SegmentedItem";
import * as RadixSelect from "@radix-ui/react-select";
import React, {forwardRef} from "react";
import Item from "./Item";
import type Testid from "../../../types/Testid";
import type {SelectViewportProps as RadixSelectViewportProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type SelectViewportProps = RadixSelectViewportProps & Testid;

type ComponentType = ComponentTypeWithRef<SelectViewportProps, HTMLDivElement> &
    {
        Item: typeof Item,
        SegmentedItem: typeof SegmentedItem,
    };

const Viewport = forwardRef<HTMLDivElement, SelectViewportProps>((props, ref) => (
    <RadixSelect.Viewport {...props} ref={ref}/>
)) as ComponentType;

Viewport.displayName = "Viewport";
Viewport.Item = Item;
Viewport.SegmentedItem = SegmentedItem;
export default Viewport;