import {useCallback} from "react";
import {calculatePageData} from "../functions";
import type { OnPaginationChangeFunc } from "./usePaginationControl.types";

/**
 * Creates a setPage function for the pagination component.
 * Adds an event call to the function if onPaginationChange is called.
 * The onPaginationChange contains all information (maxPage, currentStart, currentEnd) about the next page.
 * @param linesPerPage
 * @param allLineCount
 * @param setPage
 * @param onPaginationChange
 */
export default function useCreateSetPageWithEvent(linesPerPage: number, allLineCount: number, setPage: (_: number) => void, onPaginationChange: OnPaginationChangeFunc | undefined) {
    return useCallback((newPage: number) => {
        setPage(newPage);

        if (onPaginationChange !== undefined) {
            const {
                maxPage,
                currentStart,
                currentEnd
            } = calculatePageData(newPage, linesPerPage, allLineCount);

            return onPaginationChange({
                page: newPage,
                maxPage: maxPage,
                allLineCount: allLineCount,
                currentEnd: currentEnd,
                currentStart: currentStart,
                linesPerPage: linesPerPage,
            });
        }
    }, [linesPerPage, allLineCount, onPaginationChange, setPage]);
}
