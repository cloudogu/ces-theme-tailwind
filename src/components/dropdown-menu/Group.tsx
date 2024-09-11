import ButtonItem from "@components/dropdown-menu/ButtonItem";
import Item from "@components/dropdown-menu/Item";
import LinkItem from "@components/dropdown-menu/LinkItem";
import RouterLinkItem from "@components/dropdown-menu/RouterLinkItem";
import UnstyledItem from "@components/dropdown-menu/UnstyledItem";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {type DropdownMenuGroupProps as RadixDropdownMenuGroupProps} from "@radix-ui/react-dropdown-menu/dist";
import React, { forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";


export type GroupProps = RadixDropdownMenuGroupProps & ComponentPropsWithoutRef<"div"> & Testid;

type ComponentType = ComponentTypeWithRef<GroupProps, HTMLDivElement> & {
    Item: typeof Item,
    UnstyledItem: typeof UnstyledItem,
    ButtonItem: typeof ButtonItem,
    LinkItem: typeof LinkItem,
    RouterLinkItem: typeof RouterLinkItem,
};

const Group = forwardRef<HTMLDivElement, GroupProps>((props, ref) => (
    <DropdownMenu.Group asChild={true}>
        <div
            {...props}
            ref={ref}
            className={
                twMerge(
                    "border-b-3 last:border-b-0 border-b-neutral flex flex-col",
                    props.className
                )
            }
        />
    </DropdownMenu.Group>
)) as ComponentType;

Group.displayName = "Group";
Group.UnstyledItem = UnstyledItem;
Group.Item = Item;
Group.ButtonItem = ButtonItem;
Group.LinkItem = LinkItem;
Group.RouterLinkItem = RouterLinkItem;
export default Group;