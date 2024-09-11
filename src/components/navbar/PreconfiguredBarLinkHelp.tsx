import DesktopNavItemBarLink from "@components/navbar/DesktopNavItemBarLink";
import {t} from "i18next";
import React, {forwardRef} from "react";
import type {NavbarDesktopNavItemBarLinkProps} from "@components/navbar/DesktopNavItemBarLink";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";

export type NavbarPreconfiguredBarLinkHelpProps = NavbarDesktopNavItemBarLinkProps & Testid;

type ComponentType = ComponentTypeWithRef<NavbarPreconfiguredBarLinkHelpProps, HTMLAnchorElement>;

const PreconfiguredBarLinkHelp = forwardRef<HTMLAnchorElement, NavbarPreconfiguredBarLinkHelpProps>(
    (
        {
            children = t("ces-theme-tailwind-lib-translation.navbar.help"),
            icon = <DesktopNavItemBarLink.IconDefaultHelp/>,
            ...props
        }, ref) =>
        (
            <DesktopNavItemBarLink
                target={"_blank"}
                {...props}
                ref={ref}
                icon={icon}
            >
                {children}
            </DesktopNavItemBarLink>
        )
) as ComponentType;

PreconfiguredBarLinkHelp.displayName = "PreconfiguredBarLinkHelp";

export default PreconfiguredBarLinkHelp;