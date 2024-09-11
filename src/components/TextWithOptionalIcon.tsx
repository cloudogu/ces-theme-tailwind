import {forwardRef} from "react";
import TextWithIcon from "./TextWithIcon";
import type Testid from "../types/Testid";
import type {ComponentPropsWithoutRef,  ReactNode} from "react";

interface TextWithIconProps extends Omit<ComponentPropsWithoutRef<"span">, "children">, Testid {
    icon?: ReactNode;
    children?: ReactNode;
    align?: "LEFT" | "RIGHT";
}


const TextWithOptionalIcon = forwardRef<HTMLSpanElement, TextWithIconProps>(({
    icon,
    children,
    align,
    className,
    ...props
}: TextWithIconProps, ref) => (
    <>
        {(typeof children === "string" && icon && children && children !== "") &&
                <TextWithIcon
                    {...props}
                    icon={icon}
                    className={className}
                    align={align}
                    ref={ref}
                >
                    {children}
                </TextWithIcon>
        }
        {!icon && <span {...props} className={className} ref={ref}>{children}</span>}
        {(icon && (!children || children === "")) && <span {...props} className={className} ref={ref}>{icon}</span>}
    </>
));

TextWithOptionalIcon.displayName = "TextWithOptionalIcon";
export default TextWithOptionalIcon;