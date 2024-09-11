import type {ReactNode} from "react";

/**
 * An option for the linesPerPage-Select inside the pagination.
 * This is used whenever the list items are auto generated.
 */
export type PaginationLinesPerPageOption = { value: number; text: ReactNode; } | number;

/**
 * The state of the pagination containing all information about the current page.
 */
export type PaginationState = {
    allLineCount: number,
    maxPage: number,
    currentStart: number,
    currentEnd: number,
    page: number,
    linesPerPage: number,
};

/**
 * Type of the event that is thrown whenever the page / linesPerPage is changed.
 */
export type OnPaginationChangeFunc = (_: PaginationState) => Promise<void>;

/**
 * Possible configurations for the usePaginationControl hook.
 * Use this to configure default-values for the pagination.
 */
export type PaginationControlInput = {
    defaultLinesPerPage?: number;
    defaultStartPage?: number;
    allLineCount?: number;
    lineCountOptions?: PaginationLinesPerPageOption[];
    loadDataFunction?: OnPaginationChangeFunc;
};

/**
 * Output of the usePaginationControl hook.
 * Contains the whole state that is necessary to handle the pagination.
 */
export type PaginationControl = {
    page: number;
    setPage: (_: number) => void;
    linesPerPage: number;
    setLinesPerPage: (_: number) => void;
    currentStart: number;
    currentEnd: number;
    maxPage: number;
    allLineCount: number;
    lineCountOptions: PaginationLinesPerPageOption[];
    defaultLinesPerPage: number;
    defaultStartPage: number;
};

