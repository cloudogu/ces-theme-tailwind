import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.Content/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Content data-testid={"element"} className={"bg-red randomclass"}>
                    Test
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        const element = await findByTestId("element-viewport") as HTMLElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-red randomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.Content.Item).not.toBeNull();
        expect(SegmentedSelect.Content.Item).not.toBeUndefined();
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

    test("sould set testids", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Content data-testid={"element"} className={"bg-red randomclass"}>
                    Test
                </SegmentedSelect.Content>
            </SegmentedSelect>);
        expect(await findByTestId("element-content")).not.toBeUndefined();
        expect(await findByTestId("element-viewport")).not.toBeUndefined();
    });
});
