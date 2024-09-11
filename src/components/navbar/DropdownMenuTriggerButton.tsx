import TextWithOptionalIcon from "@components/TextWithOptionalIcon";
import DefaultStyles from "@src/constants/DefaultStyles";
import React, { forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import TriggerButton from "../dropdown-menu/TriggerButton";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef, ReactElement} from "react";

export type NavbarDropdownMenuTriggerButtonProps = Omit<ComponentPropsWithoutRef<"button">, "children"> & Testid & {
    icon?: ReactElement;
    children?: ReactElement | string;
};

type ComponentType = ComponentTypeWithRef<NavbarDropdownMenuTriggerButtonProps, HTMLButtonElement>;

const DropdownMenuTriggerButton = forwardRef<HTMLButtonElement, NavbarDropdownMenuTriggerButtonProps>((
    {
        icon,
        children,
        ...props
    }, ref) => (
    <TriggerButton
        role={"menuitem"}
        {...props}
        ref={ref}
        className={
            twMerge(
                "flex flex-row h-12 w-min items-center",
                "bg-transparent hover:bg-brand focus-visible:bg-brand",
                "text-default-text hover:text-inverted-text focus-visible:text-inverted-text",
                "focus-visible:shadow-none",
                "border-y-4 rounded-none",
                "px-default-2x",
                DefaultStyles.TextSizeRegular,
                props.className
            )
        }
    >
        <TextWithOptionalIcon icon={icon}>
            {children}
        </TextWithOptionalIcon>
    </TriggerButton>
)) as ComponentType;

DropdownMenuTriggerButton.displayName = "DropdownMenuTriggerButton";

export default DropdownMenuTriggerButton;