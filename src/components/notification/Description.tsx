import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { useVariantContext } from "./Context";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { HTMLAttributes} from "react";

export type NotificationDescriptionProps = HTMLAttributes<HTMLParagraphElement> & Testid;

type ComponentType = ComponentTypeWithRef<NotificationDescriptionProps, HTMLParagraphElement>;

const Description = forwardRef<HTMLParagraphElement, NotificationDescriptionProps> (({ className, ...props }, ref) => {
    const dangerText = useVariantContext() === "danger";

    return (
        <p
            ref={ref}
            className={twMerge(
                dangerText ? "text-danger": "text-default-text", 
                className
            )}
            {...props}
        />
    );
}) as ComponentType;

Description.displayName = "NotificationDescription";

export default Description;