import {render} from "@testing-library/react";
import React from "react";
import DesktopNavItemBar from './DesktopNavItemBar';
import NavbarRoot from "@components/navbar/NavbarRoot";
global.ResizeObserver = require("resize-observer-polyfill");

describe('<DesktopNavItemBar />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <NavbarRoot>
                <DesktopNavItemBar data-testid={"element"} className={"bg-[red] myrandomclass"}>
                    Test
                </DesktopNavItemBar>
            </NavbarRoot>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(DesktopNavItemBar.MenuMore).toBeTruthy();
        expect(DesktopNavItemBar.Link).toBeTruthy();
        expect(DesktopNavItemBar.Menu).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <NavbarRoot>
                <DesktopNavItemBar ref={ref}/>
            </NavbarRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});