import {render} from "@testing-library/react";
import React from "react";
import Skeleton, {TableSkeletonPropsColumns} from "./Skeleton";

describe('<Skeleton />', () => {
    const skeletonString = "<div class=\"animate-pulse motion-reduce:animate-none bg-neutral-weak rounded h-6\"></div>";
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <table>
                <Skeleton data-testid={"element"} className={"bg-red myrandomclass"} columns={1} rows={1}/>
            </table>
        );
        const element = await findByTestId("element") as HTMLTableSectionElement;
        expect(element.nodeName).toEqual("TBODY");
        expect(element.className).toContain("bg-red myrandomclass");
    });

    test.each([
        [1, 9],
        [2, 8],
        [3, 7],
        [4, 6],
        [5, 5],
        [6, 4],
        [7, 3],
        [8, 2],
        [9, 1],
    ])('should render %p columns and %p rows', async (columns: number, rows: number) => {
        const {findByTestId} = render(
            <table>
                <Skeleton data-testid={"element"} className={"bg-red myrandomclass"} columns={columns} rows={rows}/>
            </table>
        );

        const element = await findByTestId("element") as HTMLTableSectionElement;
        expect(element.children.length).toEqual(rows);
        for (let row = 0; row < rows; row++) {
            const currentRow = await findByTestId(`element-tr-${row}`);
            expect(currentRow).toBeTruthy();
            expect(currentRow.children.length).toEqual(columns);
            for (let column = 0; column < columns; column++) {
                const currentCol = await findByTestId(`element-td-${row}-${column}`);
                expect(currentCol).toBeTruthy();
                expect(currentCol.innerHTML).toEqual(skeletonString);
            }
        }
    });

    test.each([
        [[3], 3, [skeletonString, skeletonString, skeletonString]],
        [[2, "textcontent"], 3, [skeletonString, skeletonString, "textcontent"]],
        [[3, <div>Textcontent</div>, "test", 1], 6, [skeletonString, skeletonString, skeletonString, "<div>Textcontent</div>", "test", skeletonString]],
    ])('can create mixed skeleton', async (input: TableSkeletonPropsColumns, expectedColumns: number, expectedContent: string[]) => {
        const {findByTestId} = render(
            <table>
                <Skeleton data-testid={"element"} className={"bg-red myrandomclass"} columns={input} rows={1}/>
            </table>
        );

        const currentRow = await findByTestId(`element-tr-0`);
        expect(currentRow).toBeTruthy();
        expect(currentRow.children.length).toEqual(expectedColumns);

        for (let i = 0; i < expectedContent.length; i++) {
            const expected = expectedContent[i];
            const currentCol = await findByTestId(`element-td-0-${i}`);
            expect(currentCol.innerHTML).toEqual(expected);
        }
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableSectionElement>();
        render(
            <table>
                <Skeleton ref={ref} columns={1} rows={1}/>
            </table>
        );
        expect(ref.current).toBeTruthy();
    });
});