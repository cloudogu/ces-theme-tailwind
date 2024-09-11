import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.SegmentedContent/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.SegmentedContent data-testid={"element"} className={"bg-red randomclass"}>
                    Test
                </SegmentedSelect.SegmentedContent>
            </SegmentedSelect>);
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-red randomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.SegmentedContent.Viewport).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent.Viewport).not.toBeUndefined();
        expect(SegmentedSelect.SegmentedContent.Item).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent.Item).not.toBeUndefined();
        expect(SegmentedSelect.SegmentedContent.ScrollUpButton).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent.ScrollUpButton).not.toBeUndefined();
        expect(SegmentedSelect.SegmentedContent.ScrollDownButton).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent.ScrollDownButton).not.toBeUndefined();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Content data-testid={"element"} className={"bg-red randomclass"} ref={ref}>
                    Test
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        expect(ref.current).not.toBeNull();
    });
});
