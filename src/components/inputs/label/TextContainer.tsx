import React, { forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import LabelDangerIcon from "./LabelDangerIcon";
import LabelSuccessIcon from "./LabelSuccessIcon";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type TextContainerProps = ComponentPropsWithoutRef<"span"> & Testid;

type ComponentType = ComponentTypeWithRef<TextContainerProps, HTMLSpanElement> & {
    DangerIcon: typeof LabelDangerIcon;
    SuccessIcon: typeof LabelSuccessIcon;
};

const TextContainer = forwardRef<HTMLSpanElement, TextContainerProps>((props, ref) => (
    <span
        {...props}
        ref={ref}
        className={
            twMerge(
                "inline-flex items-center gap-1.5",
                props.className
            )
        }
    />
)) as ComponentType;

TextContainer.displayName = "TextContainer";
TextContainer.DangerIcon = LabelDangerIcon;
TextContainer.SuccessIcon = LabelSuccessIcon;

export default TextContainer;
