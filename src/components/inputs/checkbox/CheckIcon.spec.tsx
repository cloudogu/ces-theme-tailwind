import {render} from "@testing-library/react";
import SegmentedCheckbox from "./SegmentedCheckbox";
import React, {createRef} from "react";

describe("Checkbox CheckIcon", () => {
    test("should render with expected classes", async () => {
        const checked = true;
        const {findByTestId} = render(
            <SegmentedCheckbox checked={true}>
                <SegmentedCheckbox.CheckboxIndicator>
                    {checked && <SegmentedCheckbox.CheckboxIndicator.CheckIcon data-testid={"checkIcon"}/>}
                    {!checked && <SegmentedCheckbox.CheckboxIndicator.CheckIconMinus/>}
                </SegmentedCheckbox.CheckboxIndicator>
            </SegmentedCheckbox>
        );
        const element = await findByTestId("checkIcon") as unknown as SVGSVGElement;
        expect(element.nodeName).toEqual("svg");
    });

    test("forward ref works", async () => {
        const ref = createRef<SVGSVGElement>();
        const checked = true;
        render(
            <SegmentedCheckbox checked={checked}>
                <SegmentedCheckbox.CheckboxIndicator>
                    {checked && <SegmentedCheckbox.CheckboxIndicator.CheckIcon ref={ref}/>}
                    {!checked && <SegmentedCheckbox.CheckboxIndicator.CheckIconMinus/>}
                </SegmentedCheckbox.CheckboxIndicator>
            </SegmentedCheckbox>
        );
        expect(ref.current).toBeTruthy();
    });
});
