import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import {useVariantContext} from "./Context";
import type Testid from "../../types/Testid";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {HTMLAttributes} from "react";

export type DialogFooterProps = HTMLAttributes<HTMLDivElement> & Testid;

type ComponentType = ComponentTypeWithRef<DialogFooterProps, HTMLDivElement>;

const Footer = forwardRef<HTMLDivElement, DialogFooterProps>(({children, className, ...props}, ref) => {
    const variant = useVariantContext();
    const footerBackground = variant == "danger" ? "bg-danger-weaker" : "bg-neutral-weaker";

    return (
        <div
            ref={ref}
            className={twMerge(
                "min-h-16 h-full desktop:rounded-b-lg",
                "py-default-2x desktop:px-default-2x mobile:px-default",
                "flex flex-row flex-wrap gap-default items-center mobile:justify-end",
                "overflow-hidden",
                footerBackground,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}) as ComponentType;

Footer.displayName = "DialogFooter";

export default Footer;
