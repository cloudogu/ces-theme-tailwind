import DesktopNavItemBar from "@components/navbar/DesktopNavItemBar";
import DesktopNavItemBarRight from "@components/navbar/DesktopNavItemBarRight";
import MobileMenuItemBar from "@components/navbar/MobileMenuItemBar";
import {useNavbarContext} from "@components/navbar/NavbarRoot";
import {useForwardedRef} from "@src/hooks/useForwardedRef";
import React, {forwardRef, useMemo} from "react";
import {twMerge} from "tailwind-merge";
import ApplicationTitle from "./ApplicationTitle";
import type NavbarBody from "@components/navbar/NavbarBody";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type SegmentedNavbarProps = ComponentPropsWithoutRef<"nav"> & Testid;

type ComponentType = ComponentTypeWithRef<SegmentedNavbarProps, HTMLDivElement> & {
    Body: typeof NavbarBody;
    DesktopNavItemBar: typeof DesktopNavItemBar;
    DesktopRightItemBar: typeof DesktopNavItemBarRight;
    MobileMenuItemBar: typeof MobileMenuItemBar;
    ApplicationTitle: typeof ApplicationTitle;
};

const SegmentedNavbar = forwardRef<HTMLDivElement, SegmentedNavbarProps>((props, ref) => {
    const navbarRef = useForwardedRef<HTMLDivElement>(ref);
    const {registerNavbar, forceMobile} = useNavbarContext();
    registerNavbar(navbarRef);

    return useMemo(() => (
        <nav
            {...props}
            ref={navbarRef}
            data-ces-theme-force-mobile={forceMobile}
            className={
                twMerge(
                    "flex flex-row border-b border-brand min-w-full",
                    "mobile:justify-between",
                    "force-mobile:justify-between",
                    "-force-mobile:desktop:h-12 -force-mobile:desktop:gap-5",
                    props.className,
                )
            }
        />
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [forceMobile, props]);
}) as ComponentType;

SegmentedNavbar.displayName = "Navbar";
SegmentedNavbar.DesktopNavItemBar = DesktopNavItemBar;
SegmentedNavbar.DesktopRightItemBar = DesktopNavItemBarRight;
SegmentedNavbar.MobileMenuItemBar = MobileMenuItemBar;
SegmentedNavbar.ApplicationTitle = ApplicationTitle;

export default SegmentedNavbar;