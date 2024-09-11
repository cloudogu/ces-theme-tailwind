import {render} from "@testing-library/react";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import React from "react";
import LinkItem from "./LinkItem";

describe("<LinkItem/>", () => {
    test("should render href with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <LinkItem
                        color={"brand"}
                        data-testid={"link"}
                        href={"http://localhost/myhref"}
                        className={"bg-[red] myrandomclass"}>
                        Test
                    </LinkItem>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        const element = await findByTestId("link") as HTMLLinkElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("Test");
        expect(element.href).toEqual("http://localhost/myhref");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLAnchorElement>();
        render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <LinkItem
                        color={"brand"}
                        data-testid={"link"}
                        href={"http://localhost/myhref"}
                        ref={ref}
                        className={"bg-[red] myrandomclass"}>
                        Test
                    </LinkItem>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        expect(ref.current).not.toBeNull();
    });
});