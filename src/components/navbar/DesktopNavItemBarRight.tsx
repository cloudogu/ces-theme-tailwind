import DesktopNavItemBarLink from "@components/navbar/DesktopNavItemBarLink";
import {useNavbarContext} from "@components/navbar/NavbarRoot";
import PreconfiguredBarLinkHelp from "@components/navbar/PreconfiguredBarLinkHelp";
import PreconfiguredDropdownMenuUser from "@components/navbar/PreconfiguredDropdownMenuUser";
import {useForwardedRef} from "@src/hooks/useForwardedRef";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DropdownMenu from "./DropdownMenu";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type NavbarDesktopNavItemBarRightProps = ComponentPropsWithoutRef<"div"> & Testid;

type ComponentType = ComponentTypeWithRef<NavbarDesktopNavItemBarRightProps, HTMLDivElement> & {
    Link: typeof DesktopNavItemBarLink;
    LinkHelp: typeof PreconfiguredBarLinkHelp;
    Menu: typeof DropdownMenu;
    MenuUser: typeof PreconfiguredDropdownMenuUser;
};

const DesktopNavItemBarRight = forwardRef<HTMLDivElement, NavbarDesktopNavItemBarRightProps>((props, ref) => {
    const barRef = useForwardedRef<HTMLDivElement>(ref);
    const {registerForMinWidthCount, registerForActualWidthCount} = useNavbarContext();
    registerForMinWidthCount(barRef, "nav-item-bar-right");
    registerForActualWidthCount(barRef, "nav-item-bar-right");

    return (
        <div
            role={"menubar"}
            {...props}
            ref={barRef}
            className={
                twMerge(
                    "flex flex-row whitespace-nowrap mobile:hidden group-force-mobile:hidden pr-5",
                    props.className
                )
            }
        />
    );
}) as ComponentType;

DesktopNavItemBarRight.displayName = "DesktopRightItemBar";
DesktopNavItemBarRight.Link = DesktopNavItemBarLink;
DesktopNavItemBarRight.LinkHelp = PreconfiguredBarLinkHelp;
DesktopNavItemBarRight.Menu = DropdownMenu;
DesktopNavItemBarRight.MenuUser = PreconfiguredDropdownMenuUser;

export default DesktopNavItemBarRight;