import {render} from "@testing-library/react";
import React from "react";
import BodyRow from "./BodyRow";

describe('<BodyRow />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <table>
                <tbody>
                <BodyRow data-testid={"element"} className={"bg-[red] myrandomclass"}>
                    <td>Test</td>
                </BodyRow>
                </tbody>
            </table>
        );
        const element = await findByTestId("element") as HTMLTableRowElement;
        expect(element.nodeName).toEqual("TR");
        expect(element.innerHTML).toEqual("<td>Test</td>");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(BodyRow.Column).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableRowElement>();
        render(
            <table>
                <tbody>
                <BodyRow ref={ref}/>
                </tbody>
            </table>
        );
        expect(ref.current).toBeTruthy();
    });
});
