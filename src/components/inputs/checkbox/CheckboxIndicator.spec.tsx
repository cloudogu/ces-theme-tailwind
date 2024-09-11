import {render} from "@testing-library/react";
import React, {createRef} from "react";
import SegmentedCheckbox from "./SegmentedCheckbox";
import CheckboxIndicator from "@components/inputs/checkbox/CheckboxIndicator";


describe("Checkbox CheckboxIndicator", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <SegmentedCheckbox checked={true}>
                <SegmentedCheckbox.CheckboxIndicator data-testid={"indicator"}>
                    <SegmentedCheckbox.CheckboxIndicator.CheckIcon/>
                </SegmentedCheckbox.CheckboxIndicator>
            </SegmentedCheckbox>
        );
        const element = await findByTestId("indicator") as HTMLSpanElement;
        expect(element.nodeName).toEqual("SPAN");
    });

    test("forward ref works", async () => {
        const ref = createRef<HTMLSpanElement>();

        render(
            <SegmentedCheckbox checked={true}>
                <SegmentedCheckbox.CheckboxIndicator ref={ref}>
                    <SegmentedCheckbox.CheckboxIndicator.CheckIcon/>
                </SegmentedCheckbox.CheckboxIndicator>
            </SegmentedCheckbox>
        );
        expect(ref.current).toBeTruthy();
    });

    test("subcomponents should be present", async () => {
        expect(CheckboxIndicator.CheckIcon).toBeTruthy();
        expect(CheckboxIndicator.CheckIconMinus).toBeTruthy();
    })
});
