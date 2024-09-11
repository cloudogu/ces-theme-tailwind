import {CheckboxIndicator as RadixCheckboxIndicator} from "@radix-ui/react-checkbox";
import {forwardRef} from "react";
import CheckIcon from "./CheckIcon";
import CheckIconMinus from "./CheckIconMinus";
import type Testid from "../../../types/Testid";
import type {CheckboxIndicatorProps as RadixCheckboxIndicatorProps} from "@radix-ui/react-checkbox";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type CheckboxIndicatorProps = RadixCheckboxIndicatorProps & Testid;

type ComponentType = ComponentTypeWithRef<CheckboxIndicatorProps, HTMLSpanElement> & {
    CheckIcon: typeof CheckIcon;
    CheckIconMinus: typeof CheckIconMinus;
};

const CheckboxIndicator = forwardRef<HTMLSpanElement, CheckboxIndicatorProps>(
    (props, ref) =>
        <RadixCheckboxIndicator
            {...props}
            ref={ref}
        />
) as ComponentType;

CheckboxIndicator.displayName = "CheckboxIndicator";
CheckboxIndicator.CheckIcon = CheckIcon;
CheckboxIndicator.CheckIconMinus = CheckIconMinus;

export default CheckboxIndicator;
