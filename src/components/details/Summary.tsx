import DefaultStyles from "@src/constants/DefaultStyles";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import Arrow from "./Arrow";
import type Testid from "../../types/Testid";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type SummaryProps = ComponentPropsWithoutRef<"summary"> & Testid;

type ComponentType =
    ComponentTypeWithRef<SummaryProps, HTMLElement>
    & {
    Arrow: typeof Arrow;
};

const Summary = forwardRef<HTMLElement, SummaryProps>((props, ref) => (
    <summary
        {...props}
        ref={ref}
        className={
            twMerge(
                "list-none cursor-pointer",
                DefaultStyles.Focus,
                "outline-0 rounded",
                props.className
            )
        }
    />
)) as ComponentType;

Summary.displayName = "Summary";
Summary.Arrow = Arrow;
export default Summary;