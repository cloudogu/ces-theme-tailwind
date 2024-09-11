import React from "react";
import {render} from "@testing-library/react";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import Content from "./Content";

describe("<Content/>", () => {
    test("should have expected children", async () => {
        expect(Content.Item).toBeTruthy()
        expect(Content.UnstyledItem).toBeTruthy()
        expect(Content.ButtonItem).toBeTruthy()
        expect(Content.LinkItem).toBeTruthy()
        expect(Content.RouterLinkItem).toBeTruthy()
        expect(Content.Group).toBeTruthy()
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <SegmentedDropdownMenu open={true}>
                <SegmentedDropdownMenu.Content ref={ref}/>
            </SegmentedDropdownMenu>);
        expect(ref.current).not.toBeNull();
    });
});