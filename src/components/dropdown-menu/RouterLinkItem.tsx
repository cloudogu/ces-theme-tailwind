import {forwardRef} from "react";
import {Link} from "react-router-dom";
import Item from "./Item";
import type {DropdownMenuItemProps} from "./Item";
import type {ComponentPropsWithoutRef} from "react";

export type DropdownMenuRouterLinkItemProps =
    ComponentPropsWithoutRef<typeof Link>
    & Omit<DropdownMenuItemProps, "asChild">;

const RouterLinkItem = forwardRef<HTMLAnchorElement, DropdownMenuRouterLinkItemProps>((props, ref) => (
    <Item {...props} asChild={true}>
        <Link
            {...props}
            to={props.to}
            ref={ref}
        />
    </Item>
));

RouterLinkItem.displayName = "RouterLinkItem";

export default RouterLinkItem;

