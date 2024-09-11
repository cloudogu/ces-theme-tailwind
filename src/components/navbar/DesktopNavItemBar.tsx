import DesktopNavItemBarLink from "@components/navbar/DesktopNavItemBarLink";
import DropdownMenu from "@components/navbar/DropdownMenu";
import {useNavbarContext} from "@components/navbar/NavbarRoot";
import PreconfiguredDropdownMenuMore from "@components/navbar/PreconfiguredDropdownMenuMore";
import {useForwardedRef} from "@src/hooks/useForwardedRef";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type NavbarDesktopNavItemBarProps = ComponentPropsWithoutRef<"div"> & Testid;

type ComponentType = ComponentTypeWithRef<NavbarDesktopNavItemBarProps, HTMLDivElement> & {
    Link: typeof DesktopNavItemBarLink;
    Menu: typeof DropdownMenu;
    MenuMore: typeof PreconfiguredDropdownMenuMore;
};

const DesktopNavItemBar = forwardRef<HTMLDivElement, NavbarDesktopNavItemBarProps>((props, ref) => {
    const barRef = useForwardedRef<HTMLDivElement>(ref);
    const {registerForActualWidthCount, moreMenuMinWidth} = useNavbarContext();
    registerForActualWidthCount(barRef, "nav-item-bar");

    return (
        <div
            role={"menubar"}
            {...props}
            ref={barRef}
            style={{
                ...props.style,
                minWidth: moreMenuMinWidth
            }}
            className={
                twMerge(
                    "flex-1 whitespace-nowrap flex flex-row overflow-hidden mobile:hidden group-force-mobile:hidden",
                    props.className
                )
            }
        />
    );
}) as ComponentType;

DesktopNavItemBar.displayName = "DesktopItemBar";
DesktopNavItemBar.Link = DesktopNavItemBarLink;
DesktopNavItemBar.Menu = DropdownMenu;
DesktopNavItemBar.MenuMore = PreconfiguredDropdownMenuMore;

export default DesktopNavItemBar;