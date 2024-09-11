import {render} from "@testing-library/react";
import React from "react";
import DropdownMenu from './DropdownMenu';

describe('<DropdownMenu />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <DropdownMenu open={true} data-testid={"element"} className={"bg-[red] myrandomclass"} triggerButtonText={"Open"}
                          triggerButtonIcon={<div>-myicon-</div>}>
                Test
            </DropdownMenu>
        );
        const element = await findByTestId("element-trigger") as HTMLButtonElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.textContent).toEqual("-myicon-Open");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(DropdownMenu.Link).toBeTruthy();
        expect(DropdownMenu.Group).toBeTruthy();
        expect(DropdownMenu.IconDefaultMore).toBeTruthy();
        expect(DropdownMenu.IconDefaultUser).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <DropdownMenu ref={ref} triggerButtonText={""} triggerButtonIcon={<div/>} />
        );
        expect(ref.current).toBeTruthy();
    });
});