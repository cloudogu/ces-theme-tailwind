import React, { forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import PreconfiguredDropdownMenuMobile from "./PreconfiguredDropdownMenuMobile";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type NavbarMobileMenuItemBarProps = ComponentPropsWithoutRef<"div"> & Testid;

type ComponentType = ComponentTypeWithRef<NavbarMobileMenuItemBarProps, HTMLDivElement> & {
    Menu: typeof PreconfiguredDropdownMenuMobile;
};

const MobileMenuItemBar = forwardRef<HTMLDivElement, NavbarMobileMenuItemBarProps>((props, ref) => (
    <div
        {...props}
        ref={ref}
        className={
            twMerge(
                "-group-force-mobile:desktop:hidden flex flex-col justify-center",
                props.className
            )
        }
    />
)) as ComponentType;

MobileMenuItemBar.displayName = "MobileMenuItems";
MobileMenuItemBar.Menu = PreconfiguredDropdownMenuMobile;

export default MobileMenuItemBar;