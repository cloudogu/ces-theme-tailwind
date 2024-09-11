import {render} from "@testing-library/react";
import React from "react";
import SegmentedPagination from "./SegmentedPagination";

describe('<SegmentedPagination>', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SegmentedPagination
                data-testid={"element"}
                className={"flex-col myrandomclass"}
            />
        );
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.className).toEqual("flex desktop:flex-row mobile:flex-col gap-default-3x p-default justify-end mt-auto mobile:sticky mobile:bottom-0 mobile:left-0 flex-col myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SegmentedPagination.SelectionArea).toBeTruthy();
        expect(SegmentedPagination.NavigationArea).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <SegmentedPagination ref={ref}/>
        );
        expect(ref.current).toBeTruthy();
    });
});
