import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import NavigationArea from "./NavigationArea";
import SelectionArea from "./SelectionArea";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type SegmentedPaginationProps = ComponentPropsWithoutRef<"div">;

type ComponentType =
    ComponentTypeWithRef<SegmentedPaginationProps, HTMLDivElement>
    & {
    SelectionArea: typeof SelectionArea,
    NavigationArea: typeof NavigationArea,
};

const SegmentedPagination = forwardRef<HTMLDivElement, SegmentedPaginationProps>((
    {
        children,
        ...props
    }, ref) => (
    <div
        {...props}
        ref={ref}
        className={
            twMerge(
                "flex desktop:flex-row mobile:flex-col gap-default-3x p-default justify-end mt-auto",
                "mobile:sticky mobile:bottom-0 mobile:left-0",
                props.className
            )
        }
    >
        {children}
    </div>
)) as ComponentType;

SegmentedPagination.displayName = "Pagination";
SegmentedPagination.SelectionArea = SelectionArea;
SegmentedPagination.NavigationArea = NavigationArea;

export default SegmentedPagination;