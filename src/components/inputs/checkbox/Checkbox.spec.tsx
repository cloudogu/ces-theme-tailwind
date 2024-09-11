import {render} from "@testing-library/react";
import React from "react";
import Checkbox from "@components/inputs/checkbox/Checkbox";

describe("Checkbox", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <Checkbox data-testid={"check"}/>
        );
        const element = await findByTestId("check") as HTMLDivElement;
        expect(element.nodeName).toEqual("BUTTON");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <Checkbox ref={ref}/>
        );
        expect(ref.current).toBeTruthy()
    });


    test("icon switches to checked icon correctly", async () => {
        const {queryByTestId} = render(
            <Checkbox data-testid={"check"} checked={true}/>
        );
        const element = queryByTestId("check") as HTMLButtonElement;
        expect(element).toContainHTML("check-checked");
    });

    test("icon switches to indeterminate icon correctly", async () => {
        const {queryByTestId} =
            render(
            <Checkbox data-testid={"check"} checked={"indeterminate"}/>
        );
        const element = queryByTestId("check") as HTMLButtonElement;
        expect(element).toContainHTML("check-indeterminate");
    });

    test("no icon rendered", async () => {
        const {queryByTestId} =
            render(
            <Checkbox data-testid={"check"} checked={false}/>
        );
        const element = queryByTestId("check") as HTMLButtonElement;
        expect(element).not.toContainHTML("check-checked");
        expect(element).not.toContainHTML("check-indeterminate");
    });
});
