import {render} from "@testing-library/react";
import React from "react";
import HeadColumn from './HeadColumn';

describe('<HeadColumn />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <table>
                <thead>
                <tr>
                    <HeadColumn data-testid={"element"} className={"text-red myrandomclass"}>
                        Test
                    </HeadColumn>
                </tr>
                </thead>
            </table>
        );
        const element = await findByTestId("element") as HTMLTableCellElement;
        expect(element.nodeName).toEqual("TH");
        expect(element.textContent).toEqual("Test");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableCellElement>();
        render(
            <table>
                <thead>
                <tr>
                    <HeadColumn ref={ref}/>
                </tr>
                </thead>
            </table>
        );
        expect(ref.current).toBeTruthy();
    });
});