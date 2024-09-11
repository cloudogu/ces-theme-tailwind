import React from "react";
import {render} from "@testing-library/react";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import Group from "./Group";

describe("<Group/>", () => {
    test("should render with expected classes and children", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <SegmentedDropdownMenu.Content.Group data-testid={"element"} className={"bg-[red] myrandomclass"}>
                        Test
                    </SegmentedDropdownMenu.Content.Group>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
        expect(element.className).not.toEqual("bg-[red] myrandomclass");
    });

    test("should have expected children", async () => {
        expect(Group.Item).toBeTruthy()
        expect(Group.UnstyledItem).toBeTruthy()
        expect(Group.ButtonItem).toBeTruthy()
        expect(Group.LinkItem).toBeTruthy()
        expect(Group.RouterLinkItem).toBeTruthy()
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <Group ref={ref}/>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        expect(ref.current).not.toBeNull();
    });
});