import {render} from "@testing-library/react";
import {createRef} from "react";
import RadioGroup from "./RadioGroup";

describe("<RadioGroup/>", () => {
    test("should render RadioGroup", async () => {
        const {queryByTestId} = render(
            <RadioGroup className="testClass" data-testid="radioGroup" />
        );

        const element = queryByTestId("radioGroup");
        expect(element).toBeTruthy();

        // position
        "grid gap-default-2x py-default".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // custom
        expect(element).toHaveClass("testClass");
    });

    test("forward ref works", async () => {
        const ref = createRef<HTMLDivElement>();

        const {queryByTestId} = render(
            <RadioGroup className="testClass" data-testid="radioGroup" ref={ref}/>
         );

        const element = queryByTestId("radioGroup");
        expect(element).toBeTruthy();

        expect(ref.current).toBeTruthy();
        expect(ref.current).toBe(element);
    });

    test("subcomponents should be present", async () => {
        expect(RadioGroup.Item).toBeTruthy();
        expect(RadioGroup.SegmentedItem).toBeTruthy();
        expect(RadioGroup.ItemField).toBeTruthy();
    })
});