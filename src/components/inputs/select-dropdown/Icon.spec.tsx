import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.SegmentedTriggerButton.Icon/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.SegmentedTriggerButton>
                    <SegmentedSelect.SegmentedTriggerButton.Icon data-testid={"element"} className={"flex-col randomclass"}>
                        Test
                    </SegmentedSelect.SegmentedTriggerButton.Icon>
                </SegmentedSelect.SegmentedTriggerButton>
            </SegmentedSelect>);
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("flex-col randomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.SegmentedTriggerButton.Icon.DefaultArrow).not.toBeNull();
        expect(SegmentedSelect.SegmentedTriggerButton.Icon.DefaultArrow).not.toBeUndefined();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLSpanElement>();
        render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.SegmentedTriggerButton>
                    <SegmentedSelect.SegmentedTriggerButton.Icon data-testid={"element"} className={"flex-col randomclass"}
                                                        ref={ref}>
                        Test
                    </SegmentedSelect.SegmentedTriggerButton.Icon>
                </SegmentedSelect.SegmentedTriggerButton>
            </SegmentedSelect>);
        expect(ref.current).not.toBeNull();
    });
});
