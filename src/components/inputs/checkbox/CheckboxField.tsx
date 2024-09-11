import Checkbox from "@components/inputs/checkbox/Checkbox";
import SegmentedLabel from "@components/inputs/label/SegmentedLabel";
import {subTestid} from "@src/types/Testid";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {CheckboxProps} from "@components/inputs/checkbox/Checkbox";
import type { ReactNode} from "react";

export type CheckboxFieldProps = CheckboxProps & {
    children: ReactNode,
    alignLabel?: "LEFT" | "RIGHT";
};

const CheckboxField = forwardRef<HTMLButtonElement, CheckboxFieldProps>(
    (
        {
            checked,
            children,
            className,
            alignLabel = "RIGHT",
            ...props
        }, ref) => (
        <SegmentedLabel data-testid={subTestid(props, "label")} className={twMerge("flex flex-row gap-2", className)}>
            {alignLabel === "LEFT" && children}
            <Checkbox data-testid={subTestid(props, "checkbox")} checked={checked} {...props} ref={ref}/>
            {alignLabel === "RIGHT" && children}
        </SegmentedLabel>
    ));

CheckboxField.displayName = "CheckboxField";

export default CheckboxField;
