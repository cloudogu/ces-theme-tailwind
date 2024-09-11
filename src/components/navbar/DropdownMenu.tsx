import Content from "@components/dropdown-menu/Content";
import {CesIconCaretDown, CesIconUserCircle} from "@components/icons";
import DropdownMenuLink from "@components/navbar/DropdownMenuLink";
import DropdownMenuTriggerButton from "@components/navbar/DropdownMenuTriggerButton";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import SegmentedDropdownMenu from "../dropdown-menu/SegmentedDropdownMenu";
import DropdownMenuGroup from "./DropdownMenuGroup";
import type {DropdownMenuProps} from "@components/dropdown-menu";
import type {NavbarDropdownMenuTriggerButtonProps} from "@components/navbar/DropdownMenuTriggerButton";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ReactElement} from "react";

export type NavbarDropdownMenuProps = Omit<DropdownMenuProps, "triggerButtonContent"> &
    Pick<NavbarDropdownMenuTriggerButtonProps, "className"> &
    {
        triggerButtonText: string;
        triggerButtonIcon: ReactElement;
    };

type ComponentType = ComponentTypeWithRef<NavbarDropdownMenuProps, HTMLButtonElement> & {
    Link: typeof DropdownMenuLink;
    Group: typeof DropdownMenuGroup;
    IconDefaultMore: typeof CesIconCaretDown;
    IconDefaultUser: typeof CesIconUserCircle;
};

const DropdownMenu = forwardRef<HTMLButtonElement, NavbarDropdownMenuProps>(
    ({
        triggerButtonText,
        triggerButtonIcon,
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
                {...props}
                disabled={props.disabled}
                icon={triggerButtonIcon}
                ref={ref}
                className={twMerge("mobile:hidden group-force-mobile:hidden", props.className)}
                data-testid={subTestid(props, "trigger")}>
                {triggerButtonText}
            </DropdownMenuTriggerButton>
            <Content
                data-testid={subTestid(props, "content")}
                className={"mobile:hidden group-force-mobile:hidden"}>
                {children}
            </Content>
        </SegmentedDropdownMenu>
    )
) as ComponentType;

DropdownMenu.displayName = "NavbarDropdownMenu";
DropdownMenu.Link = DropdownMenuLink;
DropdownMenu.Group = DropdownMenuGroup;
DropdownMenu.IconDefaultMore = CesIconCaretDown;
DropdownMenu.IconDefaultUser = CesIconUserCircle;
export default DropdownMenu;