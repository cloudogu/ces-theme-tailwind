import {render} from "@testing-library/react";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import LargePageLayout from "./LargePageLayout";

describe('<LargePageLayout />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Router>
                <LargePageLayout data-testid={"element"} className={"bg-[red] myrandomclass"} applicationTitle={""} pageHeadline={"headline"}>
                    Test
                </LargePageLayout>
            </Router>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("MAIN");
        expect(element.textContent).toEqual("headlineTest");
        expect(element.className).toContain("bg-[red] myrandomclass");
        expect(element.firstChild?.nodeName).toEqual("H1")
        expect((element.firstChild as HTMLElement).innerHTML).toEqual("headline")
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <Router>
                <LargePageLayout ref={ref} applicationTitle={""} pageHeadline={""}/>
            </Router>
        );
        expect(ref.current).toBeTruthy();
    });
});