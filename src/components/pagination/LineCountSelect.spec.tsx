import {render} from "@testing-library/react";
import React from "react";
import LineCountSelect from "./LineCountSelect";
import PaginationRoot from "./PaginationRoot";

describe('<LineCountSelect />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <PaginationRoot>
                <LineCountSelect open={true} data-testid={"element"} className={"text-red myrandomclass"}>
                    Test
                </LineCountSelect>
            </PaginationRoot>
        );

        const trigger = await findByTestId("element-trigger") as HTMLElement;
        expect(trigger.nodeName).toEqual("BUTTON");
        expect(trigger.className).toContain("text-red myrandomclass");

        const element = await findByTestId("element-viewport") as HTMLElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
    });

    test("should have expected encapsulated components", async () => {
        expect(LineCountSelect.Item).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <PaginationRoot>
                <LineCountSelect ref={ref}>
                    Test
                </LineCountSelect>
            </PaginationRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});
