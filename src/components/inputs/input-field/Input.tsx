import DefaultStyles from "@src/constants/DefaultStyles";
import {cva} from "class-variance-authority";
import React, { forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { VariantProps} from "class-variance-authority";
import type {ComponentPropsWithoutRef} from "react";

const inputVariants = cva(
    ["w-full block rounded outline-none",
        "p-1.5 focus-visible:p-1 hover:p-1 active:p-1 disabled:p-1.5",
        "border focus-visible:border-3 hover:border-3 active:border-3 disabled:border",
        "disabled:text-neutral",
        "bg-default",
        DefaultStyles.Focus,
        DefaultStyles.DefaultTextStyling
    ],
    {
        variants: {
            variant: {
                neutral: [
                    "border-neutral",
                    "hover:border-neutral-strong",
                    "focus:border-brand",
                    "active:border-brand",
                    "disabled:border-neutral",
                    "disabled:bg-neutral-weak",
                    "text-default-text"
                ],
                success: [
                    "border-success",
                    "hover:border-success",
                    "hover:bg-default",
                    "focus:border-success-strong",
                    "active:border-success-strong",
                    "active:bg-default",
                    "disabled:border-success",
                    "disabled:bg-success-weak",
                    "text-default-text",
                    "disabled:text-neutral"
                ],
                danger: [
                    "border-danger",
                    "hover:border-danger",
                    "hover:bg-default",
                    "focus:border-danger-strong",
                    "active:border-danger-strong",
                    "active:bg-default",
                    "disabled:border-danger",
                    "disabled:bg-danger-weak",
                    "text-default-text",
                    "disabled:text-neutral"
                ],
            },
        },
        defaultVariants: {
            variant: "neutral",
        },
    }
);

export type InputProps = Omit<ComponentPropsWithoutRef<"input">, "type"> &
    Testid &
    VariantProps<typeof inputVariants> &
    {
        type: "color"
            | "date"
            | "datetime-local"
            | "email"
            | "hidden"
            | "month"
            | "number"
            | "password"
            | "text"
            | "time"
            | "week"
    };

type ComponentType = ComponentTypeWithRef<InputProps, HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({variant, className, ...props}, ref) => (
    <input {...props}
        ref={ref}
        className={
            twMerge(
                inputVariants({variant: variant}),
                className
            )
        }
    />
)) as ComponentType;

Input.displayName = "Input";

export default Input;
