import React, {useState} from "react";
import type {Meta} from "@storybook/react";
import "@src/i18n";
import {DropdownMenu} from "@src/index";
import {
    ActionTable,
    ActionTableFrontendPaginated,
    ActionTableFrontendPaginatedProps,
    ActionTableProps,
    ActionTableRoot, SegmentedActionTable, useActionTableControl
} from "@src/index";

const meta: Meta<ActionTableProps & {isLoading: boolean}> = {
    title: "CES Theme/Table/ActionTable",
    argTypes: {
        isLoading: {
            defaultValue: true,
            description: "Puts the table into a loading state.",
            type: "boolean",
        },
        availableRowsDescription: {
            defaultValue: undefined,
            description: "Describes the rows of the table. Leave this empty to have an auto generated description.",
            type: "string",
        },
        lineCountText: {
            defaultValue: undefined,
            description: "Label for the input where you can choose lines per page.",
            type: "string",
        },
        backButtonAriaLabel: {
            defaultValue: undefined,
            description: "Aria label for the page back button.",
            type: "string",
        },
        forwardButtonAriaLabel: {
            defaultValue: undefined,
            description: "Aria label for the page forward button.",
            type: "string",
        },
    },
    args: {
        isLoading: false,
    },
};

type user = {
    name: string,
    num: number,
    mail: string
};

const users = [...[...Array(70)]]
    .map((_, i) => (i + 1))
    .map((i) => ({
        name: `user${i}`,
        num: [12.54, 11111.23, 1231.123123, 1231.1231233123, 1231.1, 12357][i % 6],
        mail: `user-${i}@test.de`,
    })) as user[];

const Template = (args: ActionTableFrontendPaginatedProps<any>  & {isLoading: boolean}) => (
    <ActionTableRoot paginationControl={{
        defaultLinesPerPage: 15,
        lineCountOptions: [
            15,
            30,
            60,
            {value: -1, text: "Alle"},
        ],
        allLineCount: users?.length,
    }}>
        <ActionTableFrontendPaginated<user>
            {...args}
            values={users}
        >
            {
                (elements) => (
                    <>
                        <ActionTableFrontendPaginated.HeadWithOneRow>
                            <ActionTableFrontendPaginated.HeadWithOneRow.Column>Username</ActionTableFrontendPaginated.HeadWithOneRow.Column>
                            <ActionTableFrontendPaginated.HeadWithOneRow.Column variant={"numeric"}>Magic
                                Number</ActionTableFrontendPaginated.HeadWithOneRow.Column>
                            <ActionTableFrontendPaginated.HeadWithOneRow.Column>Email</ActionTableFrontendPaginated.HeadWithOneRow.Column>
                            <ActionTableFrontendPaginated.HeadWithOneRow.Column
                                className={"w-[70px]"}
                                align={"center"}>Aktionen</ActionTableFrontendPaginated.HeadWithOneRow.Column>
                        </ActionTableFrontendPaginated.HeadWithOneRow>
                        {args.isLoading && <>
                            <ActionTableFrontendPaginated.SkeletonBody
                                rows={15}
                                columns={[3, <DropdownMenu disabled={true}/>]}/>
                        </>}
                        {!args.isLoading && <>
                            <ActionTableFrontendPaginated.Body>
                                {elements.map((e, i) => (
                                    <ActionTableFrontendPaginated.Body.Row key={i}>
                                        <ActionTableFrontendPaginated.Body.Row.Column>{e.name}</ActionTableFrontendPaginated.Body.Row.Column>
                                        <ActionTableFrontendPaginated.Body.Row.Column
                                            variant={"numeric"}
                                            decimalPlaces={3}>
                                            {e.num}
                                        </ActionTableFrontendPaginated.Body.Row.Column>
                                        <ActionTableFrontendPaginated.Body.Row.Column>{e.mail}</ActionTableFrontendPaginated.Body.Row.Column>
                                        <ActionTableFrontendPaginated.Body.Row.Column align={"center"}>
                                            <DropdownMenu>
                                                <DropdownMenu.ButtonItem>Löschen</DropdownMenu.ButtonItem>
                                                <DropdownMenu.ButtonItem>Auch löschen</DropdownMenu.ButtonItem>
                                                <DropdownMenu.ButtonItem>Bitte nicht
                                                    löschen</DropdownMenu.ButtonItem>
                                            </DropdownMenu>
                                        </ActionTableFrontendPaginated.Body.Row.Column>
                                    </ActionTableFrontendPaginated.Body.Row>
                                ))}
                            </ActionTableFrontendPaginated.Body>
                        </>
                        }
                    </>
                )
            }
        </ActionTableFrontendPaginated>
    </ActionTableRoot>
);

export const FrontendPaginatedTable = () => (
    <ActionTableRoot
        paginationControl={{
            defaultLinesPerPage: 15,
            lineCountOptions: [
                15,
                30,
                60,
                {value: -1, text: "Alle"},
            ],
            allLineCount: 70,
        }}
        isLoading={false}
    >
        <ActionTableFrontendPaginated<{
            a: string;
            b: number
        }>
            values={
                [...[...Array(70)]]
                    .map((_, i) => ({a: `Value ${i + 1}`, b: i + 1}))
            }
        >
            {
                (elements) => <>
                    <ActionTableFrontendPaginated.HeadWithOneRow>
                        <ActionTableFrontendPaginated.HeadWithOneRow.Column>Random
                            value</ActionTableFrontendPaginated.HeadWithOneRow.Column>
                        <ActionTableFrontendPaginated.HeadWithOneRow.Column
                            variant={"numeric"}>Magic Number
                        </ActionTableFrontendPaginated.HeadWithOneRow.Column>
                    </ActionTableFrontendPaginated.HeadWithOneRow>

                    <ActionTableFrontendPaginated.Body>
                        {elements.map((e, i) => (
                            <ActionTableFrontendPaginated.Body.Row key={i}>
                                <ActionTableFrontendPaginated.Body.Row.Column>{e.a}</ActionTableFrontendPaginated.Body.Row.Column>
                                <ActionTableFrontendPaginated.Body.Row.Column
                                    variant={"numeric"}
                                    decimalPlaces={3}>
                                    {e.b}
                                </ActionTableFrontendPaginated.Body.Row.Column>
                            </ActionTableFrontendPaginated.Body.Row>
                        ))}
                    </ActionTableFrontendPaginated.Body>
                </>
            }
        </ActionTableFrontendPaginated>
    </ActionTableRoot>
);

export const BackendPaginatedTable = () => {
    const SomeBackendService = {
        get: async (start: number, end: number) => {
            const entries = 120;

            return new Promise<{
                values: {
                    a: string,
                    b: number
                }[],
                allEntries: number
            }>(resolve => {
                setTimeout(() => {
                        resolve(
                            {
                                values: [...[...Array(entries)]]
                                    .map((_, i) => i)
                                    .filter(i => (i >= start && i <= end))
                                    .map((i) => ({a: `Backend Value ${start}-${end}`, b: i})),
                                allEntries: entries,
                            }
                        );
                    },
                    500
                );
            });
        },
    };

    const [isLoading, setIsLoading] = useState(true);
    const [myEntries, setMyEntries] = useState<{
        values: {
            a: string,
            b: number
        }[],
        allEntries: number
    }>({allEntries: 0, values: []});

    const paginationControl = useActionTableControl({
        paginationControl: {
            defaultStartPage: 1,
            defaultLinesPerPage: 15,
            lineCountOptions: [
                15,
                30,
                60,
                {value: -1, text: "Alle"},
            ],
            allLineCount: myEntries.allEntries,
            loadDataFunction: async ({currentStart, currentEnd}) => {
                try {
                    setIsLoading(true);
                    const result = await SomeBackendService.get(currentStart, currentEnd);
                    setMyEntries(result);
                } finally {
                    setIsLoading(false);
                }
            },
        },
        isLoading: isLoading,
    })

    return (
        <ActionTableRoot {...paginationControl}>
            <ActionTable>
                <ActionTable.HeadWithOneRow>
                    <ActionTable.HeadWithOneRow.Column>Random
                        value</ActionTable.HeadWithOneRow.Column>
                    <ActionTable.HeadWithOneRow.Column
                        variant={"numeric"}>Magic Number
                    </ActionTable.HeadWithOneRow.Column>
                </ActionTable.HeadWithOneRow>

                {!isLoading &&
                    <ActionTable.Body>
                        {
                            myEntries.values.map(
                                (e, i) => (
                                    <ActionTable.Body.Row key={i}>
                                        <ActionTable.Body.Row.Column>
                                            {e.a}
                                        </ActionTable.Body.Row.Column>
                                        <ActionTable.Body.Row.Column
                                            variant={"numeric"}
                                            floatingPointSymbol={","}
                                            decimalPlaces={1}>
                                            {e.b}
                                        </ActionTable.Body.Row.Column>
                                    </ActionTable.Body.Row>
                                )
                            )
                        }
                    </ActionTable.Body>
                }

                {isLoading &&
                    <ActionTable.SkeletonBody columns={2} rows={15}/>
                }
            </ActionTable>
        </ActionTableRoot>
    );
};

export const BackendPaginatedTableLongVersion = () => {
    const SomeBackendService = {
        get: async (start: number, end: number) => {
            const entries = 240;

            return new Promise<{
                values: {
                    a: string,
                    b: number
                }[],
                allEntries: number
            }>(resolve => {
                setTimeout(() => {
                        resolve(
                            {
                                values: [...[...Array(entries)]]
                                    .map((_, i) => i)
                                    .filter(i => (i >= start && i <= end))
                                    .map((i) => ({a: `Backend Value ${start}-${end}`, b: i})),
                                allEntries: entries,
                            }
                        );
                    },
                    500
                );
            });
        },
    };

    const [isLoading, setIsLoading] = useState(true);
    const [myEntries, setMyEntries] = useState<{
        values: {
            a: string,
            b: number
        }[],
        allEntries: number
    }>({allEntries: 0, values: []});
    const actionTableControl = useActionTableControl(
        {
            paginationControl: {
                defaultStartPage: 1,
                defaultLinesPerPage: 15,
                lineCountOptions: [
                    15,
                    30,
                    60,
                    {value: -1, text: "Alle"},
                ],
                allLineCount: myEntries.allEntries,
                loadDataFunction: async ({currentStart, currentEnd}) => {
                    try {
                        setIsLoading(true);
                        const result = await SomeBackendService.get(currentStart, currentEnd);
                        setMyEntries(result);
                    } finally {
                        setIsLoading(false);
                    }
                },
            }
        }
    );

    return (
        <ActionTableRoot {...actionTableControl}>
            <SegmentedActionTable>
                <SegmentedActionTable.Table>
                    <SegmentedActionTable.Table.Head>
                        <SegmentedActionTable.Table.Head.Row>
                            <SegmentedActionTable.Table.Head.Row.Column>Random
                                value</SegmentedActionTable.Table.Head.Row.Column>
                            <SegmentedActionTable.Table.Head.Row.Column align={"right"}>Magic Number
                            </SegmentedActionTable.Table.Head.Row.Column>
                        </SegmentedActionTable.Table.Head.Row>
                    </SegmentedActionTable.Table.Head>
                    {!isLoading &&
                        <SegmentedActionTable.Table.Body>
                            {
                                myEntries.values.map(
                                    (e, i) => (
                                        <SegmentedActionTable.Table.Body.Row key={i}>
                                            <SegmentedActionTable.Table.Body.Row.Column>
                                                {e.a}
                                            </SegmentedActionTable.Table.Body.Row.Column>
                                            <SegmentedActionTable.Table.Body.Row.Column
                                                variant={"numeric"}
                                                floatingPointSymbol={","}
                                                decimalPlaces={1}>
                                                {e.b}
                                            </SegmentedActionTable.Table.Body.Row.Column>
                                        </SegmentedActionTable.Table.Body.Row>
                                    )
                                )
                            }
                        </SegmentedActionTable.Table.Body>
                    }

                    {isLoading &&
                        <ActionTable.SkeletonBody columns={2} rows={15}/>
                    }
                </SegmentedActionTable.Table>
                <SegmentedActionTable.SegmentedPagination>
                    <SegmentedActionTable.SegmentedPagination.SelectionArea>
                        <SegmentedActionTable.SegmentedPagination.SelectionArea.Text>Rows</SegmentedActionTable.SegmentedPagination.SelectionArea.Text>
                        <SegmentedActionTable.SegmentedPagination.SelectionArea.Select>
                            <SegmentedActionTable.SegmentedPagination.SelectionArea.Select.Item value={15}/>
                            <SegmentedActionTable.SegmentedPagination.SelectionArea.Select.Item value={30}/>
                            <SegmentedActionTable.SegmentedPagination.SelectionArea.Select.Item value={60}/>
                            <SegmentedActionTable.SegmentedPagination.SelectionArea.Select.Item value={-1}>
                                Alle
                            </SegmentedActionTable.SegmentedPagination.SelectionArea.Select.Item>
                        </SegmentedActionTable.SegmentedPagination.SelectionArea.Select>
                    </SegmentedActionTable.SegmentedPagination.SelectionArea>
                    <SegmentedActionTable.SegmentedPagination.NavigationArea>
                        <SegmentedActionTable.SegmentedPagination.NavigationArea.RowsDescriptionArea>
                            {isLoading &&
                                <SegmentedActionTable.SegmentedPagination.NavigationArea.RowsDescriptionArea.Skeleton
                                    className={"w-40"}/>}
                            {!isLoading && <>
                                Row {actionTableControl.paginationControl.currentStart}-{actionTableControl.paginationControl.currentEnd} of {actionTableControl.paginationControl.allLineCount},
                                Page {actionTableControl.paginationControl.page}
                            </>}
                        </SegmentedActionTable.SegmentedPagination.NavigationArea.RowsDescriptionArea>
                        <SegmentedActionTable.SegmentedPagination.NavigationArea.Back
                            disabled={actionTableControl.paginationControl.page <= 1 || isLoading}
                            onClick={() => actionTableControl.paginationControl.setPage(actionTableControl.paginationControl.page - 1)}
                        >
                            Back
                        </SegmentedActionTable.SegmentedPagination.NavigationArea.Back>
                        <SegmentedActionTable.SegmentedPagination.NavigationArea.Forward
                            disabled={actionTableControl.paginationControl.page >= actionTableControl.paginationControl.maxPage || isLoading}
                            onClick={() => actionTableControl.paginationControl.setPage(actionTableControl.paginationControl.page + 1)}
                        >Forward</SegmentedActionTable.SegmentedPagination.NavigationArea.Forward>
                    </SegmentedActionTable.SegmentedPagination.NavigationArea>
                </SegmentedActionTable.SegmentedPagination>
            </SegmentedActionTable>
        </ActionTableRoot>
    );
};

export const Playground = Template.bind({});

export default meta;

