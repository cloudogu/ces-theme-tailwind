import {render} from "@testing-library/react";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import React from "react";
import TriggerButton from "./TriggerButton";

describe("<TriggerButton/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <TriggerButton data-testid={"btn"} className={"bg-[red] myrandomclass"}>Test</TriggerButton>
            </SegmentedDropdownMenu>);
        const element = await findByTestId("btn") as HTMLLinkElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("has expected sub elements", async () => {
        expect(TriggerButton.CommonIcons).not.toBeUndefined();
        expect(TriggerButton.CommonIcons).not.toBeNull();
        expect(TriggerButton.CommonIcons.ThreeDotIcon).not.toBeUndefined();
        expect(TriggerButton.CommonIcons.ThreeDotIcon).not.toBeNull();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedDropdownMenu open={true}>
                <TriggerButton ref={ref} data-testid={"btn"} className={"bg-[red] myrandomclass"}>Test</TriggerButton>
            </SegmentedDropdownMenu>);
        expect(ref.current).not.toBeNull();
    });
});