import EmptyLargePageLayout from "@components/layouts/large/EmptyLargePageLayout";
import renderPotentialFunctionChild from "@src/internalFunctions/renderPotentialFunctionChild";
import React, { forwardRef} from "react";
import type {EmptyLargePageLayoutProps} from "@components/layouts/large/EmptyLargePageLayout";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef, ReactNode} from "react";

export type LargePageLayoutProps = ComponentPropsWithoutRef<"main"> & Testid & EmptyLargePageLayoutProps & {
    pageHeadline: ReactNode | (() => ReactNode);
};

type ComponentType = ComponentTypeWithRef<LargePageLayoutProps, HTMLDivElement>;

const LargePageLayout = forwardRef<HTMLDivElement, LargePageLayoutProps>(({pageHeadline, children, ...props}, ref) => (
    <EmptyLargePageLayout
        {...props}
        ref={ref}
    >
        <h1>{renderPotentialFunctionChild(pageHeadline)}</h1>
        {children}
    </EmptyLargePageLayout>
)) as ComponentType;

LargePageLayout.displayName = "LargeAppLayout";

export default LargePageLayout;