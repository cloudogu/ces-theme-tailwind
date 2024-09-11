import * as React from "react";
import {forwardRef} from "react";
import SegmentedTriggerButton from "./SegmentedTriggerButton";
import Value from "./Value";

import type Testid from "../../../types/Testid";
import type {SelectTriggerProps} from "@radix-ui/react-select";
import type {ComponentPropsWithoutRef} from "react";

export type SelectTriggerButtonprops = SelectTriggerProps & Omit<ComponentPropsWithoutRef<"button">, "children"> & {
    children: string,
} & Testid;

const TriggerButton = forwardRef<HTMLButtonElement, SelectTriggerButtonprops>((props, ref) => (
    <SegmentedTriggerButton {...props} ref={ref}>
        <Value placeholder={props.children}/>
        <SegmentedTriggerButton.Icon>
            <SegmentedTriggerButton.Icon.DefaultArrow/>
        </SegmentedTriggerButton.Icon>
    </SegmentedTriggerButton>
));

TriggerButton.displayName = "TriggerButton";

export default TriggerButton;