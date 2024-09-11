import SegmentedCheckbox from "@components/inputs/checkbox/SegmentedCheckbox";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import type {SegmentedCheckboxProps} from "@components/inputs/checkbox/SegmentedCheckbox";

export type CheckboxProps = SegmentedCheckboxProps;

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((
    {
        checked,
        ...props
    }, ref) => (
    (
        <SegmentedCheckbox
            {...props}
            checked={checked}
            ref={ref}
        >
            <SegmentedCheckbox.CheckboxIndicator>
                {checked === "indeterminate" ?
                    <SegmentedCheckbox.CheckboxIndicator.CheckIconMinus
                        data-testid={subTestid(props, "indeterminate")}/>
                    :
                    <SegmentedCheckbox.CheckboxIndicator.CheckIcon data-testid={subTestid(props, "checked")}/>
                }
            </SegmentedCheckbox.CheckboxIndicator>
        </SegmentedCheckbox>
    )));

Checkbox.displayName = "Checkbox";

export default Checkbox;
