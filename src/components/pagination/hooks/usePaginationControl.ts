import {normalizePage} from "@components/pagination/Pagination.functions";
import {useCallback, useEffect, useMemo, useState} from "react";
import {calculatePageData} from "../functions";
import useCreateSetLinesPerPageWithEvent from "./useCreateSetLinesPerPageWithEvent";
import useCreateSetPageWithEvent from "./useCreateSetPageWithEvent";
import type {PaginationControl, PaginationControlInput} from "@components/pagination/hooks/usePaginationControl.types";

/**
 * This hook is used to handle the whole state for the pagination.
 * You can pass the output of this hook directly to the pagination component.
 * @param options Define default-values here.
 */
export default function usePaginationControl(options: PaginationControlInput): PaginationControl {
    const defaultLinesPerPage = useMemo(() => options.defaultLinesPerPage ?? 1, [options.defaultLinesPerPage]);
    const [linesPerPage, setLinesPerPage] = useState(defaultLinesPerPage);
    const [page, setPage] = useState(options.defaultStartPage ?? 1);
    const defaultStartPage = options.defaultStartPage ?? page;
    const allLineCount = useMemo(() => options.allLineCount ?? 0, [options.allLineCount]);
    const {
        maxPage,
        currentStart,
        currentEnd
    } = useMemo(() => calculatePageData(page, linesPerPage, allLineCount), [page, linesPerPage, allLineCount]);
    const setPageWithEvent = useCreateSetPageWithEvent(linesPerPage, allLineCount, setPage, options.loadDataFunction);
    const setPageNormalized = useCallback((newValue: number) => setPageWithEvent(normalizePage(newValue, maxPage)),
        [maxPage, setPageWithEvent]
    );
    const setLinesPerPageWithEvent = useCreateSetLinesPerPageWithEvent(page, allLineCount, setLinesPerPage, options.loadDataFunction);
    const lineCountOptions = useMemo(() => options.lineCountOptions ?? [defaultLinesPerPage], [options.lineCountOptions, defaultLinesPerPage]);

    useEffect(() => {
        options?.loadDataFunction?.call(undefined, {
            page: defaultStartPage,
            maxPage: 1,
            allLineCount: options.defaultLinesPerPage ?? allLineCount,
            linesPerPage: options.defaultLinesPerPage ?? allLineCount,
            currentEnd: options.defaultLinesPerPage ?? allLineCount,
            currentStart: 1
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (page > maxPage || page < 1) {
            setPageNormalized(page)?.then();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, linesPerPage, allLineCount]);

    return useMemo(() => ({
        allLineCount,
        page,
        setPage: setPageNormalized,
        linesPerPage,
        setLinesPerPage: setLinesPerPageWithEvent,
        maxPage,
        defaultLinesPerPage,
        defaultStartPage,
        lineCountOptions,
        currentStart,
        currentEnd,
    }), [
        page,
        linesPerPage,
        allLineCount,
        currentEnd,
        currentStart,
        lineCountOptions,
        maxPage,
        setLinesPerPageWithEvent,
        setPageNormalized,
        defaultLinesPerPage,
        defaultStartPage,
    ]
    );
}