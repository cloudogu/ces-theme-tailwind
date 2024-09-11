import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../constants/DefaultStyles";
import Content from "./Content";
import Summary from "./Summary";
import type Testid from "../../types/Testid";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type DetailProps = ComponentPropsWithoutRef<"details"> & Testid;

type ComponentType =
    ComponentTypeWithRef<DetailProps, HTMLDetailsElement>
    & {
    Summary: typeof Summary;
    Content: typeof Content;
};

const Details = forwardRef<HTMLDetailsElement, DetailProps>((props, ref) => (
    <details
        {...props}
        ref={ref}
        className={
            twMerge(
                "group",
                DefaultStyles.TextSizeRegular,
                props.className
            )
        }
    />
)) as ComponentType;

Details.displayName = "Details";
Details.Summary = Summary;
Details.Content = Content;
export default Details;