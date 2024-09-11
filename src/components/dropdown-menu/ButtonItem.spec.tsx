import {render} from "@testing-library/react";
import ButtonItem from "./ButtonItem";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import React from "react";

describe("<ButtonItem/>", () => {
    test("should render button with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <ButtonItem
                        color={"brand"}
                        data-testid={"btn"}
                        className={"bg-[red] myrandomclass"}>
                        Test
                    </ButtonItem>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        const element = await findByTestId("btn") as HTMLLinkElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <ButtonItem
                        color={"brand"}
                        data-testid={"btn"}
                        ref={ref}
                        className={"bg-[red] myrandomclass"}>
                        Test
                    </ButtonItem>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        expect(ref.current).not.toBeNull();
    });
});