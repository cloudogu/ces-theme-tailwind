import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import BodyColumn from "./BodyColumn";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type TableBodyRowProps = ComponentPropsWithoutRef<"tr"> & Testid;

type ComponentType =
    ComponentTypeWithRef<TableBodyRowProps, HTMLTableRowElement>
    & {
    Column: typeof BodyColumn;
};

const BodyRow = forwardRef<HTMLTableRowElement, TableBodyRowProps>((props, ref) => (
    <tr
        {...props}
        ref={ref}
        className={
            twMerge(
                "border-b border-neutral",
                props.className
            )
        }
    />
)) as ComponentType;

BodyRow.displayName = "BodyRow";
BodyRow.Column = BodyColumn;

export default BodyRow;
