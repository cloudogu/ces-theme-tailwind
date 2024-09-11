import {render} from "@testing-library/react";
import React from "react";
import HeadWithOneRow from './HeadWithOneRow';

describe('<HeadWithOneRow />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <table>
                <HeadWithOneRow data-testid={"element"} className={"text-red myrandomclass"}>
                    <td>Test</td>
                </HeadWithOneRow>
            </table>
        );
        const element = await findByTestId("element") as HTMLTableSectionElement;
        expect(element.nodeName).toEqual("THEAD");
        expect(element.textContent).toEqual("Test");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(HeadWithOneRow.Column).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableSectionElement>();
        render(
            <table>
                <HeadWithOneRow ref={ref}/>
            </table>
        );
        expect(ref.current).toBeTruthy();
    });
});
