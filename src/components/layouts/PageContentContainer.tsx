import EmptyFullPageLayout from "@components/layouts/full/EmptyFullPageLayout";
import FullPageLayout from "@components/layouts/full/FullPageLayout";
import EmptyLargePageLayout from "@components/layouts/large/EmptyLargePageLayout";
import LargePageLayout from "@components/layouts/large/LargePageLayout";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type PageContentContainerProps = ComponentPropsWithoutRef<"div"> & Testid;

type ComponentType = ComponentTypeWithRef<PageContentContainerProps, HTMLDivElement> & {
    LargePage: typeof LargePageLayout;
    EmptyLargePage: typeof EmptyLargePageLayout;
    EmptyFullPage: typeof EmptyFullPageLayout;
    FullPage: typeof FullPageLayout;
};

const PageContentContainer = forwardRef<HTMLDivElement, PageContentContainerProps>((props, ref) => (
    <div
        {...props}
        ref={ref}
        className={
            twMerge(
                "grid grid-cols-12 gap-default px-default",
                props.className
            )
        }
    />
)) as ComponentType;

PageContentContainer.displayName = "ApplicationContainer";
PageContentContainer.EmptyLargePage = EmptyLargePageLayout;
PageContentContainer.LargePage = LargePageLayout;
PageContentContainer.EmptyFullPage = EmptyFullPageLayout;
PageContentContainer.FullPage = FullPageLayout;

export default PageContentContainer;