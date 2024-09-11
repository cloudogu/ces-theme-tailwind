import {render} from "@testing-library/react";
import {createRef} from "react";
import RadioGroup from "./RadioGroup";
import ItemField from "./ItemField";

describe("<ItemField/>", () => {
    test("should render Item with Indicator, DefaultIcon and label", async () => {
        const {queryByTestId} = render(
            <RadioGroup>
                <ItemField className="testClass" value="test" checked data-testid="field">
                    <span id="textInput">Test</span>
                </ItemField>
            </RadioGroup>
        );

        const element = queryByTestId("field");
        expect(element).toBeTruthy();

        // position
        "flex flex-row gap-2".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // custom
        expect(element).toHaveClass("testClass");

        const labelElement = queryByTestId("field-label"); 
        expect(labelElement).toBeTruthy();

        const textElement = labelElement!.querySelector("#textInput");
        expect(textElement).toBeTruthy();
        expect(textElement).toBeInstanceOf(HTMLSpanElement);
        expect(textElement!.textContent).toBe("Test");

        const itemElement = queryByTestId("field-item");
        expect(itemElement).toBeTruthy();

        const indicatorElement = queryByTestId("field-item-indicator");
        expect(indicatorElement).toBeTruthy();

        const iconElement = queryByTestId("field-item-indicator-icon");
        expect(iconElement).toBeTruthy();
        expect(iconElement).toBeInstanceOf(SVGElement);
    });

    test("forward ref works", async () => {
        const ref = createRef<HTMLButtonElement>();

        const {queryByTestId} = render(
            <RadioGroup>
                <ItemField value="test" checked data-testid="field" ref={ref}>
                    <span>Test</span>
                </ItemField>
            </RadioGroup>
         );

        const itemElement = queryByTestId("field-item");
        expect(itemElement).toBeTruthy();

        expect(ref.current).toBeTruthy();
        expect(ref.current).toBe(itemElement);
    });
});