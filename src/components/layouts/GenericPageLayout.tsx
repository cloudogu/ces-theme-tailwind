
import React, { forwardRef, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {twMerge} from "tailwind-merge";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type GenericPageLayoutProps = ComponentPropsWithoutRef<"main"> & Testid & {
    applicationTitle: string;
};

type ComponentType = ComponentTypeWithRef<GenericPageLayoutProps, HTMLDivElement>;

const GenericPageLayout = forwardRef<HTMLDivElement, GenericPageLayoutProps>(({applicationTitle, ...props}, ref) => {
    const location = useLocation();
    useEffect(() => {
        try {
            document.title = applicationTitle;
        }
        catch (e){
            console.error(e);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <main
            {...props}
            className={twMerge("pt-default", props.className)}
            ref={ref}
        />
    );
}) as ComponentType;

GenericPageLayout.displayName = "GenericPageLayout";

export default GenericPageLayout;