import {render} from "@testing-library/react";
import React from "react";
import GenericPageLayout from './GenericPageLayout';
import {BrowserRouter as Router} from "react-router-dom";

describe('<GenericPageLayout />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Router>
                <GenericPageLayout data-testid={"element"} className={"bg-[red] myrandomclass"} applicationTitle={""}>
                    Test
                </GenericPageLayout>
            </Router>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("MAIN");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <Router>
                <GenericPageLayout ref={ref} applicationTitle={""}/>
            </Router>
        );
        expect(ref.current).toBeTruthy();
    });
});