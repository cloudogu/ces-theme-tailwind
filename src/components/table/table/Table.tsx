import HeadWithOneRow from "@components/table/table/HeadWithOneRow";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import Body from "./Body";
import Foot from "./Foot";
import Head from "./Head";
import Skeleton from "./Skeleton";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type TableProps = ComponentPropsWithoutRef<"table"> & Testid;

type ComponentType =
    ComponentTypeWithRef<TableProps, HTMLTableElement>
    & {
    Body: typeof Body,
    Foot: typeof Foot,
    Head: typeof Head,
    HeadWithOneRow: typeof HeadWithOneRow,
    SkeletonBody: typeof Skeleton,
};


const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => (
    <table
        {...props}
        ref={ref}
        className={
            twMerge(
                "w-full border-collapse",
                props.className
            )
        }
    />
)) as ComponentType;

Table.displayName = "Table";
Table.Body = Body;
Table.Foot = Foot;
Table.Head = Head;
Table.HeadWithOneRow = HeadWithOneRow;
Table.SkeletonBody = Skeleton;
export default Table;