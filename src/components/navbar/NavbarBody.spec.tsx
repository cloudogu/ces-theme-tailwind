import {render} from "@testing-library/react";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import NavbarRoot from "@components/navbar/NavbarRoot";
import NavbarBody, {determinateLinkActive} from "@components/navbar/NavbarBody";

global.ResizeObserver = require("resize-observer-polyfill");
describe('<NavbarBody />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Router>
                <NavbarRoot enableAutoCollapse={false}>
                    <NavbarBody
                        data-testid={"element"}
                        links={[
                            {
                                text: "Linktext",
                                url: "https://www.link.de",
                                type: "a",
                                "data-testid": "l-1",
                            },
                            {
                                text: "Another Link",
                                url: "https://www.my-link.de",
                                type: "a",
                                "data-testid": "l-2",
                            },
                            {
                                text: "Router-Link 1",
                                url: "/my-link.de",
                                "data-testid": "l-3",
                            },
                            {
                                text: "Router-Link 2",
                                url: "/my-link.de",
                                type: "react-router-dom",
                                "data-testid": "l-4",
                            }
                        ]}
                        username={"MyUsername"}
                        accountLink={"myaccount"}
                        helpLink={"/help"}
                        helpLinkText={"/helptext"}
                        accountLinkText={"myAccount"}
                    />
                </NavbarRoot>
            </Router>
        );
        expect(await findByTestId("l-1-normal")).toBeInTheDocument();
        expect(await findByTestId("l-2-normal")).toBeInTheDocument();
        expect(await findByTestId("l-3-router")).toBeInTheDocument();
        expect(await findByTestId("l-4-router")).toBeInTheDocument();
        const trigger = await findByTestId("element-nav-item-right-bar-user-trigger");
        expect(trigger.textContent).toEqual("MyUsername");
    });
});

describe("determinateLinkActive", () => {
    test.each([
        ["/dogumgt", "/dogumgt", "react-router-dom" as const, undefined, true],
        ["/dogumgt", "/dogumgt/", "react-router-dom" as const, undefined, true],
        ["/dogumgt/", "/dogumgt", "react-router-dom" as const, undefined, true],
        ["/dogumgt/", "/dogumgt/", "react-router-dom" as const, undefined, true],
        ["/dogumgt/a", "/dogumgt/a", "react-router-dom" as const, undefined, true],
        ["/dogumgt/a", "/dogumgt/a/", "react-router-dom" as const, undefined, true],
        ["/dogumgt/a", "/dogumgt/a", "react-router-dom" as const, undefined, true],
        ["/dogumgt/a", "/dogumgt/a/", "react-router-dom" as const, undefined, true],
        ["/dogumgta", "/dogumgt/a", "react-router-dom" as const, undefined, false],
        ["/dogumgt/a", "/admin/dogumgt/a/", "react-router-dom" as const, undefined, true],
        ["/dogumgt/a", "/admin/dogumgt/a", "react-router-dom" as const, undefined, true],
        ["/dogumgt/a", "/admin/dogumgt/a/", "react-router-dom" as const, undefined, true],
        ["/dogumgta", "/admin/dogumgt/a", "react-router-dom" as const, undefined, false],
        ["/dogumgt", "/dogumgt", "a" as const, true, true],
        ["/dogumgt", "/dogumgt/", "a" as const, true, true],
        ["/dogumgt/", "/dogumgt", "a" as const, true, true],
        ["/dogumgt/", "/dogumgt/", "a" as const, true, true],
        ["/dogumgt", "/dogumgt", "a" as const, undefined, false],
        ["/dogumgt", "/dogumgt/", "a" as const, undefined, false],
        ["/dogumgt/", "/dogumgt", "a" as const, undefined, false],
        ["/dogumgt/", "/dogumgt/", "a" as const, undefined, false],
    ])('link=%p, pathname=%p, type=%p, active=%p, expected=%p',
        async (link, pathname, type, active, expected) => {
            expect(determinateLinkActive({url: link, text: "", type: type, active: active}, {pathname: pathname})).toEqual(expected);
        });
});