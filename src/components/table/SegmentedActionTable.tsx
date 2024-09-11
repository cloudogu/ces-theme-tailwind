import Pagination from "@components/pagination/Pagination";
import SegmentedPagination from "@components/pagination/SegmentedPagination";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import { useActionTableContext } from "./Context";
import Table from "./table/Table";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type SegmentedActionTableProps = ComponentPropsWithoutRef<"div"> & Testid;

type ComponentType =
    ComponentTypeWithRef<SegmentedActionTableProps, HTMLDivElement>
    & {
    Pagination: typeof Pagination,
    SegmentedPagination: typeof SegmentedPagination,
    Table: typeof Table,
};

const SegmentedActionTable: ComponentType = forwardRef<HTMLDivElement, SegmentedActionTableProps>(
    ({
        children,
        ...props
    }, ref) => {
        const {isLoading} = useActionTableContext();

        return (
            <div
                {...props}
                ref={ref}
                aria-live={"polite"}
                aria-busy={isLoading}
                className={
                    twMerge(
                        "border border-neutral overflow-x-auto rounded-[4px] flex flex-col",
                        props.className
                    )
                }
            >
                {children}
            </div>
        );
    }
) as ComponentType;

SegmentedActionTable.displayName = "ActionTable";
SegmentedActionTable.SegmentedPagination = SegmentedPagination;
SegmentedActionTable.Pagination = Pagination;
SegmentedActionTable.Table = Table;
export default SegmentedActionTable;