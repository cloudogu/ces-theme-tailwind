import * as RadixSelect from "@radix-ui/react-select";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../../constants/DefaultStyles";
import {CesIconCaretDown} from "../../icons";
import type {IconProps} from "@phosphor-icons/react";
import type {SelectScrollDownButtonProps as RadixSelectScrollDownButtonProps} from "@radix-ui/react-select";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type SelectScrollDownButtonProps = RadixSelectScrollDownButtonProps;

const Arrow = ({weight = "fill", ...props}: IconProps & ComponentPropsWithoutRef<"svg">) => (
    <CesIconCaretDown {...props} weight={weight} className={twMerge("text-neutral")}/>
);

type ComponentType = ComponentTypeWithRef<SelectScrollDownButtonProps, HTMLDivElement> &
    {
        Arrow: typeof Arrow,
    };

const ScrollDownButton = forwardRef<HTMLDivElement, SelectScrollDownButtonProps>((props, ref) => (
    <RadixSelect.ScrollDownButton
        {...props}
        ref={ref}
        className={twMerge(DefaultStyles.DefaultTextStyling, "flex flex-row justify-center bg-transparent", props.className)}
    />
)) as ComponentType;

ScrollDownButton.displayName = "ScrollDownButton";
ScrollDownButton.Arrow = Arrow;

export default ScrollDownButton;