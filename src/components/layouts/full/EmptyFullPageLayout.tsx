import GenericPageLayout from "@components/layouts/GenericPageLayout";
import React, { forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {GenericPageLayoutProps} from "@components/layouts/GenericPageLayout";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type EmptyFullPageLayoutProps = ComponentPropsWithoutRef<"main"> & Testid & GenericPageLayoutProps;

type ComponentType = ComponentTypeWithRef<EmptyFullPageLayoutProps, HTMLDivElement>;

const EmptyFullPageLayout = forwardRef<HTMLDivElement, EmptyFullPageLayoutProps>((props, ref) => (
    <GenericPageLayout
        {...props}
        ref={ref}
        className={
            twMerge(
                "col-start-1 col-span-12 md:mb-4 lg:mb-8",
                props.className
            )
        }
    />
)) as ComponentType;

EmptyFullPageLayout.displayName = "EmptyFullPageLayout";

export default EmptyFullPageLayout;