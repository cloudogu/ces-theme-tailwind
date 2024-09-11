import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.SegmentedContent.Viewport.SegmentedItem.Text/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Content>
                    <SegmentedSelect.SegmentedContent.Viewport>
                        <SegmentedSelect.SegmentedContent.Viewport.Item value={"a"}>
                            <SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Text
                                data-testid={"element"}>Test</SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Text>
                        </SegmentedSelect.SegmentedContent.Viewport.Item>
                    </SegmentedSelect.SegmentedContent.Viewport>
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.innerHTML).toEqual("Test");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Content>
                    <SegmentedSelect.SegmentedContent.Viewport>
                        <SegmentedSelect.SegmentedContent.Viewport.Item value={"a"}>
                            <SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Text
                                ref={ref}>Test</SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Text>
                        </SegmentedSelect.SegmentedContent.Viewport.Item>
                    </SegmentedSelect.SegmentedContent.Viewport>
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        expect(ref.current).not.toBeNull();
    });
});