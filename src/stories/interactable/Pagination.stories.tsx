import React from "react";
import {Meta} from "@storybook/react";
import {PaginationRoot, usePaginationControl} from "@src/index";
import {Pagination} from "@src/index";

type Input = {
    allLineCount: number;
    defaultLinesPerPage: number;
};

const meta: Meta<Input> = {
    title: "CES Theme/Interactable/Pagination",
    argTypes: {
        allLineCount: {
            defaultValue: 100,
            description: "How many lines exist at all",
            type: "number",
        },
        defaultLinesPerPage: {
            defaultValue: 15,
            description: "The default value for lines per page",
            type: "number",
        },
    },
};

const Template = (args: Input) => {
    const control = usePaginationControl({
        defaultLinesPerPage: args.defaultLinesPerPage,
        allLineCount: args.allLineCount,
        lineCountOptions: [15, 30, 60, {value: -1, text: "Alle"}],
    });

    return (
        <PaginationRoot
            config={
                {
                    ...control,
                    allLineCount: args.allLineCount,
                    defaultLinesPerPage: args.defaultLinesPerPage
                }
            }
        >
            <Pagination/>
        </PaginationRoot>
    );
};

export const Uncontrolled = () =>
    <PaginationRoot
        config={
            {
                defaultLinesPerPage: 15,
                allLineCount: 100,
                lineCountOptions: [15, 30, 60, {value: -1, text: "Alle"}],
            }
        }
    >
        <Pagination/>
    </PaginationRoot>

export const Controlled = () => {
    const control = usePaginationControl({
        defaultLinesPerPage: 15,
        allLineCount: 100,
        lineCountOptions: [15, 30, 60, {value: -1, text: "Alle"}],
    });

    return (
        <PaginationRoot
            config={control}
        >
            Page: {control.page}<br/>
            Max-Page: {control.maxPage}<br/>
            Lines per Page: {control.linesPerPage}<br/>
            <Pagination/>
        </PaginationRoot>
    );
}

export const Playground = Template.bind({}) as any;

Playground.args = {
    allLineCount: 100,
    defaultLinesPerPage: 15,
} as Input;

export default meta;
