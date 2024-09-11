import HeadRow from "@components/table/table/HeadRow";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import Head from "./Head";
import HeadColumn from "./HeadColumn";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type TableHeadWithOneRowProps = ComponentPropsWithoutRef<"thead"> & Testid;

type ComponentType =
    ComponentTypeWithRef<TableHeadWithOneRowProps,HTMLTableSectionElement>
    & {
    Column: typeof HeadColumn;
};

const HeadWithOneRow = forwardRef<HTMLTableSectionElement, TableHeadWithOneRowProps>(({children, ...props}, ref) => (
    <Head {...props} ref={ref}>
        <HeadRow data-testid={subTestid(props, "row")}>
            {children}
        </HeadRow>
    </Head>
)) as ComponentType;

HeadWithOneRow.displayName = "HeadWithOneRow";
HeadWithOneRow.Column = HeadColumn;
export default HeadWithOneRow;