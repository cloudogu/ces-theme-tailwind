import { twMerge } from "tailwind-merge";
import type {ComponentPropsWithoutRef} from "react";

export interface LabelProps extends ComponentPropsWithoutRef<"label"> {
    children: any;
    variant: LabelVariant;
}

export type LabelVariant = "secondary" | "success" | "danger";

export default function Label(props: LabelProps) {
    return (
        <label {...props}
            className={twMerge(
                "block text-sm font-bold mb-1 mt-4",
                (props.variant == "secondary") ? "text-label-secondary-font" : "",
                (props.variant == "danger") ? "text-label-danger-font" : "",
                (props.variant == "success") ? "text-label-success-font" : "",
                props.className,
            )
            }>
            {props.children}
        </label>
    );
}