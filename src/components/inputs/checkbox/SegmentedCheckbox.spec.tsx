import {render} from "@testing-library/react";
import React from "react";
import SegmentedCheckbox from "./SegmentedCheckbox";


describe("Segmented Checkbox", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <SegmentedCheckbox data-testid={"checkbox"}>
                <SegmentedCheckbox.CheckboxIndicator>
                    <SegmentedCheckbox.CheckboxIndicator.CheckIcon/>
                </SegmentedCheckbox.CheckboxIndicator>
            </SegmentedCheckbox>
        );
        const element = await findByTestId("checkbox") as HTMLSpanElement;
        expect(element.nodeName).toEqual("BUTTON");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedCheckbox ref={ref}>
                <SegmentedCheckbox.CheckboxIndicator>
                    <SegmentedCheckbox.CheckboxIndicator.CheckIcon/>
                </SegmentedCheckbox.CheckboxIndicator>
            </SegmentedCheckbox>
        );
        expect(ref.current).toBeTruthy();
    });

    test("subcomponents should be present", async () => {
        expect(SegmentedCheckbox.CheckboxIndicator).toBeTruthy();
    })
});
