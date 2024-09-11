import {render} from "@testing-library/react";
import React from "react";
import DropdownMenuTriggerButton from './DropdownMenuTriggerButton';
import {SegmentedDropdownMenu} from "@components/dropdown-menu";

describe('<DropdownMenuTriggerButton />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedDropdownMenu>
                <DropdownMenuTriggerButton className={"bg-[red] myrandomclass"} data-testid={"element"}>
                    Test
                </DropdownMenuTriggerButton>
            </SegmentedDropdownMenu>
        );
        const element = await findByTestId("element") as HTMLButtonElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.textContent).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <SegmentedDropdownMenu>
                <DropdownMenuTriggerButton ref={ref}/>
            </SegmentedDropdownMenu>
        );
        expect(ref.current).toBeTruthy();
    });
});