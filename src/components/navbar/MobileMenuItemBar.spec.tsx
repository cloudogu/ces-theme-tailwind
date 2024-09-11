import {render} from "@testing-library/react";
import React from "react";
import MobileMenuItemBar from './MobileMenuItemBar';

describe('<MobileMenuItemBar />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <MobileMenuItemBar data-testid={"element"} className={"bg-[red] myrandomclass"}>
                Test
            </MobileMenuItemBar>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(MobileMenuItemBar.Menu).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <MobileMenuItemBar ref={ref} />
        );
        expect(ref.current).toBeTruthy();
    });
});