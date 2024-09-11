import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

import type {ComponentPropsWithoutRef} from "react";

export interface FileInputProps extends Omit<ComponentPropsWithoutRef<"input">, "type">{
    variant: "primary" | "success" | "danger";
    "data-testid"?: string;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(function({variant, className, ...props}: FileInputProps, ref) {
    return (
        <input type={"file"} {...props}
            ref={ref}
            className={
                twMerge(className,
                    "border text-xs focus:outline-none appearance-none rounded w-full h-8",
                    "file:border-button-secondary-border",
                    "file:bg-button-secondary file:hover:bg-button-secondary-hover file:text-button-secondary-font",
                    "file:disabled:opacity-[0.65] file:disabled:bg-textfield-primary-disabled file:whitespace-nowrap",
                    "file:border file:border-y-0 file:border-l-0 file:border-solid ",
                    "file:h-8 file:mr-4 file:py-0 file:mt-[-1px]",
                    "file:text-button-secondary-font enabled:hover:file:text-button-secondary-font-hover focus:file:shadow-textfield-primary-shadow",
                    (variant === "primary") ? "border-textfield-primary-border focus:shadow-textfield-primary-shadow text-textfield-primary-font disabled:bg-textfield-primary-disabled file:border-r-textfield-primary-border" : "",
                    (variant === "danger") ? "border-textfield-danger-border focus:shadow-textfield-danger-shadow text-textfield-danger-font disabled:bg-textfield-danger-disabled file:border-r-textfield-danger-border" : "",
                    (variant === "success") ? "border-textfield-success-border focus:shadow-textfield-success-shadow text-textfield-success-font disabled:bg-textfield-success-disabled file:border-r-textfield-success-border" : "",
                )
            }
        />
    );
});

FileInput.displayName = "FileInput";

export default FileInput;