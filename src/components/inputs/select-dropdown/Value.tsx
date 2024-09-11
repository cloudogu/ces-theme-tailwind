import * as RadixSelect from "@radix-ui/react-select";
import {forwardRef} from "react";
import type Testid from "../../../types/Testid";
import type {SelectValueProps as RadixSelectValueProps} from "@radix-ui/react-select";

export type SelectValueProps = Omit<RadixSelectValueProps, "className"> & Testid;

const Value = forwardRef<HTMLSpanElement, SelectValueProps>((props, ref) => (
    <RadixSelect.Value {...props} ref={ref}/>
));

Value.displayName = "Value";
export default Value;