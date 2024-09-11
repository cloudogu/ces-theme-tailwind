import {render} from "@testing-library/react";
import React from "react";
import HamburgerMenuIcon from './HamburgerMenuIcon';

describe('<HamburgerMenuIcon />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <HamburgerMenuIcon data-testid={"element"} className={"bg-[red] myrandomclass"}/>
        );
        const element = await findByTestId("element-list") as unknown as SVGSVGElement;
        expect(element.nodeName).toEqual("svg");
        expect(element).toHaveClass("bg-[red] myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<SVGSVGElement>();
        render(
            <HamburgerMenuIcon ref={ref} />
        );
        expect(ref.current).toBeTruthy();
    });
});