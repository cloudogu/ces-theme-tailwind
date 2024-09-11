import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import ButtonItem from "./ButtonItem";
import Group from "./Group";
import Item from "./Item";
import LinkItem from "./LinkItem";
import RouterLinkItem from "./RouterLinkItem";
import UnstyledItem from "./UnstyledItem";
import type Testid from "../../types/Testid";
import type {DropdownMenuContentProps as RadixDropdownMenuContentProps} from "@radix-ui/react-dropdown-menu/dist";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type DropdownMenuSegmentedContentProps = RadixDropdownMenuContentProps & Testid;

type ComponentType =
    ComponentTypeWithRef<DropdownMenuSegmentedContentProps, HTMLDivElement>
    & {
    Item: typeof Item,
    UnstyledItem: typeof UnstyledItem,
    ButtonItem: typeof ButtonItem,
    LinkItem: typeof LinkItem,
    RouterLinkItem: typeof RouterLinkItem,
    Group: typeof Group,
}

const SegmentedContent: ComponentType = forwardRef<HTMLDivElement, DropdownMenuSegmentedContentProps>((props, ref) => (
    <DropdownMenu.Content
        {...props}
        ref={ref}
        className={
            twMerge(
                "outline-0 rounded border border-neutral font-bold flex flex-col bg-default-background",
                "shadow-neutral-weak shadow max-h-[var(--radix-dropdown-menu-content-available-height)] overflow-auto",
                "group",
                props.className)
        }
    />
)) as ComponentType;

SegmentedContent.displayName = "Content";
SegmentedContent.UnstyledItem = UnstyledItem;
SegmentedContent.Item = Item;
SegmentedContent.ButtonItem = ButtonItem;
SegmentedContent.LinkItem = LinkItem;
SegmentedContent.RouterLinkItem = RouterLinkItem;
SegmentedContent.Group = Group;

export default SegmentedContent;