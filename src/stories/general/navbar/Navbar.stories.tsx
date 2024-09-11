import {BrowserRouter as Router} from 'react-router-dom';
import {Meta} from "@storybook/react";
import React, {useMemo} from "react";
import "@src/i18n";
import {NavbarLinkType, NavbarProps, NavbarRoot, NavbarRootProps, useDesktopNavbarSplitLinks} from '@src/index';

const meta: Meta<NavbarProps & NavbarRootProps & { linkCount: number, activeLink: number }> = {
    title: "CES Theme/General/Navbar",
    argTypes: {
        username: {
            control: "text",
        },
        applicationTitle: {
            control: "text",
        },
        helpLink: {
            control: "select",
            options: [undefined, "https://my-link.de"],
        },
        helpLinkText: {
            control: "text",
        },
        helpLinkType: {
            control: "select",
            options: [undefined, "a", "react-router-dom"],
        },
        accountLink: {
            control: "select",
            options: [undefined, "https://my-link.de"],
        },
        accountLinkText: {
            control: "text",
        },
        accountLinkType: {
            control: "select",
            options: [undefined, "a", "react-router-dom"],
        },
        logoutLink: {
            control: "select",
            options: [undefined, "https://my-link.de"],
        },
        logoutLinkText: {
            control: "text",
        },
        logoutLinkType: {
            control: "select",
            options: [undefined, "a", "react-router-dom"],
        },
        linkCount: {
            control: "number",
            description: "Auto generated links to nowhere in storybook. Usually you would use the 'links'-prop instead.",
        },
        activeLink: {
            control: "number",
            description: "Set the auto generated link to active. Only in storybook",
        },
        enableAutoCollapse: {
            control: "boolean",
        },
    },
    args: {
        username: "UserName",
        applicationTitle: "Storybook Example Navbar",
        helpLink: "https://my-link.de",
        accountLink: "https://my-link.de",
        logoutLink: "https://my-link.de",
        linkCount: 10,
        activeLink: 1,
        enableAutoCollapse: true,
    },
};

const Template = ({linkCount, activeLink, enableAutoCollapse, ...args}: NavbarProps & NavbarRootProps & {
    linkCount: number,
    activeLink: number
}) => {
    const links: NavbarLinkType[] = useMemo(() => [...[...Array(linkCount)]].map((_, i) => i + 1).map((i) => ({
        url: "https://my-link.de",
        text: `Item ${i}`,
        active: activeLink === i,
    })), [linkCount, activeLink]);

    return <div className={"absolute left-0 top-0 w-screen"}>
        <Router>
            <NavbarRoot enableAutoCollapse={enableAutoCollapse}>
                <NavbarRoot.Navbar
                    {...args}
                    links={links}
                />
            </NavbarRoot>
        </Router>
    </div>
}

const NavbarShort = () => {
    return (
        // You can skip the <Router> if not using react-router-dom.
        // It is not provided in the library and muss be added manually.
        <Router>
            <NavbarRoot>
                <NavbarRoot.Navbar
                    applicationLogo={<>My app logo</>}
                    applicationTitle={"My Example App"}
                    username={"UserName"}
                    accountLink={"/account"}
                    logoutLink={"/cas/logout"}
                    helpLink={"/help"}
                    links={[
                        {
                            text: "Home",
                            url: "/home",
                            type: "react-router-dom",
                            active: true,
                        },
                        {
                            text: "Page 1",
                            url: "/page1",
                            type: "react-router-dom",
                        },
                        {
                            text: "Some external link",
                            url: "https://www.external-link.de",
                            type: "a",
                        }
                    ]}
                    // Set one of the following to overwrite default translation
                    // accountLinkText={""}
                    // logoutLinkText={""}
                    // helpLinkText={""}
                />
            </NavbarRoot>
        </Router>
    );
};

const NavbarMoreDetailed = () => {
    const NavbarComponent = () => {
        const links = [
            {
                text: "Home",
                url: "/home",
                type: "react-router-dom",
                active: true,
            },
            {
                text: "Page 1",
                url: "/page1",
                type: "react-router-dom",
            },
            {
                text: "Some external link",
                url: "https://www.external-link.de",
                type: "a",
            }
        ] as NavbarLinkType[];

        const {ref, itemsToRenderInMenu, itemsToRenderInBar} = useDesktopNavbarSplitLinks<HTMLDivElement>(links);

        return (
            <Router>
                <NavbarRoot.SegmentedNavbar>
                    <NavbarRoot.SegmentedNavbar.ApplicationTitle icon={<div>My app logo</div>}>
                        My Example App
                    </NavbarRoot.SegmentedNavbar.ApplicationTitle>
                    <NavbarRoot.SegmentedNavbar.DesktopNavItemBar ref={ref}>
                        {
                            itemsToRenderInBar.map(linkItem =>
                                <NavbarRoot.SegmentedNavbar.DesktopNavItemBar.Link
                                    key={`${linkItem?.text}-${linkItem?.url}`}
                                    icon={linkItem.icon?.call(undefined)}
                                    href={linkItem.type === "a" ? linkItem?.url : undefined}
                                    to={linkItem.type !== "a" ? linkItem?.url : undefined}
                                    active={linkItem.active}
                                >
                                    {linkItem?.text}
                                </NavbarRoot.SegmentedNavbar.DesktopNavItemBar.Link>
                            )
                        }
                        {
                            itemsToRenderInMenu?.length > 0 &&
                            <NavbarRoot.SegmentedNavbar.DesktopNavItemBar.MenuMore>
                                {
                                    itemsToRenderInMenu.map(linkItem =>
                                        <NavbarRoot.SegmentedNavbar.DesktopNavItemBar.MenuMore.Link
                                            key={`${linkItem?.text}-${linkItem?.url}`}
                                            href={linkItem?.type === "a" ? linkItem?.url : undefined}
                                            to={linkItem?.type !== "a" ? linkItem?.url : undefined}
                                            active={linkItem?.active}
                                        >
                                            {linkItem?.text}
                                        </NavbarRoot.SegmentedNavbar.DesktopNavItemBar.MenuMore.Link>
                                    )
                                }
                            </NavbarRoot.SegmentedNavbar.DesktopNavItemBar.MenuMore>
                        }
                    </NavbarRoot.SegmentedNavbar.DesktopNavItemBar>

                    <NavbarRoot.SegmentedNavbar.DesktopRightItemBar>
                        <NavbarRoot.SegmentedNavbar.DesktopRightItemBar.LinkHelp
                            // Use for external links instead of 'to'
                            // href={"https://www.external-link.de"}
                            to={"/help"}>
                            Help me
                        </NavbarRoot.SegmentedNavbar.DesktopRightItemBar.LinkHelp>
                        <NavbarRoot.SegmentedNavbar.DesktopRightItemBar.MenuUser
                            triggerButtonText={"UserName"}
                        >
                            <NavbarRoot.SegmentedNavbar.DesktopRightItemBar.Menu.Link
                                // Use for external links instead of 'to'
                                // href={"https://www.external-link.de"}
                                to={"/account"}
                            >
                                Account
                            </NavbarRoot.SegmentedNavbar.DesktopRightItemBar.Menu.Link>
                            <NavbarRoot.SegmentedNavbar.DesktopRightItemBar.Menu.Link
                                // Use for external links instead of 'to'
                                // href={"https://www.external-link.de"}
                                to={"/logout"}
                            >
                                Logout
                            </NavbarRoot.SegmentedNavbar.DesktopRightItemBar.Menu.Link>
                        </NavbarRoot.SegmentedNavbar.DesktopRightItemBar.MenuUser>
                    </NavbarRoot.SegmentedNavbar.DesktopRightItemBar>

                    <NavbarRoot.SegmentedNavbar.MobileMenuItemBar>
                        <NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu>
                            <NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group>
                                {
                                    links.map(l =>
                                        <NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group.Link
                                            key={`${l.text}-${l.url}`}
                                            href={l.url}
                                        >
                                            {l.text}
                                        </NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group.Link>
                                    )
                                }
                            </NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group>
                            <NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group>
                                <NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group.Link
                                    // Use for external links instead of 'to'
                                    // href={"https://www.external-link.de"}
                                    to={"/help"}
                                >
                                    Help me
                                </NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group.Link>
                                <NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group.Link
                                    // Use for external links instead of 'to'
                                    // href={"https://www.external-link.de"}
                                    to={"/account"}
                                >
                                    Account
                                </NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group.Link>
                                <NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group.Link
                                    // Use for external links instead of 'to'
                                    // href={"https://www.external-link.de"}
                                    to={"/logout"}
                                >
                                    Logout
                                </NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group.Link>
                            </NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu.Group>
                        </NavbarRoot.SegmentedNavbar.MobileMenuItemBar.Menu>
                    </NavbarRoot.SegmentedNavbar.MobileMenuItemBar>
                </NavbarRoot.SegmentedNavbar>
            </Router>
        );
    };

    return (
        <NavbarRoot hardBreakpointMobile={767} enableAutoCollapse={true}>
            <NavbarComponent/>
        </NavbarRoot>
    );
};

export const Primary = Template.bind({}) as unknown as { args: {} };

Primary.args = {}

export default meta;