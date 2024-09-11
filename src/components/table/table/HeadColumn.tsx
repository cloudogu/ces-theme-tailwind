import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type TableHeadColumnProps = ComponentPropsWithoutRef<"th"> & Testid & { variant?: "numeric" };

const HeadColumn = forwardRef<HTMLTableCellElement, TableHeadColumnProps>(({variant, ...props}: TableHeadColumnProps, ref) => (
    <th
        {...props}
        ref={ref}
        className={
            twMerge(
                "h-12 px-default-2x",
                variant === "numeric" ? "text-right" : "text-left",
                props.className
            )
        }
    />
));

HeadColumn.displayName = "HeadColumn";
export default HeadColumn;