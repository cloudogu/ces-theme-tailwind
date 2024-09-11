import {render} from "@testing-library/react";
import React from "react";
import SegmentedActionTable from './SegmentedActionTable';
import ActionTableRoot from "./ActionTableRoot";

describe('<SegmentedActionTable />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <ActionTableRoot>
                <SegmentedActionTable data-testid={"element"} className={"text-red myrandomclass"}>
                    Test
                </SegmentedActionTable>
            </ActionTableRoot>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedActionTable.Table).toBeTruthy();
        expect(SegmentedActionTable.Pagination).toBeTruthy();
        expect(SegmentedActionTable.SegmentedPagination).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <ActionTableRoot>
                <SegmentedActionTable ref={ref}/>
            </ActionTableRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});
