import {subTestid} from "@src/types/Testid";
import React from "react";
import ButtonItem from "./ButtonItem";
import CommonIcons from "./CommonIcons";
import Content from "./Content";
import Group from "./Group";
import Item from "./Item";
import LinkItem from "./LinkItem";
import RouterLinkItem from "./RouterLinkItem";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import type Testid from "../../types/Testid";
import type {DropdownMenuProps as RadixDropdownMenuProps} from "@radix-ui/react-dropdown-menu/dist";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {ReactElement} from "react";

export type DropdownMenuProps = RadixDropdownMenuProps & Testid & {
    triggerButtonContent?: ReactElement;
    disabled?: boolean;
};

type ComponentType =
    ComponentTypeWithRef<DropdownMenuProps, HTMLButtonElement>
    & {
    Item: typeof Item,
    LinkItem: typeof LinkItem,
    ButtonItem: typeof ButtonItem;
    RouterLinkItem: typeof RouterLinkItem;
    CommonIcons: typeof CommonIcons;
    Group: typeof Group;
}

const DropdownMenu = React.forwardRef<HTMLButtonElement, DropdownMenuProps>(
    ({
        triggerButtonContent = <CommonIcons.ThreeDotIcon/>,
        children,
        dir,
        open,
        defaultOpen,
        onOpenChange,
        modal,
        ...props
    }, ref
    ) => (
        <SegmentedDropdownMenu
            dir={dir}
            open={open}
            defaultOpen={defaultOpen}
            onOpenChange={onOpenChange}
            modal={modal}>
            <SegmentedDropdownMenu.TriggerButton
                {...props}
                disabled={props.disabled}
                ref={ref}
                data-testid={subTestid(props, "trigger")}>
                {triggerButtonContent}
            </SegmentedDropdownMenu.TriggerButton>
            <Content data-testid={subTestid(props, "content")}>
                {children}
            </Content>
        </SegmentedDropdownMenu>
    )) as ComponentType;

DropdownMenu.displayName = "Dropdown";
DropdownMenu.Item = Item;
DropdownMenu.LinkItem = LinkItem;
DropdownMenu.ButtonItem = ButtonItem;
DropdownMenu.RouterLinkItem = RouterLinkItem;
DropdownMenu.Group = Group;
DropdownMenu.CommonIcons = CommonIcons;
export default DropdownMenu;