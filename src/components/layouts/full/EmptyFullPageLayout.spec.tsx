import {render} from "@testing-library/react";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import EmptyFullPageLayout from "@components/layouts/full/EmptyFullPageLayout";

describe('<EmptyFullPageLayout />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Router>
                <EmptyFullPageLayout data-testid={"element"} className={"bg-[red] myrandomclass"} applicationTitle={""}>
                    Test
                </EmptyFullPageLayout>
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
                <EmptyFullPageLayout ref={ref} applicationTitle={""}/>
            </Router>
        );
        expect(ref.current).toBeTruthy();
    });
});