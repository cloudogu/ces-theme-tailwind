import {render} from "@testing-library/react";
import React from "react";
import DropdownMenuLink from './DropdownMenuLink';
import DropdownMenu from "./DropdownMenu";
import {BrowserRouter as Router} from "react-router-dom";
import DesktopNavItemBarLink from "@components/navbar/DesktopNavItemBarLink";

describe('<DropdownMenuLink />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <DropdownMenu triggerButtonText={""} triggerButtonIcon={<div/>} open={true}>
                <DropdownMenuLink data-testid={"element"} className={"bg-[red] myrandomclass"}>
                    Test
                </DropdownMenuLink>
            </DropdownMenu>
        );
        const element = await findByTestId("element-normal") as HTMLAnchorElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should render router-link if 'to' is provided", async () => {
        const {findByTestId} = render(
            <Router>
                <DropdownMenu triggerButtonText={""} triggerButtonIcon={<div/>} open={true}>
                    <DropdownMenuLink to={"/test"} data-testid={"element"} className={"bg-[red] myrandomclass"}>
                        Test
                    </DropdownMenuLink>
                </DropdownMenu>
            </Router>
        );
        const element = await findByTestId("element-router") as HTMLAnchorElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });


    test("can render (function => react node) as child", async () => {
        const {findByTestId} = render(
            <DropdownMenu triggerButtonText={""} triggerButtonIcon={<div/>} open={true}>
                <DropdownMenuLink data-testid={"element"}>
                    {() => <>i am react node</>}
                </DropdownMenuLink>
            </DropdownMenu>
        );
        const element = await findByTestId("element-normal") as HTMLDivElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("i am react node");
    });

    test("can render (string) as child", async () => {
        const {findByTestId} = render(
            <DropdownMenu triggerButtonText={""} triggerButtonIcon={<div/>} open={true}>
                <DropdownMenuLink data-testid={"element"} >
                    {"i am string"}
                </DropdownMenuLink>
            </DropdownMenu>
        );
        const element = await findByTestId("element-normal") as HTMLDivElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("i am string");
    });

    test("should render normal-link if 'to' is provided", async () => {
        const {findByTestId} = render(
            <Router>
                <DropdownMenu triggerButtonText={""} triggerButtonIcon={<div/>} open={true}>
                    <DropdownMenuLink href={"/test"} data-testid={"element"} className={"bg-[red] myrandomclass"}>
                        Test
                    </DropdownMenuLink>
                </DropdownMenu>
            </Router>
        );
        const element = await findByTestId("element-normal") as HTMLAnchorElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLAnchorElement>();
        render(
            <DropdownMenu triggerButtonText={""} triggerButtonIcon={<div/>} open={true}>
                <DropdownMenuLink ref={ref}/>
            </DropdownMenu>
        );
        expect(ref.current).toBeTruthy();
    });
});