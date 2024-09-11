import {render} from "@testing-library/react";
import {createRef} from "react";
import SegmentedItem from "./SegmentedItem";
import RadioGroup from "./RadioGroup";
import DefaultStyles from "@src/constants/DefaultStyles";

describe("<SegmentedItem/>", () => {
    test("should render SegmentedItem with classes", async () => {
        const {queryByTestId} = render(
            <RadioGroup>
                <SegmentedItem className="testClass" value="test" checked data-testid="item" />
            </RadioGroup>
        );

        const element = queryByTestId("item");
        expect(element).toBeTruthy();

        // position
        "flex items-center justify-center".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // size
        "min-w-[24px] w-[24px] min-h-[24px] h-[24px]".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // border
        "border rounded-full outline-none".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // focus
        DefaultStyles.Focus.split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // checked
        "data-[state=checked]:bg-default-background data-[state=checked]:border-brand data-[state=checked]:border-2 data-[state=checked]:hover:border-brand-strong data-[state=checked]:focus-visible:border-brand-strong data-[state=checked]:disabled:border-neutral".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // unchecked
        "data-[state=unchecked]:border-neutral data-[state=unchecked]:bg-default-background data-[state=unchecked]:hover:border-2 data-[state=unchecked]:hover:border-neutral-strong data-[state=unchecked]:focus-visible:border-2 data-[state=unchecked]:focus-visible:border-neutral-strong data-[state=unchecked]:disabled:bg-neutral-weak data-[state=unchecked]:disabled:border-neutral data-[state=unchecked]:disabled:border".split(" ").forEach((c) => {
            expect(element).toHaveClass(c);
        });

        // custom
        expect(element).toHaveClass("testClass");
    });

    test("forward ref works", async () => {
        const ref = createRef<HTMLButtonElement>();

        const {queryByTestId} = render(
            <RadioGroup>
                <SegmentedItem value="test" checked data-testid="item" ref={ref}/>
            </RadioGroup>
         );

        const element = queryByTestId("item");
        expect(element).toBeTruthy();

        expect(ref.current).toBeTruthy();
        expect(ref.current).toBe(element);
    });

    test("subcomponents should be present", async () => {
        expect(SegmentedItem.Indicator).toBeTruthy();
    })
});