import {render} from "@testing-library/react";
import React from "react";
import Back from "./Back";

describe('<Back />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {queryByTestId} = render(
            <Back data-testid={"element"} className={"text-red myrandomclass"}>
                Test
            </Back>
        );
        const element = queryByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(Back.Icon).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <Back ref={ref}>
                Test
            </Back>
        );
        expect(ref.current).toBeTruthy();
    });


    test("sould have icon child when no children defined testids", async () => {
        const {queryByTestId} = render(
            <Back data-testid={"element"} className={"flex-col myrandomclass"}/>
        );
        expect(await queryByTestId("element-icon")).toBeTruthy();
    });
});
