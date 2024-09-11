import {render} from "@testing-library/react";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import React from "react";
import Item, {removeHoverStyles} from "./Item";

describe("<Item/>", () => {
    test("should render href with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <Item
                        color={"brand"}
                        data-testid={"test"}
                        className={"bg-red randomclass"}
                        asChild={true}>
                        <span>Test</span>
                    </Item>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        const element = await findByTestId("test") as HTMLSpanElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.className).toContain("bg-red randomclass")
        expect(element.innerHTML).toEqual("Test");
    });

    test.each([
        ["brand", "danger", "success", "neutral"]
    ])('color %s works', async (color) => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <Item
                        color={color.toLowerCase() as any}
                        data-testid={"test"}
                        asChild={true}>
                        <span>Test</span>
                    </Item>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        const element = await findByTestId("test") as HTMLSpanElement;
        expect(element.className).toContain(`text-${color}`);
        expect(element.className).toContain(`focus-visible:bg-${color}`);
        expect(element.className).toContain(`focus-visible:text-inverted-text`);
    });

    describe('removeHoverStyles', () => {
        test("will remove hover", async () => {
            expect(removeHoverStyles("hover:")).toEqual("");
            expect(removeHoverStyles("hover:123")).toEqual("");
            expect(removeHoverStyles("hover:text")).toEqual("");
            expect(removeHoverStyles("hover:-text")).toEqual("");
        });
        test("will remove hover even with prefix", async () => {
            expect(removeHoverStyles("focus-visible:hover:bg-red")).toEqual("");
            expect(removeHoverStyles("focus:focus-visible:hover:bg-red")).toEqual("");
        });
        test("will remove hover between multiple classes", async () => {
            const input = "bg-red hover:bg-greem text-red focus-visible:text-xl focus-visible:hover:text-3xl text-xl hover:bg-red";
            const expected = "bg-red text-red focus-visible:text-xl text-xl";
            expect(removeHoverStyles(input)).toEqual(expected);
        });
    });
});