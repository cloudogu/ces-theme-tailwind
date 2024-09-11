import {render} from "@testing-library/react";
import {createRef} from "react";
import RadioGroup from "./RadioGroup";
import Item from "./Item";

describe("<Item/>", () => {
    test("should render Item with Indicator and DefaultIcon", async () => {
        const {queryByTestId} = render(
            <RadioGroup>
                <Item className="testClass" value="test" checked data-testid="item"/>
            </RadioGroup>
        );

        const itemElement = queryByTestId("item");
        expect(itemElement).toBeTruthy();

        const indicatorElement = queryByTestId("item-indicator");
        expect(indicatorElement).toBeTruthy();

        const iconElement = queryByTestId("item-indicator-icon");
        expect(iconElement).toBeTruthy();
        expect(iconElement).toBeInstanceOf(SVGElement);

        // custom
        expect(itemElement).toHaveClass("testClass");
    });

    test("forward ref works", async () => {
        const ref = createRef<HTMLButtonElement>();

        const {queryByTestId} = render(
            <RadioGroup>
                <Item value="test" checked data-testid="item" ref={ref}/>
            </RadioGroup>
         );

        const element = queryByTestId("item");
        expect(element).toBeTruthy();

        expect(ref.current).toBeTruthy();
        expect(ref.current).toBe(element);
    });
});