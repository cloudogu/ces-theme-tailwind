import DropdownMenu from "./DropdownMenu";
import {render} from "@testing-library/react";
import React from "react";

describe("<DropdownMenu/>", () => {
    test("trigger button should contain svg by default", async () => {
        const {findByTestId} = render(
            <DropdownMenu
                open={true}
                data-testid={"element"}
            />
        );
        const element = await findByTestId("element-trigger") as HTMLButtonElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.firstChild?.nodeName).toEqual("svg");
    });
    test("should have expected children", async () => {
        expect(DropdownMenu.Item).toBeTruthy();
        expect(DropdownMenu.LinkItem).not.toBeUndefined();
        expect(DropdownMenu.LinkItem).not.toBeNull();
        expect(DropdownMenu.ButtonItem).not.toBeUndefined();
        expect(DropdownMenu.ButtonItem).not.toBeNull();
        expect(DropdownMenu.RouterLinkItem).not.toBeUndefined();
        expect(DropdownMenu.RouterLinkItem).not.toBeNull();
        expect(DropdownMenu.CommonIcons).not.toBeUndefined();
        expect(DropdownMenu.CommonIcons).not.toBeNull();
    });
    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <DropdownMenu
                open={true}
                data-testid={"element"}
                ref={ref}
            />);
        expect(ref.current).not.toBeNull();
    });
});