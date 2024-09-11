import Select from "@components/inputs/select-dropdown/Select";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import { usePaginationContext } from "./Context";
import LineCountSelectItem from "./LineCountSelectItem";
import type {SelectProps} from "../inputs/select-dropdown";
import type {PaginationLinesPerPageOption} from "@components/pagination/hooks/usePaginationControl.types";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";


export type PaginationRowCountSelectionSelectProps =
    Omit<SelectProps, "placeholder" | "defaultValue" | "value" | "onValueChange">
    & {
    defaultValue?: number;
} & Testid;

type ComponentType =
    ComponentTypeWithRef<PaginationRowCountSelectionSelectProps, HTMLButtonElement>
    & {
    Item: typeof LineCountSelectItem;
};


const LineCountSelect = forwardRef<HTMLButtonElement, PaginationRowCountSelectionSelectProps>((props, ref) => {
    const {linesPerPage, setLinesPerPage, lineCountOptions} = usePaginationContext();

    return (
        <Select
            {...props}
            ref={ref}
            placeholder={""}
            defaultValue={`${props.defaultValue}`}
            className={
                twMerge(
                    "w-[5rem]",
                    props.className
                )
            }
            value={`${linesPerPage}`}
            onValueChange={
                (value: string) => { setLinesPerPage(Number.parseInt(value));}
            }
        >
            {props.children ?? <>
                {
                    lineCountOptions
                        .map((v: PaginationLinesPerPageOption, i) => {
                            const isNumber = typeof v === "number";
                            const value = (isNumber) ? v : v.value;

                            return (
                                <LineCountSelectItem
                                    key={value}
                                    data-testid={subTestid(props, `option-${i}`)}
                                    value={value}
                                    children={(isNumber) ? undefined : v.text}
                                />
                            );
                        })
                }
            </>}
        </Select>
    );
}) as ComponentType;

LineCountSelect.displayName = "RowCountSelectionSelect";
LineCountSelect.Item = LineCountSelectItem;
export default LineCountSelect;