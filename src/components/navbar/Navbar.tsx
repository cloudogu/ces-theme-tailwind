import ApplicationTitle from "@components/navbar/ApplicationTitle";
import NavbarBody from "@components/navbar/NavbarBody";
import SegmentedNavbar from "@components/navbar/SegmentedNavbar";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import type {NavbarBodyProps} from "@components/navbar/NavbarBody";
import type {SegmentedNavbarProps} from "@components/navbar/SegmentedNavbar";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type { ReactElement, ReactNode} from "react";

export type NavbarProps = SegmentedNavbarProps & NavbarBodyProps & {
    applicationTitle: ReactNode;
    applicationLogo?: ReactElement;
};

type ComponentType = ComponentTypeWithRef<NavbarProps, HTMLDivElement>;

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
    (
        {
            applicationTitle,
            applicationLogo,
            links,
            username,
            helpLink,
            helpLinkText,
            helpLinkType,
            accountLink,
            accountLinkText,
            accountLinkType,
            logoutLink,
            logoutLinkText,
            logoutLinkType,
            ...props
        }, ref) => (
        <SegmentedNavbar {...props} ref={ref}>
            <ApplicationTitle icon={applicationLogo} data-testid={subTestid(props, "application-title")}>
                {applicationTitle}
            </ApplicationTitle>
            <NavbarBody
                data-testid={props["data-testid"]}
                links={links}
                username={username}
                helpLink={helpLink}
                helpLinkText={helpLinkText}
                accountLink={accountLink}
                accountLinkText={accountLinkText}
                logoutLink={logoutLink}
                logoutLinkText={logoutLinkText}
                accountLinkType={accountLinkType}
                logoutLinkType={logoutLinkType}
                helpLinkType={helpLinkType}
            />
        </SegmentedNavbar>
    )) as ComponentType;

Navbar.displayName = "Navbar";

export default Navbar;