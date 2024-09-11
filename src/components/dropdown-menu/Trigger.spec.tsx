import {render} from "@testing-library/react";
import ButtonItem from "./ButtonItem";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import React from "react";
import TriggerButton from "./TriggerButton";
import Trigger from "./Trigger";

describe("<Trigger/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu open={true}>
                <Trigger data-testid={"btn"} asChild={true}>
                    <button className={"bg-[red] myrandomclass"}>Test</button>
                </Trigger>
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
                <Trigger data-testid={"btn"} asChild={true} ref={ref}>
                    <button className={"bg-[red] myrandomclass"}>Test</button>
                </Trigger>
            </SegmentedDropdownMenu>);
        expect(ref.current).not.toBeNull();
    });
});