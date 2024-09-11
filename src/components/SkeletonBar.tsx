import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type SkeletonBarProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & Testid;

const SkeletonBar = forwardRef<HTMLDivElement, SkeletonBarProps>((props, ref) => (
    <div
        {...props}
        ref={ref}
        className={
            twMerge(
                "animate-pulse motion-reduce:animate-none bg-neutral-weak rounded h-6",
                props.className
            )
        }
    />
));

SkeletonBar.displayName = "SkeletonBar";
export default SkeletonBar;