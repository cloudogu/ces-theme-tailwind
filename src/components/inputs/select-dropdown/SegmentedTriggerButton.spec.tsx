import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.SegmentedTriggerButton/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.SegmentedTriggerButton className={"text-[red] myrandomclassname"} data-testid={"btn"}>
                    Test
                </SegmentedSelect.SegmentedTriggerButton>
            </SegmentedSelect>);
        const element = await findByTestId("btn") as HTMLElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("text-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.SegmentedTriggerButton.Icon).not.toBeNull();
        expect(SegmentedSelect.SegmentedTriggerButton.Icon).not.toBeUndefined();
        expect(SegmentedSelect.SegmentedTriggerButton.Value).not.toBeNull();
        expect(SegmentedSelect.SegmentedTriggerButton.Value).not.toBeUndefined();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.SegmentedTriggerButton ref={ref}>
                    a
                </SegmentedSelect.SegmentedTriggerButton>
            </SegmentedSelect>);
        expect(ref.current).not.toBeNull();
    });
});
