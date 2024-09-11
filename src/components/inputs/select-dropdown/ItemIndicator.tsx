
import * as RadixSelect from "@radix-ui/react-select";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import {CesIconCheckFat} from "../../icons";
import type Testid from "../../../types/Testid";
import type {IconProps} from "@phosphor-icons/react";
import type {SelectItemIndicatorProps as RadixSelectItemIndicatorProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type SelectItemIndicatorProps = RadixSelectItemIndicatorProps & Testid;
const DefaultIcon = ({weight = "fill", ...props}: IconProps & ComponentPropsWithoutRef<"svg">) => (
    <CesIconCheckFat
        {...props}
        weight={weight}
    />
);

type ComponentType = ComponentTypeWithRef<SelectItemIndicatorProps, HTMLSpanElement> &
    {
        DefaultIcon: typeof DefaultIcon
    };

const ItemIndicator = forwardRef<HTMLSpanElement, SelectItemIndicatorProps>((props, ref) => (
    <RadixSelect.ItemIndicator
        {...props}
        ref={ref}
        className={
            twMerge(
                "flex flex-col justify-center items-center text-brand",
                "group-data-[highlighted]/select-item:text-inverted-text",
                "group-[&:not([data-highlighted]):hover]/select-item:text-inverted-text",
                props.className,
            )
        }
    />
)) as ComponentType;

ItemIndicator.displayName = "ItemIndicator";
ItemIndicator.DefaultIcon = DefaultIcon;

export default ItemIndicator;

