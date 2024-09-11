import {render} from "@testing-library/react";
import React from "react";
import PreconfiguredDropdownMenuMore from './PreconfiguredDropdownMenuMore';
import i18n from "@src/i18n";
import NavbarRoot from "@components/navbar/NavbarRoot";

global.ResizeObserver = require("resize-observer-polyfill");

i18n.init({
    lng: "de",
});
describe('<PreconfiguredDropdownMenuMore />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <NavbarRoot>
                <PreconfiguredDropdownMenuMore data-testid={"element"} className={"bg-[red] myrandomclass"} open={true}>
                    Test
                </PreconfiguredDropdownMenuMore>
            </NavbarRoot>
        );
        const element = await findByTestId("element-trigger") as HTMLButtonElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.className).toContain("bg-[red] myrandomclass");
        expect(element.textContent).toEqual("Mehr");

        const content = await findByTestId("element-content") as HTMLDivElement;
        expect(content.innerHTML).toEqual("Test");
    });

    test("should have expected encapsulated components", async () => {
        expect(PreconfiguredDropdownMenuMore.Link).toBeTruthy();
        expect(PreconfiguredDropdownMenuMore.Group).toBeTruthy();
    });


    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <NavbarRoot>
                <PreconfiguredDropdownMenuMore ref={ref}/>
            </NavbarRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});