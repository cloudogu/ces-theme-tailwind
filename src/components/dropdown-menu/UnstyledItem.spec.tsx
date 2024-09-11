import {render} from "@testing-library/react";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import React from "react";
import UnstyledItem from "./UnstyledItem";

describe("<UnstyledItem/>", () => {
    test("should render href with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <UnstyledItem
                        color={"brand"}
                        data-testid={"link"}
                        asChild={true}
                    >
                        <button>Test</button>
                    </UnstyledItem>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        const element = await findByTestId("link") as HTMLLinkElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.innerHTML).toEqual("Test");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content>
                    <UnstyledItem
                        color={"brand"}
                        data-testid={"link"}
                        asChild={true}
                        ref={ref}
                    >
                        <button>Test</button>
                    </UnstyledItem>
                </SegmentedDropdownMenu.Content>
            </SegmentedDropdownMenu>);
        expect(ref.current).not.toBeNull();
    });
});