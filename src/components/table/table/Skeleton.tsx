import SkeletonBar from "@components/SkeletonBar";
import {subTestid} from "@src/types/Testid";
import React, {forwardRef, useMemo} from "react";

import Body from "./Body";
import BodyColumn from "./BodyColumn";
import BodyRow from "./BodyRow";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef, ReactNode} from "react";

export type TableSkeletonPropsColumns = number | (number | ReactNode)[];

export type TableSkeletonProps = ComponentPropsWithoutRef<"tbody"> & Testid & {
    /**
     * This defines the number of rows inside the table skeleton.
     */
    rows: number;
    /**
     * This defines the number of columns and/or the value of the columns of the skeleton
     *
     * You can just pass a number x, then the skeleton will render x columns.
     * You can pass a number array e.g. [x], then the skeleton will also render x columns.
     * You can pass an array with ReactNodes and/or numbers e.g. [x, <div></div>, y], then the skeleton will render:
     *  - x columns
     *  - <div></div>
     *  - y columns
     */
    columns: TableSkeletonPropsColumns;
};

const Skeleton = forwardRef<HTMLTableSectionElement, TableSkeletonProps>(({rows, columns, ...props}, ref) => {
    const actualRows = useMemo(() => (rows >= 0) ? rows : 15, [rows]);
    const actualColumns = useMemo<ReactNode[]>(() => {
        const c = (typeof columns === "number") ? [columns] : columns;
        return c.flatMap((v, i) => {
            if (typeof v === "number") {
                return [...Array(v).keys()].map(() => (<SkeletonBar key={i}/>));
            }
            
            return v;
        });
    }, [columns]);

    return (
        <Body
            {...props}
            ref={ref}
        >
            {[...Array(actualRows).keys()].map((i) => (
                <BodyRow key={i} data-testid={subTestid(props, `tr-${i}`)}>
                    {actualColumns.map((c, j) => (
                        <BodyColumn key={j} data-testid={subTestid(props, `td-${i}-${j}`)}>
                            {c}
                        </BodyColumn>
                    ))}
                </BodyRow>
            ))}
        </Body>
    );
});

Skeleton.displayName = "Skeleton";
export default Skeleton;