import DropdownMenu from "@components/navbar/DropdownMenu";
import DropdownMenuGroup from "@components/navbar/DropdownMenuGroup";
import DropdownMenuLink from "@components/navbar/DropdownMenuLink";
import {useForwardedRef} from "@src/hooks/useForwardedRef";
import {t} from "i18next";
import React, {forwardRef} from "react";

import {useNavbarContext} from "./NavbarRoot";
import type {NavbarDropdownMenuProps} from "@components/navbar/DropdownMenu";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ReactElement} from "react";

export type NavbarPreconfiguredDropdownMenuMoreProps =
    Omit<NavbarDropdownMenuProps, "triggerButtonText" | "triggerButtonIcon">
    & {
    triggerButtonText?: string;
    triggerButtonIcon?: ReactElement;
};

type ComponentType = ComponentTypeWithRef<NavbarPreconfiguredDropdownMenuMoreProps, HTMLButtonElement> & {
    Link: typeof DropdownMenuLink;
    Group: typeof DropdownMenuGroup;
};

const PreconfiguredDropdownMenuMore = forwardRef<HTMLButtonElement, NavbarPreconfiguredDropdownMenuMoreProps>(
    (
        {
            triggerButtonText = t("ces-theme-tailwind-lib-translation.navbar.more"),
            triggerButtonIcon = <DropdownMenu.IconDefaultMore size={32}/>,
            ...props
        }, ref) => {
        const {registerForMinWidthCount, registerMoreMenuWidth} = useNavbarContext();
        const menuRef = useForwardedRef<HTMLButtonElement>(ref);
        registerForMinWidthCount(menuRef, "more-menu");
        registerMoreMenuWidth(menuRef);

        return (
            <DropdownMenu
                triggerButtonText={triggerButtonText}
                triggerButtonIcon={triggerButtonIcon}
                {...props}
                ref={menuRef}
            />
        );
    }
) as ComponentType;

PreconfiguredDropdownMenuMore.displayName = "DesktopDropdownMenuMore";
PreconfiguredDropdownMenuMore.Link = DropdownMenuLink;
PreconfiguredDropdownMenuMore.Group = DropdownMenuGroup;

export default PreconfiguredDropdownMenuMore;