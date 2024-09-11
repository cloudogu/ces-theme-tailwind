import {render} from "@testing-library/react";
import React from "react";
import Table from './Table';

describe('<Table />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Table data-testid={"element"} className={"bg-red myrandomclass"}>
                <tbody>
                <tr>
                    <td>Test</td>
                </tr>
                </tbody>
            </Table>
        );
        const element = await findByTestId("element") as HTMLTableElement;
        expect(element.nodeName).toEqual("TABLE");
        expect(element.textContent).toEqual("Test");
        expect(element.className).toContain("bg-red myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(Table.Body).toBeTruthy();
        expect(Table.Foot).toBeTruthy();
        expect(Table.Head).toBeTruthy();
        expect(Table.HeadWithOneRow).toBeTruthy();
        expect(Table.SkeletonBody).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableElement>();
        render(
            <Table ref={ref}/>
        );
        expect(ref.current).toBeTruthy();
    });
});
