import {render} from "@testing-library/react";
import React from "react";
import DesktopNavItemBarLink from './DesktopNavItemBarLink';

describe('<DesktopNavItemBarLink />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <DesktopNavItemBarLink data-testid={"element"} className={"bg-[red] myrandomclass"}>
                Test
            </DesktopNavItemBarLink>
        );
        const element = await findByTestId("element-normal") as HTMLDivElement;
        expect(element.nodeName).toEqual("A");
        expect(element.textContent).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("can add custom icon", async () => {
        const {findByTestId} = render(
            <DesktopNavItemBarLink data-testid={"element"} className={"bg-[red] myrandomclass"} icon={<div>-Testicon</div>}>
                Test
            </DesktopNavItemBarLink>
        );
        const element = await findByTestId("element-normal") as HTMLDivElement;
        expect(element.nodeName).toEqual("A");
        expect(element.textContent).toEqual("Test-Testicon");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("can render (function => react node) as child", async () => {
        const {findByTestId} = render(
            <DesktopNavItemBarLink data-testid={"element"}>
                {() => <>i am react node</>}
            </DesktopNavItemBarLink>
        );
        const element = await findByTestId("element-normal") as HTMLDivElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("<span>i am react node</span>");
    });

    test("can render (string) as child", async () => {
        const {findByTestId} = render(
            <DesktopNavItemBarLink data-testid={"element"}>
                {"i am string"}
            </DesktopNavItemBarLink>
        );
        const element = await findByTestId("element-normal") as HTMLDivElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("<span>i am string</span>");
    });

    test("should have expected encapsulated components", async () => {
        expect(DesktopNavItemBarLink.IconDefaultHelp).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLAnchorElement>();
        render(
            <DesktopNavItemBarLink ref={ref} />
        );
        expect(ref.current).toBeTruthy();
    });
});