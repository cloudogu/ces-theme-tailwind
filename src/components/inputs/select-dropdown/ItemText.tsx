import * as RadixSelect from "@radix-ui/react-select";
import React, {forwardRef} from "react";

import type Testid from "../../../types/Testid";
import type {SelectItemTextProps as RadixSelectItemTextProps} from "@radix-ui/react-select";

export type SelectItemTextProps = Omit<RadixSelectItemTextProps, "className"> & Testid;

const ItemText = forwardRef<HTMLSpanElement, SelectItemTextProps>((props, ref) => (
    <RadixSelect.ItemText {...props} ref={ref}/>
));

ItemText.displayName = "ItemText";
export default ItemText;