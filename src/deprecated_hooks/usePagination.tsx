import {useState} from "react";

export const DEFAULT_PAGE_SIZE = 20;

export type PaginationData = {
    current: number;
    pageCount: number;
}

export type PagedModel = {
    pagination: PaginationData;
}

export const defaultPaginationData: PaginationData = {current: 1, pageCount: 1};

export const calcPageStart = (currentPage: number, pageSize: number): number => {
    return currentPage === 1 ? 0 : pageSize * (currentPage - 1);
};

export const calcPageCount = (limit: number, all: number): number => Math.max(Math.ceil(all / limit), 1);

export const createPaginationData = (start: number, limit: number, all: number): PaginationData => {
    const pages = Math.max(Math.ceil(all / limit), 1);
    const currentPage = Math.floor(start / limit) + 1;
    return {current: currentPage, pageCount: pages};
};

export function usePagination(entryCount: number, pageSize?: number) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageStart = calcPageStart(currentPage, pageSize ?? DEFAULT_PAGE_SIZE);

    const pgData = createPaginationData(pageStart, pageSize ?? DEFAULT_PAGE_SIZE, entryCount);

    return {pageStart, setCurrentPage, pgData};
}