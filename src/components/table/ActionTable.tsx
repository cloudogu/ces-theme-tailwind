import Pagination from "@components/pagination/Pagination";
import Body from "@components/table/table/Body";
import Foot from "@components/table/table/Foot";
import Head from "@components/table/table/Head";
import HeadWithOneRow from "@components/table/table/HeadWithOneRow";
import Skeleton from "@components/table/table/Skeleton";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import { useActionTableContext } from "./Context";
import SegmentedActionTable from "./SegmentedActionTable";
import Table from "./table/Table";
import type {SegmentedActionTableProps} from "./SegmentedActionTable";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type ActionTableProps = SegmentedActionTableProps & {
    lineCountText?: string;
    availableRowsDescription?: string;
    backButtonAriaLabel?: string;
    forwardButtonAriaLabel?: string;
};

type ComponentType =
    ComponentTypeWithRef<ActionTableProps, HTMLDivElement>
    & {
    Body: typeof Body;
    Head: typeof Head;
    Foot: typeof Foot;
    HeadWithOneRow: typeof HeadWithOneRow;
    SkeletonBody: typeof Skeleton;
};

const ActionTable: ComponentType = forwardRef<HTMLDivElement, ActionTableProps>((
    {
        children,
        lineCountText,
        availableRowsDescription,
        backButtonAriaLabel,
        forwardButtonAriaLabel,
        ...props
    }, ref) => {
    const ctx = useActionTableContext();

    return (
        <SegmentedActionTable ref={ref} {...props}>
            <Table data-testid={subTestid(props, "table")}>
                {children}
            </Table>
            <Pagination
                data-testid={subTestid(props, "pagination")}
                lineCountText={lineCountText}
                availableRowsDescription={availableRowsDescription}
                backButtonAriaLabel={backButtonAriaLabel}
                forwardButtonAriaLabel={forwardButtonAriaLabel}
                isLoading={ctx.isLoading}
            />
        </SegmentedActionTable>
    );
}) as ComponentType;

ActionTable.displayName = "ActionTable";
ActionTable.Body = Body;
ActionTable.Foot = Foot;
ActionTable.Head = Head;
ActionTable.HeadWithOneRow = HeadWithOneRow;
ActionTable.SkeletonBody = Skeleton;
export default ActionTable;