import type {PaginationControl} from "@components/pagination/hooks/usePaginationControl.types";

export type ActionTableState = {
    allLineCount: number,
    maxPage: number,
    currentStart: number,
    currentEnd: number,
    page: number,
    linesPerPage: number,
};

export type ActionTableControl = {
    paginationControl: PaginationControl,
    isLoading?: boolean;
};