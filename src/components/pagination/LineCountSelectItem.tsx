import React, { forwardRef} from "react";
import {Select} from "../inputs/select-dropdown";
import type {SelectItemProps} from "../inputs/select-dropdown";
import type Testid from "@src/types/Testid";
import type {ReactNode} from "react";


export type PaginationRowCountSelectionItemProps = Omit<SelectItemProps, "value" | "children"> & {
    value: number,
    children?: ReactNode,
} & Testid;

const LineCountSelectItem = forwardRef<HTMLDivElement, PaginationRowCountSelectionItemProps>((props, ref) => (
    <Select.Item
        {...props}
        ref={ref}
        value={`${props.value}`}
    >
        {props.children ?? props.value}
    </Select.Item>
));

LineCountSelectItem.displayName = "RowCountSelectionSelectItem";
export default LineCountSelectItem;