import ActionTable from "@components/table/ActionTable";
import {useActionTableContext} from "@components/table/Context";
import Body from "@components/table/table/Body";
import Foot from "@components/table/table/Foot";
import Head from "@components/table/table/Head";
import HeadWithOneRow from "@components/table/table/HeadWithOneRow";
import Skeleton from "@components/table/table/Skeleton";
import React, {forwardRef} from "react";
import type {ActionTableProps} from "@components/table/ActionTable";
import type {ForwardedRef, ReactNode} from "react";

export type ActionTableFrontendPaginatedProps<T> =
    Omit<ActionTableProps, "children">
    & {
    values: T[];
    children: (_: T[]) => ReactNode | undefined;
    lineCountText?: string;
    availableRowsDescription?: string;
    backButtonAriaLabel?: string;
    forwardButtonAriaLabel?: string;
};

function Component<T>({
    children,
    values,
    ...props
}: ActionTableFrontendPaginatedProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    const {paginationControl} = useActionTableContext();

    return (
        <ActionTable
            {...props}
            ref={ref}
        >
            {children(
                values.filter((_: T, i: number) => {
                    const elementNumber = i + 1;
                    return elementNumber >= paginationControl.currentStart && elementNumber <= paginationControl.currentEnd;
                })
            )}
        </ActionTable>
    );
}

type ComponentType =
    (<T>(_: ActionTableFrontendPaginatedProps<T> & {
        ref?: ForwardedRef<HTMLDivElement>
    }) => ReturnType<typeof Component>)
    & {
    displayName: string;
    Body: typeof Body;
    Foot: typeof Foot;
    Head: typeof Head;
    HeadWithOneRow: typeof HeadWithOneRow;
    SkeletonBody: typeof Skeleton;
};

const ActionTableFrontendPaginated = forwardRef(Component) as any as ComponentType;

ActionTableFrontendPaginated.displayName = "ActionTableFrontendPaginated";
ActionTableFrontendPaginated.Body = Body;
ActionTableFrontendPaginated.Foot = Foot;
ActionTableFrontendPaginated.Head = Head;
ActionTableFrontendPaginated.HeadWithOneRow = HeadWithOneRow;
ActionTableFrontendPaginated.SkeletonBody = Skeleton;

export default ActionTableFrontendPaginated;