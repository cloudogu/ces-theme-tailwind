import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.SegmentedContent.Viewport/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Content>
                    <SegmentedSelect.SegmentedContent.Viewport data-testid={"val"}>
                        Test
                    </SegmentedSelect.SegmentedContent.Viewport>
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        const element = await findByTestId("val") as HTMLElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.SegmentedContent.Viewport.Item).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent.Viewport.Item).not.toBeUndefined();
        expect(SegmentedSelect.SegmentedContent.Viewport.SegmentedItem).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent.Viewport.SegmentedItem).not.toBeUndefined();
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
