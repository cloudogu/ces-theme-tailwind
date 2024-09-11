import {calculateEndEntry, calculateStartEntry, getPageCount, normalizePage} from "./Pagination.functions";

describe('Pagination functions', () => {
    describe('calculateStartEntry', () => {
        test.each([
            [1, 20, 100, 1],
            [1, 50, 100, 1],
            [1, 75, 100, 1],
            [1, 100, 100, 1],
            [1, 101, 100, 1],
            [1, 0, 100, undefined],
            [1, -1, 100, 1],
            [2, 20, 100, 21],
            [2, 50, 100, 51],
            [2, 75, 100, 76],
            [2, 100, 100, undefined],
            [2, 101, 100, undefined],
            [2, 0, 100, undefined],
            [2, -1, 100, undefined],
            [1, 1, 0, undefined],
            [2, 1, 0, undefined],
            [2, -1, 0, undefined],
            [0, 1, 1, undefined],
        ])('page=%p, entriesPerPage=%p, allEntries=%p (expected=%p)',
            async (page, entriesPerPage, allEntries, expected) => {
                expect(calculateStartEntry(page, entriesPerPage, allEntries)).toEqual(expected);
            });
    });

    describe('calculateEndEntry', () => {
        test.each([
            [1, 20, 100, 20],
            [1, 50, 100, 50],
            [1, 75, 100, 75],
            [1, 100, 100, 100],
            [1, 101, 100, 100],
            [1, 0, 100, undefined],
            [1, -1, 100, 100],
            [2, 20, 100, 40],
            [2, 50, 100, 100],
            [2, 75, 100, 100],
            [2, 100, 100, undefined],
            [2, 101, 100, undefined],
            [2, 0, 100, undefined],
            [2, -1, 100, undefined],
            [1, 1, 0, undefined],
            [2, 1, 0, undefined],
            [2, -1, 0, undefined],
            [0, 1, 1, undefined],
            [1, -1, 33, 33],
            [1, -1, 45, 45],
            [1, -1, 55, 55],
            [2, -1, 33, undefined],
            [3, -1, 45, undefined],
            [4, -1, 55, undefined],
        ])('page=%p, entriesPerPage=%p, allEntries=%p (expected=%p)',
            async (page, entriesPerPage, allEntries, expected) => {
                expect(calculateEndEntry(page, entriesPerPage, allEntries)).toEqual(expected);
            });
    });

    describe('getPageCount', () => {
        test.each([
            [1, 20, 20],
            [1, 21, 21],
            [2, 21, 11],
            [33, 100, 4],
            [66, 100, 2],
            [100, 100, 1],
            [101, 100, 1],
            [200, 100, 1],
            [1, 0, 1],
            [2, 0, 1],
            [-1, 0, 1],
            [-1, 100, 1],
            [-1, 200, 1],
            [-1, 300, 1],
            [0, -1, 1],
            [0, 0, 1],
            [0, 100, 1],
        ])('entriesPerPage=%p, allEntries=%p (expected=%p)',
            async (entriesPerPage, allEntries, expected) => {
                expect(getPageCount(entriesPerPage, allEntries)).toEqual(expected);
            });
    });

    describe('normalizePage', () => {
        test.each([
            [-1, 10, 1],
            [0, 10, 1],
            [1, 10, 1],
            [5, 10, 5],
            [8, 6, 6],
            [8, 5, 5],
            [8, 4, 4],
            [8000, 2, 2],
        ])('entriesPerPage=%p, allEntries=%p (expected=%p)',
            async (page, maxPage, expected) => {
                expect(normalizePage(page, maxPage)).toEqual(expected);
            });
    });
});