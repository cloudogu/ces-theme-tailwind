import {render} from "@testing-library/react";
import React from "react";
import InputField from "@components/inputs/input-field/InputField";

describe("InputField", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <InputField label={"text"} type={"text"} data-testid={"inputfield"}/>
        );
        const element = await findByTestId("inputfield") as HTMLSpanElement;
        expect(element.nodeName).toEqual("INPUT");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLInputElement>();
        render(
            <InputField label={"text"} type={"text"} ref={ref}/>
        );
        expect(ref.current).not.toBeNull();
    });

    test("icon switches to success correctly", async () => {
        const {queryByTestId} =
            render(
            <InputField data-testid={"input"} variant={"success"} label={"text"} type={"text"}/>
        );
        const element = queryByTestId("input") as HTMLInputElement;
        expect(element.parentElement).toContainHTML("label-success")
        expect(element.parentElement?.className).toContain("text-success")
        expect(element.className).toContain("border-success")
    });

    test("icon switches to danger correctly", async () => {
        const {queryByTestId} =
            render(
            <InputField data-testid={"input"} variant={"danger"} label={"text"} type={"text"}/>
        );
        const element = queryByTestId("input") as HTMLInputElement;
        expect(element.parentElement).toContainHTML("label-danger")
        expect(element.parentElement?.className).toContain("text-danger")
        expect(element.className).toContain("border-danger")
    });

    test("no icon rendered", async () => {
        const {queryByTestId} =
        render(
            <InputField label={"text"} variant={"neutral"} data-testid={"input"} type={"text"}/>
        );
        const element = queryByTestId("input") as HTMLInputElement;
        expect(element.parentElement).not.toContainHTML("label-danger")
        expect(element.parentElement).not.toContainHTML("label-success")
        expect(element.parentElement?.className).toContain("text-neutral")
        expect(element.className).toContain("border-neutral")
    });

    test("hint and danger hint rendered", async () => {
        const {queryByTestId} =
        render(
            <InputField label={"text"} hint={"X-Hint"} errorHint={"X-Error-Hint"} variant={"danger"} data-testid={"input"} type={"text"}/>
        );
        const element = queryByTestId("input") as HTMLInputElement;
        expect(element.parentElement).toContainHTML("X-Hint")
        expect(element.parentElement).toContainHTML("X-Error-Hint")
    });
});
