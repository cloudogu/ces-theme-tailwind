import EmptyFullPageLayout from "@components/layouts/full/EmptyFullPageLayout";
import renderPotentialFunctionChild from "@src/internalFunctions/renderPotentialFunctionChild";
import React, { forwardRef} from "react";
import type {EmptyFullPageLayoutProps} from "@components/layouts/full/EmptyFullPageLayout";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef, ReactNode} from "react";

export type FullPageLayoutProps = ComponentPropsWithoutRef<"main"> & Testid & EmptyFullPageLayoutProps & {
    pageHeadline: ReactNode | (() => ReactNode);
};

type ComponentType = ComponentTypeWithRef<FullPageLayoutProps, HTMLDivElement>;

const FullPageLayout = forwardRef<HTMLDivElement, FullPageLayoutProps>(({pageHeadline, children, ...props}, ref) => (
    <EmptyFullPageLayout
        {...props}
        ref={ref}
    >
        <h1>{renderPotentialFunctionChild(pageHeadline)}</h1>
        {children}
    </EmptyFullPageLayout>
)) as ComponentType;

FullPageLayout.displayName = "FullPageLayout";

export default FullPageLayout;