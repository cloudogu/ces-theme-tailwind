import {render} from "@testing-library/react";
import React from "react";
import Link from './Link';
import {BrowserRouter as Router} from "react-router-dom";

describe('<Link />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Link data-testid={"element"} className={"bg-[red] myrandomclass"}>
                Test
            </Link>
        );
        const element = await findByTestId("element-normal") as HTMLAnchorElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("transforms to router link if 'to' is provided", async () => {
        const {findByTestId} = render(
            <Router>
                <Link data-testid={"element"} className={"bg-[red] myrandomclass"} to={"/link"}>
                    Test
                </Link>
            </Router>
        );
        const element = await findByTestId("element-router") as HTMLAnchorElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");

    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLAnchorElement>();
        render(
            <Link ref={ref}/>
        );
        expect(ref.current).toBeTruthy();
    });
});