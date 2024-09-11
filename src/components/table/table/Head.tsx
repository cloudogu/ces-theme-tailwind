import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import HeadRow from "./HeadRow";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type TableHeadProps = ComponentPropsWithoutRef<"thead"> & Testid;

type ComponentType =
    ComponentTypeWithRef<TableHeadProps,HTMLTableSectionElement>
    & {
    Row: typeof HeadRow;
};


const Head = forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => (
    <thead
        {...props}
        ref={ref}
        className={
            twMerge(
                "text-neutral",
                props.className
            )
        }
    />
)) as ComponentType;

Head.displayName = "Head";
Head.Row = HeadRow;

export default Head;