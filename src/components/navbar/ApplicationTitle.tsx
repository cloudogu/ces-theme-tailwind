import TextWithIcon from "@components/TextWithIcon";
import CloudoguLogo from "@components/navbar/CloudoguLogo";
import {useNavbarContext} from "@components/navbar/NavbarRoot";
import { useForwardedRef } from "@src/hooks/useForwardedRef";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef, ReactElement, ReactNode} from "react";

export type NavbarApplicationTitleProps = Omit<ComponentPropsWithoutRef<"span">, "children"> & Testid & {
    children?: ReactNode;
    icon?: ReactElement;
};

type ComponentType = ComponentTypeWithRef<NavbarApplicationTitleProps, HTMLSpanElement>;

const ApplicationTitle = forwardRef<HTMLSpanElement, NavbarApplicationTitleProps>(
    (
        {
            icon = <CloudoguLogo/>,
            children,
            ...props
        }, ref) => {
        const titleRef = useForwardedRef<HTMLSpanElement>(ref);
        const {registerForMinWidthCount, registerForActualWidthCount} = useNavbarContext();
        registerForMinWidthCount(titleRef, "application-title");
        registerForActualWidthCount(titleRef, "application-title");

        return (
            <TextWithIcon
                {...props}
                icon={icon}
                ref={titleRef}
                className={
                    twMerge(
                        "h-12 group-force-mobile:h-[56px] mobile:h-[56px] gap-default pr-default-2x text-2xl whitespace-nowrap pl-5",
                        props.className
                    )
                }>
                {children ?? ""}
            </TextWithIcon>
        );
    }
) as ComponentType;

ApplicationTitle.displayName = "NavbarApplicationTitle";

export default ApplicationTitle;