import {render} from "@testing-library/react";
import React from "react";
import Label from "@components/inputs/label/Label";

describe("Label", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <Label data-testid={"Label"} text={"text"}/>
        );
        const element = await findByTestId("Label") as HTMLLabelElement;
        expect(element.nodeName).toEqual("LABEL");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLLabelElement>();
        render(
            <Label text={"text"} ref={ref}/>
        );
        expect(ref.current).not.toBeNull();
    });

    test("icon switches to success correctly", async () => {
        const {queryByTestId} =
        render(
            <Label data-testid={"label"} variant={"success"} text={"text"} />
        );
        const element = queryByTestId("label") as HTMLLabelElement;
        expect(element).toContainHTML("label-success");
        expect(element.className).toContain("text-success")
    });

    test("icon switches to danger correctly", async () => {
        const {queryByTestId} =
        render(
            <Label data-testid={"label"} variant={"danger"} text={"text"} />
        );
        const element = queryByTestId("label") as HTMLLabelElement;
        expect(element).toContainHTML("label-danger");
        expect(element.className).toContain("text-danger")
    });

    test("no icon rendered", async () => {
        const {queryByTestId} =
        render(
            <Label variant={"neutral"} data-testid={"label"} text={"text"} />
        );
        const element = queryByTestId("label") as HTMLLabelElement;
        expect(element).not.toContainHTML("label-success");
        expect(element).not.toContainHTML("label-danger");
        expect(element.className).toContain("text-neutral")
    });

    test("hint and danger hint rendered", async () => {
        const {queryByTestId} =
        render(
            <Label text={"text"} hint={"X-Hint"} errorHint={"X-Error-Hint"} variant={"danger"} data-testid={"label"} />
        );
        const element = queryByTestId("label") as HTMLLabelElement;
        expect(element.parentElement).toContainHTML("X-Hint")
        expect(element.parentElement).toContainHTML("X-Error-Hint")
    });

    describe("variant styles", () => {
        test("neutral", async () => {
            const {queryByTestId} =
            render(
                <Label variant={"neutral"} data-testid={"label"} text={"text"} />
            );
            const element = queryByTestId("label") as HTMLLabelElement;
            expect(element.className).toContain("text-neutral");
        });
        test("success", async () => {
            const {queryByTestId} =
            render(
                <Label variant={"success"} data-testid={"label"}  text={"text"} />
            );
            const element = queryByTestId("label") as HTMLLabelElement;
            expect(element.className).toContain("text-success");
        });
        test("danger", async () => {
            const {queryByTestId} =
            render(
                <Label variant={"danger"} data-testid={"label"} text={"text"} />
            );
            const element = queryByTestId("label") as HTMLLabelElement;
            expect(element.className).toContain("text-danger");
        });
    });
});
