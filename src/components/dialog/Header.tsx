import { subTestid } from "@src/types/Testid";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { useVariantContext } from "./Context";
import Description from "./Description";
import Title from "./Title";
import type Testid from "../../types/Testid";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type { HTMLAttributes} from "react";

export type DialogHeaderProps = HTMLAttributes<HTMLDivElement> & Testid;

type ComponentType = ComponentTypeWithRef<DialogHeaderProps, HTMLDivElement> & {
    Title: typeof Title;
    Description: typeof Description;
};

const Header = forwardRef<HTMLDivElement, DialogHeaderProps>(({ children, className, ...props }, ref) => {
    const variant = useVariantContext();

    const dangerColor = [];
    if (variant == "danger"){
        dangerColor.push("text-danger", "border-danger");
    }

    const childContent =
        typeof children == "string" ? (
            <Title data-testid={subTestid(props, "title")} ref={ref}>
                {children}
            </Title>
        ) : (
            children
        );

    return (
        <>
            <div 
                className={twMerge(
                    "min-h-16 py-default-2x", 
                    "desktop:px-default-2x", 
                    "mobile:px-default",
                    "border-b-[1px] border-neutral",
                    "flex flex-col",
                    ...dangerColor,
                    className
                )} 
                {...props}>
                <div className="desktop:hidden border-t border-neutral-weak py-1 ml-[43%] mr-[43%]" />
                {childContent}
            </div>
        </>
    );
}) as ComponentType;

Header.displayName = "DialogHeader";
Header.Title = Title;
Header.Description = Description;

export default Header;
