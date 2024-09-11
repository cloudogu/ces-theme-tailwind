import {render} from "@testing-library/react";
import React from "react";
import ApplicationTitle from './ApplicationTitle';
import NavbarRoot from "@components/navbar/NavbarRoot";

global.ResizeObserver = require("resize-observer-polyfill");

describe('<ApplicationTitle />', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {
    });
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <NavbarRoot>
                <ApplicationTitle data-testid={"element"} className={"text-red myrandomclass"}>
                    Title
                </ApplicationTitle>
            </NavbarRoot>
        );
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.children[0].textContent).toEqual(".cloudogu-logo{fill:#24a2dc}");
        expect(element.children[1].textContent).toEqual("Title");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("can pass custom icon", async () => {
        const {findByTestId} = render(
            <NavbarRoot>
                <ApplicationTitle icon={<div>customicon</div>} data-testid={"element"} className={"text-red myrandomclass"}>
                    Title
                </ApplicationTitle>
            </NavbarRoot>
        );
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.children[0].textContent).toEqual("customicon");
        expect(element.children[1].textContent).toEqual("Title");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("fail outside navbar root", async () => {
        expect(() => {
            render(
                <ApplicationTitle data-testid={"element"} className={"text-red myrandomclass"}>
                    Title
                </ApplicationTitle>
            );
        }).toThrowError("You cannot use this component outside of the navbar root.");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLElement>();
        render(
            <NavbarRoot>
                <ApplicationTitle ref={ref}/>
            </NavbarRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});