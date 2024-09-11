import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import LineCountSelect from "./LineCountSelect";
import LineCountText from "./LineCountText";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type PaginationRowCountSelectionProps = ComponentPropsWithoutRef<"label">;

type ComponentType =
    ComponentTypeWithRef<PaginationRowCountSelectionProps,HTMLLabelElement>
    & {
    Text: typeof LineCountText,
    Select: typeof LineCountSelect,
};

const SelectionArea = forwardRef<HTMLLabelElement, PaginationRowCountSelectionProps>((props, ref) => (
    <label
        {...props}
        ref={ref}
        className={
            twMerge(
                "flex flex-row items-center gap-default mobile:justify-end",
                props.className
            )
        }
    >
        {props.children}
    </label>
)) as ComponentType;

SelectionArea.displayName = "RowCountSelection";
SelectionArea.Select = LineCountSelect;
SelectionArea.Text = LineCountText;
export default SelectionArea;