import {render} from "@testing-library/react";
import React from "react";
import CheckboxField from "@components/inputs/checkbox/CheckboxField";

describe("Checkbox", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <CheckboxField data-testid={"check"}>
                Text
            </CheckboxField>
        );
        const element = await findByTestId("check") as HTMLDivElement;
        expect(element.nodeName).toEqual("BUTTON");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <CheckboxField ref={ref}>
                Text
            </CheckboxField>
        );
        expect(ref.current).not.toBeNull();
    });


    test("icon switches to checked icon correctly", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <CheckboxField data-testid={"check"} checked={true} ref={ref}>
                Text
            </CheckboxField>
        );
        expect(ref.current).toContainHTML("check-checked");
    });

    test("icon switches to indeterminate icon correctly", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <CheckboxField data-testid={"check"} checked={"indeterminate"} ref={ref}>
                Text
            </CheckboxField>
        );
        expect(ref.current).toContainHTML("check-indeterminate");
    });

    test("no icon rendered", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <CheckboxField data-testid={"check"} checked={false} ref={ref}>
                Text
            </CheckboxField>
        );
        expect(ref.current).not.toContainHTML("check-checked");
        expect(ref.current).not.toContainHTML("check-indeterminate");
    });

    describe("align label test", () => {
        const labelRightRegex = (label: string) => new RegExp(`^.*<\/button>${label}$`);
        const labelLeftRegex = (label: string) => new RegExp(`^${label}<button.*$`);
        test("default align RIGHT", async () => {
            const {findByTestId} =
                render(
                    <CheckboxField data-testid={"element"} checked={"indeterminate"}>
                        Label
                    </CheckboxField>
                );
            const element = await findByTestId("element-label") as HTMLLabelElement;
            expect(element.innerHTML).toMatch(labelRightRegex("Label"));
        });
        test("align LEFT", async () => {
            const {findByTestId} =
                render(
                    <CheckboxField alignLabel={"LEFT"} data-testid={"element"} checked={"indeterminate"}>
                        Label
                    </CheckboxField>
                );
            const element = await findByTestId("element-label") as HTMLLabelElement;
            expect(element.innerHTML).toMatch(labelLeftRegex("Label"));
        });
    });
});
