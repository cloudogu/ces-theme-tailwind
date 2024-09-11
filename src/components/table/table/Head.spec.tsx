import {render} from "@testing-library/react";
import React from "react";
import Head from './Head';

describe('<Head />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <table>
                <Head data-testid={"element"} className={"text-red myrandomclass"}>
                    <tr>
                        <th>
                            Test
                        </th>
                    </tr>
                </Head>
            </table>
        );
        const element = await findByTestId("element") as HTMLTableSectionElement;
        expect(element.nodeName).toEqual("THEAD");
        expect(element.textContent).toEqual("Test");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(Head.Row).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableSectionElement>();
        render(
            <table>
                <Head ref={ref}/>
            </table>
        );
        expect(ref.current).toBeTruthy();
    });
});
