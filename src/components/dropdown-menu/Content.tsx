import React, {forwardRef} from "react";
import ButtonItem from "./ButtonItem";
import Group from "./Group";
import Item from "./Item";
import LinkItem from "./LinkItem";
import Portal from "./Portal";
import RouterLinkItem from "./RouterLinkItem";
import SegmentedContent from "./SegmentedContent";
import UnstyledItem from "./UnstyledItem";
import type {DropdownMenuSegmentedContentProps} from "./SegmentedContent";
import type Testid from "../../types/Testid";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";

export type DropdownMenuContentProps = DropdownMenuSegmentedContentProps & Testid;

type ComponentType =
    ComponentTypeWithRef<DropdownMenuContentProps, HTMLDivElement>
    & {
    UnstyledItem: typeof UnstyledItem;
    Item: typeof Item;
    ButtonItem: typeof ButtonItem;
    LinkItem: typeof LinkItem;
    RouterLinkItem: typeof RouterLinkItem;
    Group: typeof Group;
};

const Content = forwardRef<HTMLDivElement, DropdownMenuContentProps>((props, ref) => (
    <Portal>
        <SegmentedContent {...props} ref={ref}/>
    </Portal>
)) as ComponentType;

Content.displayName = "Content";
Content.UnstyledItem = UnstyledItem;
Content.Item = Item;
Content.ButtonItem = ButtonItem;
Content.LinkItem = LinkItem;
Content.RouterLinkItem = RouterLinkItem;
Content.Group = Group;
export default Content;