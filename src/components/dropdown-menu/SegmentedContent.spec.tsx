import SegmentedContent from "./SegmentedContent";
import {render} from "@testing-library/react";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import React from "react";

describe("<SegmentedContent/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content data-testid={"content"} className={"bg-[red] myrandomclass"}>Test</SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        const element = await findByTestId("content") as HTMLLinkElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have both shadows", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content data-testid={"content"}>Test</SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        const element = await findByTestId("content") as HTMLLinkElement;
        expect(element.className).toContain("shadow-neutral-weak shadow");
    });

    test("should have expected children", async () => {
        expect(SegmentedContent.UnstyledItem).toBeTruthy()
        expect(SegmentedContent.Item).toBeTruthy()
        expect(SegmentedContent.ButtonItem).toBeTruthy()
        expect(SegmentedContent.LinkItem).toBeTruthy()
        expect(SegmentedContent.RouterLinkItem).toBeTruthy()
        expect(SegmentedContent.Group).toBeTruthy()
    });
});