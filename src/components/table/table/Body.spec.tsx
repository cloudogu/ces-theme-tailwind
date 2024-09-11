import {render} from "@testing-library/react";
import React from "react";
import Body from './Body';

describe('<Body />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <table>
                <Body data-testid={"element"} className={"bg-red myrandomclass"}>
                    <tr>
                        <td>Test</td>
                    </tr>
                </Body>
            </table>
        );
        const element = await findByTestId("element") as HTMLTableSectionElement;
        expect(element.nodeName).toEqual("TBODY");
        expect(element.textContent).toEqual("Test");
        expect(element.className).toContain("bg-red myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(Body.Row).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableSectionElement>();
        render(
            <table>
                <Body ref={ref}/>
            </table>
        );
        expect(ref.current).toBeTruthy();
    });
});
