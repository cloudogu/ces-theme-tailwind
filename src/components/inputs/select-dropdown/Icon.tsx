import * as RadixSelect from "@radix-ui/react-select";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import {CesIconCaretDown} from "../../icons";
import type Testid from "../../../types/Testid";
import type {IconProps} from "@phosphor-icons/react";
import type {SelectIconProps as RadixSelectIconProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type SelectIconProps = RadixSelectIconProps & Testid;

const DefaultArrow = (props: IconProps & ComponentPropsWithoutRef<"svg">) => (
    <CesIconCaretDown weight={"fill"} {...props}
        className={twMerge("group-disabled:text-neutral-weak text-neutral group-aria-expanded:text-brand")}/>
);

type ComponentType = ComponentTypeWithRef<SelectIconProps, HTMLSpanElement> &
    {
        DefaultArrow: typeof DefaultArrow
    };

const Icon = forwardRef<HTMLSpanElement, SelectIconProps>((props, ref) => (
    <RadixSelect.Icon
        {...props}
        ref={ref}
        className={
            twMerge(
                "flex flex-col justify-center",
                props.className,
            )
        }
    />
)) as ComponentType;

Icon.displayName = "Icon";
Icon.DefaultArrow = DefaultArrow;
export default Icon;