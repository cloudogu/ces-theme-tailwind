import {render} from "@testing-library/react";
import React from "react";
import ActionTableFrontendPaginated from './ActionTableFrontendPaginated';
import useActionTableControl from "@components/table/hooks/useActionTableControl";
import ActionTableRoot from "./ActionTableRoot";

describe('<ActionTableFrontendPaginated />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <ActionTableRoot>
                <ActionTableFrontendPaginated<number>
                    data-testid={"element"}
                    className={"text-red myrandomclass"}
                    values={[]}
                >
                    {(values) =>
                        <tbody>
                        <tr>
                            <td>Test</td>
                        </tr>
                        </tbody>
                    }
                </ActionTableFrontendPaginated>
            </ActionTableRoot>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.textContent).toContain("Test");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test.each([
        [1, 3, "1,2,3"],
        [3, 3, "7,8,9"],
        [3, 15, "7,8,9,0"],
        [2, 15, "4,5,6,7,8,9,0"],
        [1, 15, "1,2,3,4,5,6,7,8,9,0"],
        [-10, 15, "1,2,3,4,5,6,7,8,9,0"],
    ])('should render page correct (page: %p, linesPerPage: %p, expected: %s)', async (page: number, linesPerPage: number, expected: string) => {
        const Comp = () => {
            const tableData = useActionTableControl({
                paginationControl: {
                    defaultStartPage: page,
                    defaultLinesPerPage: linesPerPage,
                    lineCountOptions: [linesPerPage],
                    allLineCount: 10,
                }
            });
            return (
                <ActionTableRoot{...tableData}>
                    <ActionTableFrontendPaginated<number>
                        data-testid={"element"}
                        values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}>
                        {(values) =>
                            <tbody>
                            <tr>
                                <td>{values.join(",")}</td>
                            </tr>
                            </tbody>
                        }
                    </ActionTableFrontendPaginated>
                </ActionTableRoot>
            );
        };

        const {findByTestId} = render(
            <Comp/>
        );

        const element = await findByTestId("element-table");
        expect(element.textContent).toContain(expected);
    });

    test("should have expected encapsulated components", async () => {
        expect(ActionTableFrontendPaginated.Body).toBeTruthy();
        expect(ActionTableFrontendPaginated.Foot).toBeTruthy();
        expect(ActionTableFrontendPaginated.Head).toBeTruthy();
        expect(ActionTableFrontendPaginated.HeadWithOneRow).toBeTruthy();
        expect(ActionTableFrontendPaginated.SkeletonBody).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <ActionTableRoot>
                <ActionTableFrontendPaginated ref={ref} values={[]}>{() => <></>}</ActionTableFrontendPaginated>
            </ActionTableRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});
