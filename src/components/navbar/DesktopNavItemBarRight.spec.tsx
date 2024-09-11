import {render} from "@testing-library/react";
import React from "react";
import DesktopNavItemBarRight from './DesktopNavItemBarRight';
import NavbarRoot from "@components/navbar/NavbarRoot";

describe('<DesktopNavItemBarRight />', () => {
    global.ResizeObserver = require("resize-observer-polyfill");

    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <NavbarRoot>
                <DesktopNavItemBarRight data-testid={"element"} className={"bg-[red] myrandomclass"}>
                    Test
                </DesktopNavItemBarRight>
            </NavbarRoot>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(DesktopNavItemBarRight.Link).toBeTruthy();
        expect(DesktopNavItemBarRight.Menu).toBeTruthy();
        expect(DesktopNavItemBarRight.MenuUser).toBeTruthy();
        expect(DesktopNavItemBarRight.LinkHelp).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <NavbarRoot>
                <DesktopNavItemBarRight ref={ref}/>
            </NavbarRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});