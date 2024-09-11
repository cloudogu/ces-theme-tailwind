import {CesIconList, CesIconX} from "@components/icons";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {IconProps} from "@phosphor-icons/react";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type NavbarHamburgerMenuIconProps = Omit<ComponentPropsWithoutRef<"svg">, "children"> & Omit<IconProps, "children"> & Testid;

type ComponentType = ComponentTypeWithRef<NavbarHamburgerMenuIconProps, SVGSVGElement>;

const HamburgerMenuIcon = forwardRef<SVGSVGElement, NavbarHamburgerMenuIconProps>((props, ref) => (
    <>
        <CesIconList
            weight={"bold"}
            ref={ref}
            size={32}
            {...props}
            data-testid={subTestid(props, "list")}
            className={twMerge(
                "group-[&[aria-expanded=true]]/mobile-menu-trigger-button:hidden",
                props.className,
            )}
        />
        <CesIconX
            weight={"bold"}
            ref={ref}
            size={16}
            {...props}
            data-testid={subTestid(props, "x")}
            className={twMerge(
                "hidden group-[&[aria-expanded=true]]/mobile-menu-trigger-button:block",
                props.className,
            )}
        />
    </>
)) as ComponentType;

HamburgerMenuIcon.displayName = "MobileMenuNavbarIcon";

export default HamburgerMenuIcon;