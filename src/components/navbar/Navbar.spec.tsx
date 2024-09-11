import {render} from "@testing-library/react";
import React from "react";
import Navbar from './Navbar';
import NavbarRoot from "@components/navbar/NavbarRoot";
import {BrowserRouter as Router} from "react-router-dom";

global.ResizeObserver = require("resize-observer-polyfill");
describe('<Navbar />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Router>
                <NavbarRoot enableAutoCollapse={false}>
                    <Navbar
                        data-testid={"element"}
                        className={"bg-[red] myrandomclass"}
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
                        applicationTitle={"MyApp"}
                        applicationLogo={<div>logo-</div>}
                        accountLink={"myaccount"}
                        helpLink={"/help"}
                        helpLinkText={"/helptext"}
                        accountLinkText={"myAccount"}
                    />
                </NavbarRoot>
            </Router>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("NAV");
        expect(element.className).toContain("bg-[red] myrandomclass");
        expect(await findByTestId("l-1-normal")).toBeInTheDocument();
        expect(await findByTestId("l-2-normal")).toBeInTheDocument();
        expect(await findByTestId("l-3-router")).toBeInTheDocument();
        expect(await findByTestId("l-4-router")).toBeInTheDocument();
        expect((await findByTestId("element-application-title")).textContent).toContain("logo-MyApp");
        const trigger = await findByTestId("element-nav-item-right-bar-user-trigger");
        expect(trigger.textContent).toEqual("MyUsername");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <Router>
                <NavbarRoot>
                    <Navbar ref={ref} links={[]} username={""} applicationTitle={""}/>
                </NavbarRoot>
            </Router>
        );
        expect(ref.current).toBeTruthy();
    });
});