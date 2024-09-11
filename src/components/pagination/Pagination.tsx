import SkeletonBar from "@components/SkeletonBar";
import {subTestid} from "@src/types/Testid";
import {t} from "i18next";
import React, {forwardRef} from "react";
import AvailableRowsDescriptionArea from "./AvailableRowsDescription";
import Back from "./Back";
import { usePaginationContext } from "./Context";
import Forward from "./Forward";
import LineCountSelect from "./LineCountSelect";
import LineCountText from "./LineCountText";
import NavigationArea from "./NavigationArea";
import SegmentedPagination from "./SegmentedPagination";
import SelectionArea from "./SelectionArea";
import type {SegmentedPaginationProps} from "./SegmentedPagination";
import type Testid from "@src/types/Testid";

export type PaginationProps = Omit<SegmentedPaginationProps, "children"> & Testid & {
    lineCountText?: string;
    availableRowsDescription?: string;
    backButtonAriaLabel?: string;
    forwardButtonAriaLabel?: string;
    isLoading?: boolean;
};

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
    ({
        lineCountText,
        availableRowsDescription,
        backButtonAriaLabel,
        forwardButtonAriaLabel,
        isLoading = false,
        ...props
    }, ref) => {
        const context = usePaginationContext();
        const {currentStart, currentEnd, allLineCount, page, setPage, maxPage} = context;

        return (
            <SegmentedPagination {...props} ref={ref}>
                <SelectionArea data-testid={subTestid(props, "selection")}>
                    <LineCountText>{lineCountText ?? t("ces-theme-tailwind-lib-translation.table.pagination.rows")}</LineCountText>
                    <LineCountSelect data-testid={subTestid(props, "select")}/>
                </SelectionArea>
                <NavigationArea data-testid={subTestid(props, "nav")}>
                    <AvailableRowsDescriptionArea data-testid={subTestid(props, "rows")}>
                        {!isLoading && <>{availableRowsDescription ?? `${t("ces-theme-tailwind-lib-translation.table.pagination.row")} ${currentStart}-${currentEnd} ${t("ces-theme-tailwind-lib-translation.table.pagination.of")} ${allLineCount}`}</>}
                        {isLoading && <SkeletonBar className={"w-28"} data-testid={subTestid(props, "skeleton")}/>}
                    </AvailableRowsDescriptionArea>
                    <Back
                        data-testid={subTestid(props, "back")}
                        aria-label={backButtonAriaLabel}
                        disabled={page <= 1 || isLoading}
                        onClick={() => setPage(page - 1)}
                    />
                    <Forward
                        data-testid={subTestid(props, "forward")}
                        aria-label={forwardButtonAriaLabel}
                        disabled={page >= maxPage || isLoading}
                        onClick={() => setPage(page + 1)}
                    />
                </NavigationArea>
            </SegmentedPagination>
        );
    }
);

Pagination.displayName = "Pagination";
export default Pagination;