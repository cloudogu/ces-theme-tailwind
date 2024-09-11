import {render} from "@testing-library/react";
import React from "react";
import HeadRow from "./HeadRow";

describe('<HeadRow />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <table>
                <thead>
                <HeadRow data-testid={"element"} className={"bg-[red] myrandomclass"}>
                    <td>Test</td>
                </HeadRow>
                </thead>
            </table>
        );
        const element = await findByTestId("element") as HTMLTableRowElement;
        expect(element.nodeName).toEqual("TR");
        expect(element.textContent).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(HeadRow.Column).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableRowElement>();
        render(
            <table>
                <thead>
                <HeadRow ref={ref}/>
                </thead>
            </table>
        );
        expect(ref.current).toBeTruthy();
    });
});
