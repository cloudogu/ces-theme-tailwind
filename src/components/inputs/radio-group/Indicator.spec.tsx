import {render} from "@testing-library/react";
import {createRef} from "react";
import Indicator from "./Indicator";
import SegmentedItem from "./SegmentedItem";
import RadioGroup from "./RadioGroup";

describe("<Indicator/>", () => {
    test("should render Indicator with classes", async () => {
        const {findByTestId} = render(
            <RadioGroup>
                <SegmentedItem value="test" checked>
                    <Indicator className="test" data-testid={"indicator"}/>
                </SegmentedItem>
            </RadioGroup>
        );

        const element = await findByTestId("indicator");
        expect(element).toBeTruthy();

        // position
        "flex items-center justify-center".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // checked
        "data-[state=checked]:text-brand".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // group
        "group-hover:text-brand-strong group-focus-visible:text-brand-strong group-disabled:text-neutral".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // custom
        expect(element).toHaveClass("test");
    });

    test("forward ref works", async () => {
        const ref = createRef<HTMLSpanElement>();

        const {findByTestId} = render(
            <RadioGroup>
                <SegmentedItem value="test" checked>
                    <Indicator data-testid={"indicator"} ref={ref}/>
                </SegmentedItem>
            </RadioGroup>
         );

        const element = await findByTestId("indicator");
        expect(element).toBeTruthy();

        expect(ref.current).toBeTruthy();
        expect(ref.current).toBe(element);
    });

    test("subcomponents should be present", async () => {
        expect(Indicator.DefaultIcon).toBeTruthy();
    })
});