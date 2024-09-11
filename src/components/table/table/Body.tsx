import React, {forwardRef} from "react";
import BodyRow from "./BodyRow";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type TableBodyProps = ComponentPropsWithoutRef<"tbody"> & Testid;

type ComponentType =
    ComponentTypeWithRef<TableBodyProps,HTMLTableSectionElement>
    & {
    Row: typeof BodyRow;
};

const Body = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => (
    <tbody
        {...props}
        ref={ref}
    />
)) as ComponentType;

Body.displayName = "Body";
Body.Row = BodyRow;
export default Body;