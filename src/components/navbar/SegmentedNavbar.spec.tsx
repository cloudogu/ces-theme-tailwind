import {render} from "@testing-library/react";
import React from "react";
import SegmentedNavbar from './SegmentedNavbar';
import NavbarRoot from "@components/navbar/NavbarRoot";

global.ResizeObserver = require("resize-observer-polyfill");

describe('<SegmentedNavbar />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <NavbarRoot>
                <SegmentedNavbar data-testid={"element"} className={"bg-[red] myrandomclass"}>
                    Test
                </SegmentedNavbar>
            </NavbarRoot>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("NAV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedNavbar.DesktopNavItemBar).toBeTruthy();
        expect(SegmentedNavbar.MobileMenuItemBar).toBeTruthy();
        expect(SegmentedNavbar.DesktopRightItemBar).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <NavbarRoot>
                <SegmentedNavbar ref={ref}/>
            </NavbarRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});