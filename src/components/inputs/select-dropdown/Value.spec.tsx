import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.Trigger.Value/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Trigger>
                    <SegmentedSelect.Trigger.Value data-testid={"val"}/>
                </SegmentedSelect.Trigger>
            </SegmentedSelect>);
        const element = await findByTestId("val") as HTMLElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.innerHTML).toEqual("");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Trigger>
                    <SegmentedSelect.Trigger.Value ref={ref} data-testid={"val"}/>
                </SegmentedSelect.Trigger>
            </SegmentedSelect>);
        expect(ref.current).not.toBeNull();
    });
});