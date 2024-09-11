import { twMerge } from "tailwind-merge";
import type {ComponentPropsWithoutRef} from "react";

export interface TextAreaProps extends ComponentPropsWithoutRef<"textarea">{
    variant: "primary" | "success" | "danger";
    "data-testid"?: string;
}

export default function TextArea({variant, className, ...props}: TextAreaProps) {
    return (
        <textarea {...props}
            className={
                twMerge(className,
                    "border text-xs focus:outline-none appearance-none rounded w-full py-1.5 px-3 h-16",
                    (variant === "primary") ? "border-textfield-primary-border focus:shadow-textfield-primary-shadow text-textfield-primary-font disabled:bg-textfield-primary-disabled" : "",
                    (variant === "danger") ? "border-textfield-danger-border focus:shadow-textfield-danger-shadow text-textfield-danger-font disabled:bg-textfield-danger-disabled" : "",
                    (variant === "success") ? "border-textfield-success-border focus:shadow-textfield-success-shadow text-textfield-success-font disabled:bg-textfield-success-disabled" : "",
                )
            }
        />
    );
}