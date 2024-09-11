import {SearchbarAutocomplete} from "@src/deprecated_components/searchbar/autocomplete";
import ActionTableFrontendPaginated from "@components/table/ActionTableFrontendPaginated";
import useActionTableControl from "@components/table/hooks/useActionTableControl";
import {subTestid} from "@src/types/Testid";
import React, {useState} from "react";
import Button from "@components/inputs/Button";
import SearchResult from "../searchbar/autocomplete/SearchResult";
import Table from "@components/table/table/Table";
import type Testid from "../../types/Testid";
import { ActionTableRoot } from "@src/components/table";
import { CesIconTrash } from "@src/components/icons";

export interface ListWithSearchbarProps extends Testid {
    items: string[];
    addItem: (_: string) => void;
    queryItems: (_: string) => Promise<string[]>;
    readonly?: boolean;
    enableRemove?: boolean;
    removeIcon?: JSX.Element;
    removeItem?: (_: string) => void;
    tableTitle: string;
    addLable: string;
    removeLable: string;
    emptyItemsLable: string;
    pageSize?: number;
}

export default function ListWithSearchbar(props: ListWithSearchbarProps) {
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const enableDelete = props.enableRemove ?? true;

    const compareString = (a: string, b: string): number => a.toLowerCase() > b.toLowerCase() ? 1 : -1;
    const tableState = useActionTableControl({
        paginationControl: {
            defaultLinesPerPage: props.pageSize ?? 5,
            allLineCount: props.items?.length,
        }
    });

    return <div data-testid={props["data-testid"]}>
        {!props.readonly &&
            <SearchbarAutocomplete
                data-testid={props["data-testid"] + "-searchbar"}
                searchResults={searchResults.map((x, i) => <SearchResult<string> type={"button"}
                    key={i}
                    value={x}/>)}
                onSelectItem={(selectedItem: string, inputElement) => {
                    props.addItem(selectedItem);
                    inputElement.value = "";
                    inputElement.focus();
                    setSearchResults([]);
                }}
                onTrigger={async (val) => setSearchResults(await props.queryItems(val))}
                onCancelSelection={(inputElement) => {
                    inputElement.value = "";
                    setSearchResults([]);
                }}>
                {props.addLable}
            </SearchbarAutocomplete>
        }

        <ActionTableRoot {...tableState}>
            <ActionTableFrontendPaginated<string>
                values={props.items?.sort(compareString)}
                className={"mt-6"}
                data-testid={subTestid(props, "table")}
            >
                {
                    (values) => (
                        <>
                            <Table.Head>
                                <Table.Head.Row className={"uppercase"}>
                                    <Table.Head.Row.Column>{props.tableTitle}</Table.Head.Row.Column>
                                    {(enableDelete && !props.readonly) && <Table.Head.Row.Column className="w-0"/>}
                                </Table.Head.Row>
                            </Table.Head>
                            <ActionTableFrontendPaginated.Body>
                                {values?.length === 0 && props.emptyItemsLable &&
                                    <ActionTableFrontendPaginated.Body.Row>
                                        <ActionTableFrontendPaginated.Body.Row.Column>
                                            {props.emptyItemsLable}
                                        </ActionTableFrontendPaginated.Body.Row.Column>
                                    </ActionTableFrontendPaginated.Body.Row>}
                                {
                                    values.map((v, i) => (
                                        <ActionTableFrontendPaginated.Body.Row key={i}>
                                            <ActionTableFrontendPaginated.Body.Row.Column>
                                                {v}
                                            </ActionTableFrontendPaginated.Body.Row.Column>
                                            {(enableDelete && !props.readonly) &&
                                                <ActionTableFrontendPaginated.Body.Row.Column align={"right"}>
                                                    <Button
                                                        type={"button"}
                                                        variant={"tertiary"}
                                                        color={"neutral"}
                                                        title={props.removeLable}
                                                        onClick={() => props.removeItem ? props.removeItem(v) : null}>
                                                        {props.removeIcon ? props.removeIcon :
                                                            <CesIconTrash
                                                                className={"hover:text-table-row-primary-icon-hover text-table-row-primary-icon"}
                                                                size={32}
                                                            />
                                                        }
                                                    </Button>
                                                </ActionTableFrontendPaginated.Body.Row.Column>
                                            }
                                        </ActionTableFrontendPaginated.Body.Row>)
                                    )
                                }
                            </ActionTableFrontendPaginated.Body>
                        </>
                    )
                }
            </ActionTableFrontendPaginated>
        </ActionTableRoot>
    </div>;
}