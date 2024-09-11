import type {PaginationControl, PaginationControlInput} from "@components/pagination/hooks/usePaginationControl.types";

/**
 * The output of the useActionTableControl hook, contains all information about the whole table state.
 */
export type ActionTableControl = {
    paginationConfig: PaginationControl | PaginationControlInput;
}

/**
 * The input of the useActionTableControl hook.
 */
export type ActionTableControlInput = {
    paginationConfig: PaginationControlInput;
    isLoading?: boolean;
}