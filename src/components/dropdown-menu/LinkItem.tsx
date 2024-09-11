import {forwardRef} from "react";
import Item from "./Item";
import type {DropdownMenuItemProps} from "./Item";
import type {ComponentPropsWithoutRef} from "react";

export type DropdownMenuLinkItemProps = ComponentPropsWithoutRef<"a"> & Omit<DropdownMenuItemProps, "asChild">

const LinkItem = forwardRef<HTMLAnchorElement, DropdownMenuLinkItemProps>((props, ref) => (
    <Item {...props} asChild={true}>
        <a
            {...props}
            ref={ref}
        />
    </Item>
));

LinkItem.displayName = "LinkItem";

export default LinkItem;

