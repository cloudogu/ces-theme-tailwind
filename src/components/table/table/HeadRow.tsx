import BodyRow from "@components/table/table/BodyRow";
import HeadColumn from "@components/table/table/HeadColumn";
import {forwardRef} from "react";
import type {TableBodyRowProps} from "@components/table/table/BodyRow";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type TableHeadRowProps = TableBodyRowProps;

type ComponentType =
    ComponentTypeWithRef<TableHeadRowProps, HTMLTableRowElement>
    & {
    Column: typeof HeadColumn;
};

const HeadRow = forwardRef<HTMLTableRowElement, TableHeadRowProps>((props, ref) => (
    <BodyRow
        {...props}
        ref={ref}
    />
)) as ComponentType;

HeadRow.displayName = "HeadRow";
HeadRow.Column = HeadColumn;
export default HeadRow;