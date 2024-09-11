import {render} from "@testing-library/react";
import React from "react";
import PreconfiguredDropdownMenuUser from './PreconfiguredDropdownMenuUser';

describe('<PreconfiguredDropdownMenuUser />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <PreconfiguredDropdownMenuUser data-testid={"element"} className={"bg-[red] myrandomclass"}
                                           triggerButtonText={"Text"} open={true}>
                Test
            </PreconfiguredDropdownMenuUser>
        );
        const element = await findByTestId("element-trigger") as HTMLButtonElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.className).toContain("bg-[red] myrandomclass");
        expect(element.textContent).toEqual("Text");

        const content = await findByTestId("element-content") as HTMLDivElement;
        expect(content.innerHTML).toEqual("Test");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <PreconfiguredDropdownMenuUser ref={ref} triggerButtonText={""}/>
        );
        expect(ref.current).toBeTruthy();
    });
});
