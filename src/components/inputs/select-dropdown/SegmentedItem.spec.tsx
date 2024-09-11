import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.SegmentedContent.Viewport.SegmentedItem/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Content>
                    <SegmentedSelect.SegmentedContent.Viewport>
                        <SegmentedSelect.SegmentedContent.Viewport.Item
                            data-testid={"element"}
                            value={"a"}
                            className={"flex-col randomclass"}>
                            Test
                        </SegmentedSelect.SegmentedContent.Viewport.Item>
                    </SegmentedSelect.SegmentedContent.Viewport>
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.className).toContain("flex-col randomclass");
        const elementText = await findByTestId("element-text") as HTMLElement;
        expect(elementText.nodeName).toEqual("SPAN");
        expect(elementText.innerHTML).toEqual("Test");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Indicator).toBeTruthy();
        expect(SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Text).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Content>
                    <SegmentedSelect.SegmentedContent.Viewport>
                        <SegmentedSelect.SegmentedContent.Viewport.Item data-testid={"element"} value={"a"} ref={ref}
                                                                        className={"flex-col randomclass"}>Test</SegmentedSelect.SegmentedContent.Viewport.Item>
                    </SegmentedSelect.SegmentedContent.Viewport>
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        expect(ref.current).not.toBeNull();
    });
});
