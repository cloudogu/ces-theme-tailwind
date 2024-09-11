import React from "react";
import {subTestid} from "../../../types/Testid";
import ItemIndicator from "./ItemIndicator";
import ItemText from "./ItemText";
import SegmentedItem from "./SegmentedItem";
import type {SelectSegmentedItemProps as RadixSelectItemProps} from "./SegmentedItem";

export type SelectItemProps = RadixSelectItemProps;

const Item = React.forwardRef<HTMLDivElement, SelectItemProps>(({
    children,
    ...props
}, forwardedRef) => (
    <SegmentedItem {...props} ref={forwardedRef}>
        <ItemText data-testid={subTestid(props, "text")}>{children}</ItemText>
        <ItemIndicator data-testid={subTestid(props, "indicator")}>
            <ItemIndicator.DefaultIcon data-testid={subTestid(props, "indicator-icon")}/>
        </ItemIndicator>
    </SegmentedItem>
));

Item.displayName = "Item";

export default Item;