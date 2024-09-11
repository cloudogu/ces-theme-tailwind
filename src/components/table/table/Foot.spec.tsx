import {render} from "@testing-library/react";
import React from "react";
import Foot from './Foot';

describe('<Foot />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <table>
                <Foot data-testid={"element"} className={"text-red myrandomclass"}>
                    <tr>
                        <td>Test</td>
                    </tr>
                </Foot>
            </table>
        );
        const element = await findByTestId("element") as HTMLTableSectionElement;
        expect(element.nodeName).toEqual("TFOOT");
        expect(element.textContent).toEqual("Test");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(Foot.Row).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableSectionElement>();
        render(
            <table>
                <Foot ref={ref}/>
            </table>
        );
        expect(ref.current).toBeTruthy();
    });
});
