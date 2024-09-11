import {calculatePageData} from "@components/pagination/functions";
import {useCallback} from "react";
import type { OnPaginationChangeFunc } from "./usePaginationControl.types";

/**
 * Creates a setLinesPerPage function for the pagination component.
 * Adds an event call to the function if onPaginationChange is called.
 * The onPaginationChange contains all information (maxPage, currentStart, currentEnd) about the next page.
 * @param page
 * @param allLineCount
 * @param setLinesPerPage
 * @param onPaginationChange
 */
export default function useCreateSetLinesPerPageWithEvent(page: number, allLineCount: number, setLinesPerPage: (_: number) => void, onPaginationChange: OnPaginationChangeFunc | undefined) {
    return useCallback((newLinesPerPage: number) => {
        setLinesPerPage(newLinesPerPage);

        if (onPaginationChange !== undefined) {
            const {
                maxPage,
                currentStart,
                currentEnd
            } = calculatePageData(page, newLinesPerPage, allLineCount);

            return onPaginationChange({
                page: page,
                maxPage: maxPage,
                allLineCount: allLineCount,
                currentEnd: currentEnd,
                currentStart: currentStart,
                linesPerPage: newLinesPerPage,
            });
        }
    }, [page, allLineCount, onPaginationChange, setLinesPerPage]);
}