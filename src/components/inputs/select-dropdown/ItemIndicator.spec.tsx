import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.SegmentedContent.Viewport.SegmentedItem.Indicator/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true} value={"a"}>
                <SegmentedSelect.Content>
                    <SegmentedSelect.SegmentedContent.Viewport>
                        <SegmentedSelect.SegmentedContent.Viewport.Item value={"a"}>
                            <SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Indicator data-testid={"element"}
                                                                                      className={"flex-row myrandomclass"}>Test</SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Indicator>
                        </SegmentedSelect.SegmentedContent.Viewport.Item>
                    </SegmentedSelect.SegmentedContent.Viewport>
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("flex-row myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Indicator.DefaultIcon).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Indicator.DefaultIcon).not.toBeUndefined();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedSelect open={true} value={"a"}>
                <SegmentedSelect.Content>
                    <SegmentedSelect.SegmentedContent.Viewport>
                        <SegmentedSelect.SegmentedContent.Viewport.Item value={"a"}>
                            <SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Indicator
                                ref={ref}>Test</SegmentedSelect.SegmentedContent.Viewport.SegmentedItem.Indicator>
                        </SegmentedSelect.SegmentedContent.Viewport.Item>
                    </SegmentedSelect.SegmentedContent.Viewport>
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        expect(ref.current).not.toBeNull();
    });
});
