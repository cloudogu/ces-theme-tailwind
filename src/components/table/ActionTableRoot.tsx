import {PaginationRoot} from "../pagination";
import { ActionTableContext } from "./Context";
import type {PaginationControl, PaginationControlInput} from "@components/pagination/hooks/usePaginationControl.types";
import type {ReactNode} from "react";

export type ActionTableRootProps = {
    paginationControl?: PaginationControl | PaginationControlInput;
    children?: ReactNode;
    isLoading?: boolean;
};

export default function ActionTableRoot({paginationControl = {}, children, isLoading = false}: ActionTableRootProps) {
    return (
        <ActionTableContext.Provider value={{isLoading: isLoading}}>
            <PaginationRoot config={paginationControl}>
                {children}
            </PaginationRoot>
        </ActionTableContext.Provider>
    );
}