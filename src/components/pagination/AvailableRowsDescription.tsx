import SkeletonBar from "@components/SkeletonBar";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type PaginationAvailableRowsDescriptionProps = ComponentPropsWithoutRef<"span"> & Testid;

type ComponentType =
    ComponentTypeWithRef<PaginationAvailableRowsDescriptionProps,HTMLSpanElement> &
    {
        Skeleton: typeof SkeletonBar;
    };

const AvailableRowsDescription = forwardRef<HTMLSpanElement, PaginationAvailableRowsDescriptionProps>((props, ref) => (
    <span
        {...props}
        ref={ref}
        className={
            twMerge(
                "flex flex-row items-center",
                props.className
            )
        }
    />
)) as ComponentType;

AvailableRowsDescription.displayName = "AvailableRowsDescription";
AvailableRowsDescription.Skeleton = SkeletonBar;

export default AvailableRowsDescription;