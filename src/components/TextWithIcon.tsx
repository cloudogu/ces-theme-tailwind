import {cloneElement, forwardRef, isValidElement} from "react";
import {twMerge} from "tailwind-merge";
import {subTestid} from "../types/Testid";
import type Testid from "../types/Testid";
import type {ComponentPropsWithoutRef, ReactNode} from "react";

interface TextWithIconProps extends Omit<ComponentPropsWithoutRef<"span">, "children">, Testid {
    icon: ReactNode;
    children: ReactNode;
    align?: "LEFT" | "RIGHT";
}


const TextWithIcon = forwardRef<HTMLSpanElement, TextWithIconProps>(({icon, children, align: alignNullable, ...props}: TextWithIconProps, ref) => {
    const align = alignNullable ?? "LEFT";
    const iconElement = (
        <span
            className={"flex items-center mr-1"} aria-hidden={true}
            data-testid={subTestid(props, "icon-container")}>
            {isValidElement(icon) && cloneElement(icon, {
                "aria-hidden": true,
                "data-testid": subTestid(props, "icon"),
            } as any)}
        </span>
    );
    return (
        <span
            {...props}
            className={twMerge("flex flex-row", props.className)}
            ref={ref}
        >
            {align === "LEFT" && iconElement}
            <span className={"flex items-center"} data-testid={subTestid(props, "text-container")}>
                {children}
            </span>
            {align === "RIGHT" && iconElement}
        </span>
    );
});

TextWithIcon.displayName = "TextWithIcon";
export default TextWithIcon;