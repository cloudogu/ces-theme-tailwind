import Big from "big.js";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef, ReactNode} from "react";

type TableCellVariants = {
    children?: ReactNode | undefined;
    decimalPlaces?: undefined;
    variant?: undefined;
    floatingPointSymbol?: undefined;
} | {
    children?: number | undefined;
    decimalPlaces: number;
    variant: "numeric";
    floatingPointSymbol?: string;
};

export type TableBodyColumnProps = ComponentPropsWithoutRef<"td"> & Testid & TableCellVariants;

const BodyColumn = forwardRef<HTMLTableCellElement, TableBodyColumnProps>(({variant, children, decimalPlaces, floatingPointSymbol = ".", ...props}: TableBodyColumnProps, ref) => (
    <td
        {...props}
        ref={ref}
        className={
            twMerge(
                "h-12 px-default-2x",
                variant === "numeric" ? "text-right" : "text-left",
                props.className
            )
        }
    >
        {variant === "numeric" ? new Big(children ?? 1).toFixed(decimalPlaces, 0).replace(".", floatingPointSymbol) : children}
    </td>
));

BodyColumn.displayName = "BodyColumn";
export default BodyColumn;