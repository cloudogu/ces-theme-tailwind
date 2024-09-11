import GenericPageLayout from "@components/layouts/GenericPageLayout";
import React, { forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {GenericPageLayoutProps} from "@components/layouts/GenericPageLayout";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type EmptyLargePageLayoutProps = ComponentPropsWithoutRef<"main"> & Testid & GenericPageLayoutProps;

type ComponentType = ComponentTypeWithRef<EmptyLargePageLayoutProps, HTMLDivElement>;

const EmptyLargePageLayout = forwardRef<HTMLDivElement, EmptyLargePageLayoutProps>((props, ref) => (
    <GenericPageLayout
        {...props}
        ref={ref}
        className={
            twMerge(
                "col-start-3 col-span-8 md:mb-4 lg:mb-8",
                props.className
            )
        }
    />
)) as ComponentType;

EmptyLargePageLayout.displayName = "EmptyLargeAppLayout";

export default EmptyLargePageLayout;