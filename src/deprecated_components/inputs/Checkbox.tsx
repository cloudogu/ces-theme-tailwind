import {twMerge} from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<"input">, "children" | "value">, Testid {
    variant: CheckboxVariant;
    value: boolean;
}

export type CheckboxVariant = "primary" | "secondary" | "success" | "danger";

export default function Checkbox({variant, value, ...props}: CheckboxProps) {
    return (
        <input {...props}
               defaultChecked={value}
               value={value as any}
               type={"checkbox"}
               className={twMerge(
                   "inline cursor-pointer",
                   (variant === "primary") ? "accent-checkbox-primary" : "",
                   (variant === "secondary") ? "accent-checkbox-secondary" : "",
                   (variant === "success") ? "accent-checkbox-success" : "",
                   (variant === "danger") ? "accent-checkbox-danger " : "",
                   props.className,
               )}
        />
    );
}
