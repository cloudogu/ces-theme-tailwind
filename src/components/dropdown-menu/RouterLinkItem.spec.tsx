import {render} from "@testing-library/react";
import SegmentedDropdownMenu from "./SegmentedDropdownMenu";
import React from "react";
import RouterLinkItem from "./RouterLinkItem";
import {BrowserRouter as Router} from 'react-router-dom';

describe("<RouterLinkItem/>", () => {
    test("should render href with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Router>
                <SegmentedDropdownMenu open={true}>
                    <SegmentedDropdownMenu.Content>
                        <RouterLinkItem
                            color={"brand"}
                            data-testid={"link"}
                            to={"myhref"}
                            className={"bg-[red] myrandomclass"}>
                            Test
                        </RouterLinkItem>
                    </SegmentedDropdownMenu.Content>
                </SegmentedDropdownMenu>
            </Router>);
        const element = await findByTestId("link") as HTMLLinkElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("Test");
        expect(element.href).toEqual("http://localhost/myhref");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLAnchorElement>();
        render(
            <Router>
                <SegmentedDropdownMenu open={true}>
                    <SegmentedDropdownMenu.Content>
                        <RouterLinkItem
                            color={"brand"}
                            data-testid={"link"}
                            ref={ref}
                            to={"myhref"}
                            className={"bg-[red] myrandomclass"}>
                            Test
                        </RouterLinkItem>
                    </SegmentedDropdownMenu.Content>
                </SegmentedDropdownMenu>
            </Router>);
        expect(ref.current).not.toBeNull();
    });
});