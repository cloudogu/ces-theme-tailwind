import {subTestid} from "@src/types/Testid";
import React, { forwardRef} from "react";
import {Link as RouterLink} from "react-router-dom";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";
import type { LinkProps as RouterLinkProps} from "react-router-dom";

export type NavbarLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & Omit<RouterLinkProps, "to"> & Testid & {
    href?: string;
    to?: string;
};

type ComponentType = ComponentTypeWithRef<NavbarLinkProps, HTMLAnchorElement>;

const Link = forwardRef<HTMLAnchorElement, NavbarLinkProps>(({to, href, ...props}, ref) =>
    <>
        {(to !== undefined) ?
            <RouterLink {...props} ref={ref} data-testid={subTestid(props, "router")} to={to}/> :
            <a {...props} ref={ref} data-testid={subTestid(props, "normal")} href={href}/>}
    </>
) as ComponentType;

Link.displayName = "Link";

export default Link;