import renderPotentialFunctionChild from "@src/internalFunctions/renderPotentialFunctionChild";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef, useMemo} from "react";
import {twJoin, twMerge} from "tailwind-merge";

import SegmentedDropdownMenu from "../dropdown-menu/SegmentedDropdownMenu";
import type {DropdownMenuLinkItemProps, DropdownMenuRouterLinkItemProps} from "@components/dropdown-menu";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type { ReactNode} from "react";

export type NavbarDropdownMenuLinkProps =
    Omit<DropdownMenuLinkItemProps, "children"> &
    Omit<DropdownMenuRouterLinkItemProps, "to" | "children"> &
    {
        active?: boolean,
        to?: string,
        children?: ReactNode | (() => ReactNode),
    };

type ComponentType = ComponentTypeWithRef<NavbarDropdownMenuLinkProps, HTMLAnchorElement>;

const DropdownMenuLink = forwardRef<HTMLAnchorElement, NavbarDropdownMenuLinkProps>(
    ({
        active = false,
        to,
        href,
        children,
        ...props
    }, ref) => {
        const classes = useMemo(() => twJoin("px-5 text-default-text font-normal", (active) ? "border-l-4 border-l-brand" : ""), [active]);

        return (
            <>
                {(to !== undefined) ?
                    <SegmentedDropdownMenu.Content.RouterLinkItem
                        {...props}
                        to={to}
                        ref={ref}
                        color={"brand"}
                        data-testid={subTestid(props, "router")}
                        aria-current={(active) ? "page" : undefined}
                        className={twMerge(classes, props.className)}
                    >
                        {renderPotentialFunctionChild(children)}
                    </SegmentedDropdownMenu.Content.RouterLinkItem>
                    :
                    <SegmentedDropdownMenu.Content.LinkItem
                        {...props}
                        href={href}
                        ref={ref}
                        color={"brand"}
                        data-testid={subTestid(props, "normal")}
                        aria-current={(active) ? "page" : undefined}
                        className={twMerge(classes, props.className)}
                    >
                        {renderPotentialFunctionChild(children)}
                    </SegmentedDropdownMenu.Content.LinkItem>
                }
            </>
        );
    }
) as ComponentType;

DropdownMenuLink.displayName = "NavbarDropdownMenuLink";

export default DropdownMenuLink;