import TextWithOptionalIcon from "@components/TextWithOptionalIcon";
import {CesIconArrowSquareOut} from "@components/icons";
import Link from "@components/navbar/Link";
import renderPotentialFunctionChild from "@src/internalFunctions/renderPotentialFunctionChild";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {NavbarLinkProps} from "@components/navbar/Link";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type { ReactNode} from "react";

export type NavbarDesktopNavItemBarLinkProps = Omit<NavbarLinkProps, "children"> & {
    active?: boolean;
    icon?: ReactNode | (() => ReactNode);
    children?: string | (() => ReactNode);
};

type ComponentType = ComponentTypeWithRef<NavbarDesktopNavItemBarLinkProps, HTMLAnchorElement> & {
    IconDefaultHelp: typeof CesIconArrowSquareOut;
};

const DesktopNavItemBarLink = forwardRef<HTMLAnchorElement, NavbarDesktopNavItemBarLinkProps>(
    ({
        children,
        icon,
        active = false,
        ...props
    }, ref) => (
        <Link
            {...props}
            ref={ref}
            role={"menuitem"}
            aria-current={(active) ? "page" : undefined}
            className={
                twMerge(
                    "h-12 flex flex-col justify-center px-default-2x box-border border-transparent border-y-4",
                    "bg-transparent hover:bg-brand focus-visible:bg-brand active:bg-brand-stronger",
                    "text-default-text hover:text-inverted-text focus-visible:text-inverted-text no-underline",
                    "whitespace-nowrap cursor-pointer focus-visible:shadow-none",
                    (active) ? "border-b-brand active:border-b-brand-strong font-bold" : "",
                    props.className
                )
            }>
            <TextWithOptionalIcon icon={renderPotentialFunctionChild(icon)} align={"RIGHT"}>
                {renderPotentialFunctionChild(children)}
            </TextWithOptionalIcon>
        </Link>
    )
) as ComponentType;

DesktopNavItemBarLink.displayName = "LinkItem";
DesktopNavItemBarLink.IconDefaultHelp = forwardRef((props: any, ref: any) => <CesIconArrowSquareOut
    size={16}
    ref={ref}
    className={twMerge("ml-default-1/4", props.className)}
    {...props}
/>) as any;
DesktopNavItemBarLink.IconDefaultHelp.displayName = "IconDefaultHelp";
export default DesktopNavItemBarLink;