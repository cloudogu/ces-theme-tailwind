import {CesIconArrowSquareOut} from "@components/icons";
import DesktopNavItemBar from "@components/navbar/DesktopNavItemBar";

import DesktopNavItemBarRight from "@components/navbar/DesktopNavItemBarRight";
import MobileMenuItemBar from "@components/navbar/MobileMenuItemBar";
import useActualLocation from "@components/navbar/hooks/useActualLocation";
import useDesktopNavbarSplitLinks from "@components/navbar/hooks/useDesktopNavbarSplitLinks";
import {translate} from "@src/functions/i18n";
import renderPotentialFunctionChild from "@src/internalFunctions/renderPotentialFunctionChild";
import {subTestid} from "@src/types/Testid";
import {t} from "i18next";


import React, { useMemo} from "react";

import type {NavbarLinkType} from "./models/NavbarLinkType";
import type Testid from "@src/types/Testid";
import type {ReactNode} from "react";

export type NavbarBodyProps = Testid & {
    links: NavbarLinkType[];
    username: string;
    helpLink?: string;
    helpLinkText?: string | (() => ReactNode);
    helpLinkType?: "a" | "react-router-dom";
    accountLink?: string;
    accountLinkText?: string | (() => ReactNode);
    accountLinkType?: "a" | "react-router-dom";
    logoutLink?: string;
    logoutLinkText?: string | (() => ReactNode);
    logoutLinkType?: "a" | "react-router-dom";
};

export function determinateLinkActive(link: NavbarLinkType | undefined, {pathname}: { pathname: string }): boolean {
    if (link?.active !== undefined && link?.active !== null) {
        return link?.active;
    }
    if (!link || link.type === "a") {
        return false;
    }

    const matchesExactly = pathname.endsWith(link.url);
    const matchesWithAdditionalSlash = pathname.endsWith(`${link.url}/`);
    const matchesWithoutTrailingSlash = pathname
        .endsWith(`${
            link
                .url
                .replace(new RegExp("^(.*)/$"), (_, g) => g)}`
        );

    return matchesExactly || matchesWithAdditionalSlash || matchesWithoutTrailingSlash;
}

const NavbarBody = ({
    links,
    username,
    helpLink,
    helpLinkText = t("ces-theme-tailwind-lib-translation.navbar.help"),
    helpLinkType = "a",
    accountLink,
    accountLinkText = () => translate("ces-theme-tailwind-lib-translation.navbar.account"),
    accountLinkType = "a",
    logoutLink,
    logoutLinkText = t("ces-theme-tailwind-lib-translation.navbar.logout"),
    logoutLinkType = "a",
    ...props
}: NavbarBodyProps) => {
    const {ref, itemsToRenderInMenu, itemsToRenderInBar} = useDesktopNavbarSplitLinks<HTMLDivElement>(links);
    const location = useActualLocation();

    return useMemo(() => (
        <>
            <DesktopNavItemBar ref={ref} data-testid={subTestid(props, "nav-item-bar")}>
                {
                    itemsToRenderInBar.map(({icon = () => undefined, ...linkItem}) =>
                        <DesktopNavItemBar.Link
                            key={`${linkItem?.url}-${linkItem?.text}`}
                            icon={icon}
                            href={linkItem?.type === "a" ? linkItem?.url : undefined}
                            to={linkItem?.type !== "a" ? linkItem?.url : undefined}
                            active={determinateLinkActive(linkItem, location)}
                            data-testid={linkItem["data-testid"]}
                        >
                            {linkItem?.text}
                        </DesktopNavItemBar.Link>
                    )
                }
                {
                    itemsToRenderInMenu?.length > 0 &&
                    <DesktopNavItemBar.MenuMore data-testid={subTestid(props, "nav-item-bar-more")}>
                        {
                            itemsToRenderInMenu.map(linkItem =>
                                <DesktopNavItemBar.Menu.Link
                                    key={`${linkItem?.text}-${linkItem?.url}`}
                                    href={linkItem?.type === "a" ? linkItem?.url : undefined}
                                    to={linkItem?.type !== "a" ? linkItem?.url : undefined}
                                    active={determinateLinkActive(linkItem, location)}
                                    data-testid={linkItem["data-testid"]}
                                >
                                    {linkItem?.text}
                                </DesktopNavItemBar.Menu.Link>
                            )
                        }
                    </DesktopNavItemBar.MenuMore>
                }
            </DesktopNavItemBar>

            <DesktopNavItemBarRight data-testid={subTestid(props, "nav-item-right-bar")}>
                {helpLink &&
                    <DesktopNavItemBarRight.LinkHelp
                        data-testid={subTestid(props, "nav-item-right-bar-help")}
                        href={helpLinkType === "a" ? helpLink : undefined}
                        to={helpLinkType === "react-router-dom" ? helpLink : undefined}>
                        {helpLinkText}
                    </DesktopNavItemBarRight.LinkHelp>}
                <DesktopNavItemBarRight.MenuUser
                    triggerButtonText={username}
                    disabled={(!accountLink && !logoutLink)}
                    data-testid={subTestid(props, "nav-item-right-bar-user")}
                >
                    {accountLink &&
                        <DesktopNavItemBarRight.Menu.Link
                            data-testid={subTestid(props, "nav-item-right-bar-user-account")}
                            href={accountLinkType === "a" ? accountLink : undefined}
                            to={accountLinkType === "react-router-dom" ? accountLink : undefined}
                        >
                            {accountLinkText ?? t("ces-theme-tailwind-lib-translation.navbar.account")}
                        </DesktopNavItemBarRight.Menu.Link>
                    }
                    {logoutLink &&
                        <DesktopNavItemBarRight.Menu.Link
                            data-testid={subTestid(props, "nav-item-right-bar-user-logout")}
                            href={logoutLinkType === "a" ? logoutLink : undefined}
                            to={logoutLinkType === "react-router-dom" ? logoutLink : undefined}
                        >
                            {logoutLinkText ?? t("ces-theme-tailwind-lib-translation.navbar.logout")}
                        </DesktopNavItemBarRight.Menu.Link>
                    }
                </DesktopNavItemBarRight.MenuUser>
            </DesktopNavItemBarRight>

            <MobileMenuItemBar
                data-testid={subTestid(props, "nav-item-mobile-bar")}>
                <MobileMenuItemBar.Menu>
                    <MobileMenuItemBar.Menu.Group>
                        {
                            links.map(linkItem =>
                                <MobileMenuItemBar.Menu.Group.Link
                                    key={`${linkItem.text}-${linkItem.url}`}
                                    href={linkItem?.type === "a" ? linkItem?.url : undefined}
                                    to={linkItem?.type !== "a" ? linkItem?.url : undefined}
                                    active={determinateLinkActive(linkItem, location)}
                                >
                                    {linkItem.text}
                                </MobileMenuItemBar.Menu.Group.Link>
                            )
                        }
                    </MobileMenuItemBar.Menu.Group>
                    {(helpLink || accountLink || logoutLink) &&
                        <MobileMenuItemBar.Menu.Group>
                            {helpLink &&
                                <MobileMenuItemBar.Menu.Group.Link
                                    href={helpLinkType === "a" ? helpLink : undefined}
                                    to={helpLinkType === "react-router-dom" ? helpLink : undefined}
                                    target={"_blank"}
                                >
                                    {renderPotentialFunctionChild(helpLinkText)}<CesIconArrowSquareOut size={16} viewBox={"0,10,256,256"}/>
                                </MobileMenuItemBar.Menu.Group.Link>}
                            {accountLink &&
                                <MobileMenuItemBar.Menu.Group.Link
                                    href={accountLinkType === "a" ? accountLink : undefined}
                                    to={accountLinkType === "react-router-dom" ? accountLink : undefined}
                                >
                                    {accountLinkText}
                                </MobileMenuItemBar.Menu.Group.Link>
                            }
                            {logoutLink &&
                                <MobileMenuItemBar.Menu.Group.Link
                                    href={logoutLinkType === "a" ? logoutLink : undefined}
                                    to={logoutLinkType === "react-router-dom" ? logoutLink : undefined}
                                >
                                    {logoutLinkText}
                                </MobileMenuItemBar.Menu.Group.Link>
                            }
                        </MobileMenuItemBar.Menu.Group>
                    }
                </MobileMenuItemBar.Menu>
            </MobileMenuItemBar>
        </>
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [
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
        itemsToRenderInBar,
        itemsToRenderInMenu,
        ref,
        location,
    ]);
};

NavbarBody.displayName = "NavbarBody";

export default NavbarBody;