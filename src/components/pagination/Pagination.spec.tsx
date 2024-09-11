import '@src/i18n';
import {act, render} from '@testing-library/react';
import PaginationRoot from "@components/pagination/PaginationRoot";
import Pagination from './Pagination';
import {userEvent} from "@storybook/testing-library";
import {createRef} from 'react';
import usePaginationControl from './hooks/usePaginationControl';
import {PaginationControlInput} from "@components/pagination/hooks/usePaginationControl.types";
import i18n from "@src/i18n";

i18n.init({
    lng: "de",
});

describe('<Pagination>', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <PaginationRoot
                config={{
                    lineCountOptions: [
                        10,
                        20,
                        30,
                    ],
                    defaultLinesPerPage: 10,
                    allLineCount: 100,
                }}
            >
                <Pagination
                    data-testid={"element"}
                    className={"flex-col myrandomclass"}
                />);
            </PaginationRoot>
        );
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.className).toEqual("flex desktop:flex-row mobile:flex-col gap-default-3x p-default justify-end mt-auto mobile:sticky mobile:bottom-0 mobile:left-0 flex-col myrandomclass");
    });

    test.each([
        [15, 122, 2, "Zeile 16-30 von 122"],
        [10, 122, 1, "Zeile 1-10 von 122"],
        [96, 122, 1, "Zeile 1-96 von 122"],
        [120, 122, 1, "Zeile 1-120 von 122"],
        [150, 122, 1, "Zeile 1-122 von 122"],
        [150, 122, 2, "Zeile 1-122 von 122"],
        [-1, 122, 2, "Zeile 1-122 von 122"],
    ])('calculates rows descriptor (linesPerPage=%p, allLineCount=%p, startPage=%p, expected=%p)',
        async (linesPerPage, allLineCount, startPage, expected) => {
            const Comp = () => {
                const tableState = usePaginationControl({
                    lineCountOptions: [15, 20, 30],
                    defaultLinesPerPage: linesPerPage,
                    allLineCount: allLineCount,
                    defaultStartPage: startPage,
                })
                return (
                    <PaginationRoot
                        config={tableState}>
                        <Pagination
                            data-testid={"element"}
                        />
                    </PaginationRoot>
                );
            };
            const {findByTestId} = render(
                <Comp/>
            );
            const element = await findByTestId("element-rows") as HTMLElement;
            expect(element.nodeName).toEqual("SPAN");
            expect(element.innerHTML).toEqual(expected);
        });

    test.each([
        [15, 122, 1, true, false],
        [15, 122, 2, false, false],
        [5, 10, 2, false, true],
        [-1, 10, 2, true, true],
    ])('calculates rows descriptor (linesPerPage=%p, allLineCount=%p, startPage=%p, expectDeactivatedBack=%p, expectDeactivatedForward=%p)',
        async (linesPerPage, allLineCount, startPage, expectDeactivatedBack, expectDeactivatedForward) => {
            const {findByTestId} = render(
                <PaginationRoot
                    config={{
                        defaultLinesPerPage: linesPerPage,
                        allLineCount: allLineCount,
                        defaultStartPage: startPage,
                        lineCountOptions: [linesPerPage],
                    }}>
                    <Pagination
                        data-testid={"element"}
                    />
                </PaginationRoot>);
            const element = await findByTestId("element-nav") as HTMLElement;
            expect(element.nodeName).toEqual("DIV");
            const back = element.firstChild?.nextSibling as HTMLButtonElement;
            const forward = element.lastChild as HTMLButtonElement;
            expect(back).toHaveAttribute("aria-disabled", expectDeactivatedBack ? "true" : "false")
            expect(forward).toHaveAttribute("aria-disabled", expectDeactivatedForward ? "true" : "false")
        });

    describe('select & options', () => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn();
        window.HTMLElement.prototype.hasPointerCapture = jest.fn();
        test.each([
            [[1, 2, 3, 4, 5, {value: -11, text: "All"}], 2, [1, 2, 3, 4, 5, "All"], "2"],
            [[1, 2, 3, 4, 5, {value: -1, text: "All"}], -1, [1, 2, 3, 4, 5, "All"], "All"],
            [[1], 1, [1], "1"],
            [[1], 2, [1], ""],
        ])('calculates lines per page (rows=%o, selected=%p, expected=%o)',
            async (lineCountOptions, defaultLinesPerPage, expected, expectedValue) => {
                const {findByTestId} = render(
                    <PaginationRoot
                        config={{
                            lineCountOptions: lineCountOptions,
                            defaultLinesPerPage: defaultLinesPerPage,
                            allLineCount: 1,
                            defaultStartPage: 1,
                        } as PaginationControlInput}>
                        <Pagination
                            data-testid={"element"}
                        />
                    </PaginationRoot>
                );
                const user = userEvent.setup();
                const trigger = await findByTestId("element-select-trigger") as HTMLButtonElement;
                expect(trigger.nodeName).toEqual("BUTTON");
                expect(trigger.textContent).toEqual(expectedValue);
                await act(async () => {
                    await user.click(trigger);
                });

                const viewport = await findByTestId("element-select-viewport") as HTMLButtonElement;
                expect(viewport.children.length).toEqual(expected.length);

                for (const item of expected) {
                    const element = await findByTestId(`element-select-option-${expected.indexOf(item)}`) as HTMLDivElement;
                    expect(element.nodeName).toEqual("DIV");
                    expect(element.textContent).toEqual(`${item}`);
                }
            });
    });

    describe('skeleton', () => {
        test("should exist", async () => {
            const {findByTestId} = render(
                <PaginationRoot
                    config={{
                        lineCountOptions: [15, 20, 30],
                        defaultLinesPerPage: 1,
                        allLineCount: 1,
                        defaultStartPage: 1,
                    }}>
                    <Pagination
                        isLoading={true}
                        data-testid={"element"}
                    />
                </PaginationRoot>
            );
            const element = await findByTestId("element") as HTMLDivElement;
            expect(element.children.length).toEqual(2);
            expect(element.textContent).not.toContain("1-1");
            const skeleton = await findByTestId("element-skeleton") as HTMLDivElement;
            expect(skeleton).toHaveAttribute("data-testid", "element-skeleton");
        });
        test("should not exist", async () => {
            const {findByTestId} = render(
                <PaginationRoot
                    config={{
                        lineCountOptions: [15, 20, 30],
                        defaultLinesPerPage: 1,
                        allLineCount: 1,
                        defaultStartPage: 1,
                    }}>
                    <Pagination
                        data-testid={"element"}
                    />
                </PaginationRoot>
            );

            const element = await findByTestId("element-rows") as HTMLDivElement;
            expect(element.children.length).toEqual(0);
            expect(element.innerHTML).toContain("1-1");
        });
    });

    test("forward ref works", async () => {
        const ref = createRef<HTMLDivElement>();
        render(
            <PaginationRoot>
                <Pagination ref={ref}/>
            </PaginationRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});