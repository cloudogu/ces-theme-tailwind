import {render} from "@testing-library/react";
import React from "react";
import Select from "./Select";

describe("<Select.SegmentedItem/>", () => {
    window.HTMLElement.prototype.scrollIntoView = function () {
    };

    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Select open={true} placeholder={""}>
                <Select.Item value={"test"} data-testid={"element"} className={"bg-red randomclass"}>
                    Test
                </Select.Item>
            </Select>
        );
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toContain("Test");
        expect(element.className).toContain("bg-red randomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <Select open={true} placeholder={""}>
                <Select.Item value={"test"} data-testid={"element"} className={"bg-red randomclass"} ref={ref}>
                    Test
                </Select.Item>
            </Select>);
        expect(ref.current).not.toBeNull();
    });
});