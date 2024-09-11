import Content from "@components/dropdown-menu/Content";
import DropdownMenuLink from "@components/navbar/DropdownMenuLink";
import DropdownMenuTriggerButton from "@components/navbar/DropdownMenuTriggerButton";
import HamburgerMenuIcon from "@components/navbar/HamburgerMenuIcon";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import SegmentedDropdownMenu from "../dropdown-menu/SegmentedDropdownMenu";
import DropdownMenuGroup from "./DropdownMenuGroup";
import type {NavbarDropdownMenuProps} from "./DropdownMenu";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ReactElement} from "react";

export type NavbarPreconfiguredDropdownMenuMobileProps =
    Omit<NavbarDropdownMenuProps, "triggerButtonText" | "triggerButtonIcon">
    & {
    triggerButtonText?: string;
    triggerButtonIcon?: ReactElement;
};

type ComponentType = ComponentTypeWithRef<NavbarPreconfiguredDropdownMenuMobileProps, HTMLButtonElement> & {
    Link: typeof DropdownMenuLink;
    Group: typeof DropdownMenuGroup;
};

const PreconfiguredDropdownMenuMobile = forwardRef<HTMLButtonElement, NavbarPreconfiguredDropdownMenuMobileProps>(
    ({
        triggerButtonText = "",
        triggerButtonIcon = <HamburgerMenuIcon/>,
        children,
        dir,
        open,
        defaultOpen,
        onOpenChange,
        modal,
        ...props
    }, ref) => (
        <SegmentedDropdownMenu
            dir={dir}
            open={open}
            defaultOpen={defaultOpen}
            onOpenChange={onOpenChange}
            modal={modal}
        >
            <DropdownMenuTriggerButton
                disabled={props.disabled}
                icon={triggerButtonIcon}
                ref={ref}
                className={
                    twMerge("-group-force-mobile:desktop:hidden",
                        "group/mobile-menu-trigger-button h-[56px] w-[56px] !p-0",
                        props.className
                    )
                }
                data-testid={subTestid(props, "trigger")}>
                {triggerButtonText}
            </DropdownMenuTriggerButton>
            <Content
                data-testid={subTestid(props, "content")}
                className={"w-screen -group-force-mobile:desktop:hidden"}
            >
                {children}
            </Content>
        </SegmentedDropdownMenu>
    )
) as ComponentType;

PreconfiguredDropdownMenuMobile.displayName = "PreconfiguredNavbarDropdownMenuMobile";
PreconfiguredDropdownMenuMobile.Link = DropdownMenuLink;
PreconfiguredDropdownMenuMobile.Group = DropdownMenuGroup;
export default PreconfiguredDropdownMenuMobile;