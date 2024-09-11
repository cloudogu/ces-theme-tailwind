import {render} from "@testing-library/react";
import SegmentedCheckbox from "./SegmentedCheckbox";
import React, {createRef} from "react";

describe("Checkbox CheckIconMinus", () => {
    test("should render with expected classes", async () => {
        const checked = false;
        const {findByTestId} = render(
            <SegmentedCheckbox checked={true}>
                <SegmentedCheckbox.CheckboxIndicator>
                    {checked && <SegmentedCheckbox.CheckboxIndicator.CheckIcon/>}
                    {!checked && <SegmentedCheckbox.CheckboxIndicator.CheckIconMinus data-testid={"checkIconMinus"}/>}
                </SegmentedCheckbox.CheckboxIndicator>
            </SegmentedCheckbox>
        );
        const element = await findByTestId("checkIconMinus") as unknown as SVGSVGElement;
        expect(element.nodeName).toEqual("svg");
    });

    test("forward ref works", async () => {
        const ref = createRef<SVGSVGElement>();
        const checked = "indeterminate";
        render(
            <SegmentedCheckbox checked={checked}>
                <SegmentedCheckbox.CheckboxIndicator>
                    {checked !== "indeterminate" && <SegmentedCheckbox.CheckboxIndicator.CheckIcon/>}
                    {checked === "indeterminate" && <SegmentedCheckbox.CheckboxIndicator.CheckIconMinus ref={ref}/>}
                </SegmentedCheckbox.CheckboxIndicator>
            </SegmentedCheckbox>
        );
        expect(ref.current).toBeTruthy();
    });
});
