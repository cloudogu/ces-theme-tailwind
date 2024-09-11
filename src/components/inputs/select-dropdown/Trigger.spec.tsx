import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select.Trigger/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Trigger className={"text-[red] myrandomclassname"} data-testid={"btn"}>
                    Test
                </SegmentedSelect.Trigger>
            </SegmentedSelect>);
        const element = await findByTestId("btn") as HTMLElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("text-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.Trigger.Icon).not.toBeNull();
        expect(SegmentedSelect.Trigger.Icon).not.toBeUndefined();
        expect(SegmentedSelect.Trigger.Value).not.toBeNull();
        expect(SegmentedSelect.Trigger.Value).not.toBeUndefined();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedSelect open={true}>
                <SegmentedSelect.Trigger ref={ref}>
                    a
                </SegmentedSelect.Trigger>
            </SegmentedSelect>);
        expect(ref.current).not.toBeNull();
    });
});
