import {render} from "@testing-library/react";
import React from "react";
import CloudoguLogo from './CloudoguLogo';

describe('<CloudoguLogo />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findAllByTestId} = render(
            <CloudoguLogo data-testid={"element"} className={"bg-red myrandomclass"}/>
        );
        const elements = await findAllByTestId("element") as unknown as SVGSVGElement[];
        expect(elements[0].nodeName).toEqual("svg");
        expect(elements[0]).toHaveClass("bg-red myrandomclass");
        expect(elements.length).toEqual(1);
    });

    test("forward ref works", async () => {
        const ref = React.createRef<SVGSVGElement>();
        render(
            <CloudoguLogo ref={ref} />
        );
        expect(ref.current).toBeTruthy();
    });
});