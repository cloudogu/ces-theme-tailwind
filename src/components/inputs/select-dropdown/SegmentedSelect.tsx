import * as RadixSelect from "@radix-ui/react-select";
import React from "react";
import Content from "./Content";
import Portal from "./Portal";
import SegmentedContent from "./SegmentedContent";
import SegmentedTriggerButton from "./SegmentedTriggerButton";
import Trigger from "./Trigger";
import TriggerButton from "./TriggerButton";
import type Testid from "../../../types/Testid";
import type {SelectProps as RadixSelectProps} from "@radix-ui/react-select";

export type SegmentedSelectProps = RadixSelectProps & Testid;
const SegmentedSelect = (props: SegmentedSelectProps) => (
    <RadixSelect.Root
        {...props}
    />
);

SegmentedSelect.displayName = "Select";
SegmentedSelect.Trigger = Trigger;
SegmentedSelect.SegmentedTriggerButton = SegmentedTriggerButton;
SegmentedSelect.TriggerButton = TriggerButton;
SegmentedSelect.Portal = Portal;
SegmentedSelect.SegmentedContent = SegmentedContent;
SegmentedSelect.Content = Content;

export default SegmentedSelect;