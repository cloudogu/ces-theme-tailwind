import {render} from "@testing-library/react";
import React from "react";
import PreconfiguredDropdownMenuMobile from './PreconfiguredDropdownMenuMobile';

describe('<PreconfiguredDropdownMenuMobile />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <PreconfiguredDropdownMenuMobile data-testid={"element"} className={"bg-[red] myrandomclass"} open={true}>
                Test
            </PreconfiguredDropdownMenuMobile>
        );
        const element = await findByTestId("element-trigger") as HTMLButtonElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.className).toContain("bg-[red] myrandomclass");

        const content = await findByTestId("element-content") as HTMLDivElement;
        expect(content.innerHTML).toEqual("Test");
    });

    test("should have expected encapsulated components", async () => {
        expect(PreconfiguredDropdownMenuMobile.Link).toBeTruthy();
        expect(PreconfiguredDropdownMenuMobile.Group).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <PreconfiguredDropdownMenuMobile ref={ref} />
        );
        expect(ref.current).toBeTruthy();
    });
});