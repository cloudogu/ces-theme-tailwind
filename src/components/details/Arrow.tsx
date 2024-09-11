import {CesIconCaretDown, CesIconCaretUp} from "@components/icons";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type ArrowProps = ComponentPropsWithoutRef<"svg"> & Testid;

type ComponentType = ComponentTypeWithRef<ArrowProps, SVGSVGElement>;

const Arrow = forwardRef<SVGSVGElement, ArrowProps>((props, ref) => (
    // VERY IMPORTANT
    // Read the documentation before you consider changing this Arrow!
    // Look under docs/adr/Details.md
    <>
        <CesIconCaretDown
            weight={"bold"}
            viewBox={"0,24,256,256"}
            ref={ref}
            {...props}
            className={
                twMerge(
                    "group-open:hidden align-middle inline mr-[8px] w-[24px] h-[24px]",
                    props.className
                )
            }
        />
        <CesIconCaretUp
            weight={"bold"}
            viewBox={"0,24,256,256"}
            ref={ref}
            {...props}
            className={
                twMerge(
                    "hidden group-open:inline align-middle mr-[8px] w-[24px] h-[24px]",
                    props.className
                )
            }
        />
    </>
)) as ComponentType;

Arrow.displayName = "Arrow";
export default Arrow;
