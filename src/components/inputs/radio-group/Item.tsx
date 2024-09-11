import { subTestid } from "@src/types/Testid";
import { forwardRef } from "react";
import Indicator from "./Indicator";
import SegmentedItem from "./SegmentedItem";
import type { SegmentedRadioGroupItemProps } from "./SegmentedItem";

export type RadioGroupItemProps = SegmentedRadioGroupItemProps;

const Item = forwardRef<HTMLButtonElement, RadioGroupItemProps>((props, ref) => (
    <SegmentedItem {...props} ref={ref}>
        <SegmentedItem.Indicator data-testid={subTestid(props, "indicator")}>
            <Indicator.DefaultIcon data-testid={subTestid(props, "indicator-icon")}/>
        </SegmentedItem.Indicator>
    </SegmentedItem>
));

Item.displayName = "RadioGroupItem";

export default Item;