import Select from "./Select";
import {render} from "@testing-library/react";
import React from "react";
import SegmentedSelect from "./SegmentedSelect";

describe("<Select/>", () => {
    window.HTMLElement.prototype.scrollIntoView = function () {
    };

    test("should have expected encapsulated components", async () => {
        expect(Select.Item).not.toBeNull();
        expect(Select.Item).not.toBeUndefined();
    });

    test("should add classNames to trigger button", async () => {
        const {findByTestId} = render(
            <Select open={true} placeholder={""} data-testid={"element"} className={"outline-100 myrandomclass"}>
            </Select>);
        const triggerButton = await findByTestId("element-trigger");
        expect(triggerButton.className).toContain("outline-100 myrandomclass");
    });

    test("sould set testids", async () => {
        const {findByTestId} = render(
            <Select open={true} placeholder={""} data-testid={"element"}>
            </Select>);
        expect(await findByTestId("element-trigger")).not.toBeUndefined();
        expect(await findByTestId("element-content")).not.toBeUndefined();
        expect(await findByTestId("element-viewport")).not.toBeUndefined();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <Select open={true} placeholder={""} ref={ref}>
            </Select>);
        expect(ref.current).not.toBeNull();
    });
});
