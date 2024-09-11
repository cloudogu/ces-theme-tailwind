import React, {forwardRef} from "react";
import BodyRow from "./BodyRow";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type TableFootProps = ComponentPropsWithoutRef<"tfoot"> & Testid;

type ComponentType =
    ComponentTypeWithRef<TableFootProps, HTMLTableSectionElement>
    & {
    Row: typeof BodyRow;
};

const Foot = forwardRef<HTMLTableSectionElement, TableFootProps>((props, ref) => (
    <tfoot
        {...props}
        ref={ref}
    />
)) as ComponentType;

Foot.displayName = "Foot";
Foot.Row = BodyRow;
export default Foot;