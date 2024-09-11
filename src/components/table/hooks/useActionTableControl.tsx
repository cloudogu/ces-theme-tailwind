import usePaginationControl from "@components/pagination/hooks/usePaginationControl";
import type {PaginationControl, PaginationControlInput} from "../../pagination";

export type ActionTableControl = { paginationControl: PaginationControl, isLoading: boolean };

export type ActionTableControlInput = {
    paginationControl?: PaginationControlInput;
    isLoading?: boolean;
};

/**
 * Creates the whole state for the action table.
 * @param isLoading Defines whether the table is loading
 * @param paginationConfig Define the configuration for the pagination inside the actionTable
 */
export default function useActionTableControl(
    {
        isLoading = false,
        paginationControl = {}
    }: ActionTableControlInput): ActionTableControl {
    return ({
        paginationControl: usePaginationControl(paginationControl),
        isLoading: isLoading,
    });
}