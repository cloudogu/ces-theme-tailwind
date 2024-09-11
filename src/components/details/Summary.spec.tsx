import React from "react";
import {render} from "@testing-library/react";
import Summary from "./Summary";
import DefaultStyles from "@src/constants/DefaultStyles";

describe("<Summary />", () => {
    test("should render with expected className", async () => {
        const {findByTestId} = render(<Summary data-testid={"test"} className={"myrandomclassname mb-7"}/>);
        const element = await findByTestId("test") as HTMLDetailsElement;
        expect(element.tagName).toEqual("SUMMARY");
        expect(element.className).toEqual("list-none cursor-pointer " + DefaultStyles.Focus + " outline-0 rounded myrandomclassname mb-7");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLElement>();
        render(
            <Summary ref={ref}>
            </Summary>);
        expect(ref.current).not.toBeNull();
    });

    test("subcomponents should be present", async () => {
        expect(Summary.Arrow).toBeTruthy();
    })
});