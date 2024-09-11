import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.TriggerButton/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.TriggerButton className={"bg-red randomclass"} data-testid={"element"}>
                    Test
                </SegmentedSelect.TriggerButton>
            </SegmentedSelect>);
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.innerHTML).toContain("Test");
        expect(element.className).toContain("bg-red randomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.TriggerButton
                    className={"bg-red randomclass"}
                    data-testid={"element"}
                    ref={ref}
                >
                    Test
                </SegmentedSelect.TriggerButton>
            </SegmentedSelect>);
        expect(ref.current).not.toBeNull();
    });
});