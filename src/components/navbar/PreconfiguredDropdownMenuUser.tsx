import DropdownMenu from "@components/navbar/DropdownMenu";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {NavbarDropdownMenuProps} from "@components/navbar/DropdownMenu";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type { ReactElement} from "react";

export type NavbarPreconfiguredDropdownMenuUserProps = Omit<NavbarDropdownMenuProps, "triggerButtonIcon"> & {
    triggerButtonIcon?: ReactElement;
};

type ComponentType = ComponentTypeWithRef<NavbarPreconfiguredDropdownMenuUserProps, HTMLButtonElement>;

const PreconfiguredDropdownMenuUser = forwardRef<HTMLButtonElement, NavbarPreconfiguredDropdownMenuUserProps>(
    (
        {
            triggerButtonIcon = <DropdownMenu.IconDefaultUser size={32}/>,
            ...props
        }, ref) => (
        <DropdownMenu
            triggerButtonIcon={triggerButtonIcon}
            {...props}
            ref={ref}
            className={twMerge("disabled:text-default-text", props.className)}
        />
    )
) as ComponentType;

PreconfiguredDropdownMenuUser.displayName = "NavbarPreconfiguredDropdownMenuUser";

export default PreconfiguredDropdownMenuUser;