import * as RadixSelect from "@radix-ui/react-select";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../../constants/DefaultStyles";
import {CesIconCaretUp} from "../../icons";
import type {IconProps} from "@phosphor-icons/react";
import type {SelectScrollUpButtonProps as RadixSelectScrollUpButtonProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type SelectScrollUpButtonProps = RadixSelectScrollUpButtonProps;

const Arrow = ({weight = "fill", ...props}: IconProps & ComponentPropsWithoutRef<"svg">) => (
    <CesIconCaretUp {...props} weight={weight} className={twMerge("text-neutral")}/>
);

type ComponentType = ComponentTypeWithRef<SelectScrollUpButtonProps, HTMLDivElement> &
    {
        Arrow: typeof Arrow,
    };

const ScrollUpButton = forwardRef<HTMLDivElement, SelectScrollUpButtonProps>((props, ref) => (
    <RadixSelect.ScrollUpButton
        {...props}
        ref={ref}
        className={twMerge(DefaultStyles.DefaultTextStyling, "flex flex-row justify-center bg-transparent", props.className)}
    />
)) as ComponentType;

ScrollUpButton.displayName = "ScrollUpButton";
ScrollUpButton.Arrow = Arrow;
export default ScrollUpButton;