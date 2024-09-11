import {render} from "@testing-library/react";
import React from "react";
import DropdownMenuGroup from './DropdownMenuGroup';

describe('<DropdownMenuGroup />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <DropdownMenuGroup data-testid={"element"} className={"bg-[red] myrandomclass"}>
                Test
            </DropdownMenuGroup>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(DropdownMenuGroup.Link).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <DropdownMenuGroup ref={ref}/>
        );
        expect(ref.current).toBeTruthy();
    });
});