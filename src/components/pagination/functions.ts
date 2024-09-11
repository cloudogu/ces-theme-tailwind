import {calculateEndEntry, calculateStartEntry, getPageCount} from "@components/pagination/Pagination.functions";

export function calculatePageData(page: number, linesPerPage: number, allLineCount: number) {
    const maxPage = getPageCount(linesPerPage, allLineCount);
    const currentStart = calculateStartEntry(page, linesPerPage, allLineCount) ?? 0;
    const currentEnd = calculateEndEntry(page, linesPerPage, allLineCount) ?? 0;

    return {
        maxPage,
        currentStart,
        currentEnd,
    };
}