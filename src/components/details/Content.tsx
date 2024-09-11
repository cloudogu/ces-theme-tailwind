import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type ContentProps = ComponentPropsWithoutRef<"div"> & Testid & {
    renderBorder?: boolean;
};

type ComponentType = ComponentTypeWithRef<ContentProps, HTMLDivElement>;

const Content = forwardRef<HTMLDivElement, ContentProps>((props, ref) => (
    <div
        {...props}
        ref={ref}
        className={
            twMerge(
                (props.renderBorder ?? true) ? "border-l-[3px] pl-[29px]" : "border-l-0 pl-8",
                props.className
            )
        }
    />
)) as ComponentType;

Content.displayName = "Content";

export default Content;