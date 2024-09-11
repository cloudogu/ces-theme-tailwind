import AvailableRowsDescription from "@components/pagination/AvailableRowsDescription";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import Back from "./Back";
import Forward from "./Forward";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type PaginationNavigationAreaProps = ComponentPropsWithoutRef<"div"> & Testid;

type ComponentType =
    ComponentTypeWithRef<PaginationNavigationAreaProps,HTMLDivElement>
    & {
    Back: typeof Back;
    Forward: typeof Forward;
    RowsDescriptionArea: typeof AvailableRowsDescription;
};

const NavigationArea = forwardRef<HTMLDivElement, PaginationNavigationAreaProps>((props, ref) => (
    <div
        {...props}
        ref={ref}
        className={
            twMerge(
                "flex flex-row items-center mobile:justify-end",
                props.className
            )
        }
    />
)) as ComponentType;

NavigationArea.displayName = "NavigationArea";
NavigationArea.Back = Back;
NavigationArea.Forward = Forward;
NavigationArea.RowsDescriptionArea = AvailableRowsDescription;
export default NavigationArea;