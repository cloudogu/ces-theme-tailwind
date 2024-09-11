import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentPropsWithoutRef, ForwardedRef} from "react";

export interface ButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "type">, Testid {
    type?: "submit" | "button";
    variant: "warning" | "primary" | "secondary" | "danger" | "success" | "link";
}


export default forwardRef(function Button({
                                              children,
                                              type,
                                              disabled,
                                              "data-testid": dataTestId,
                                              onClick,
                                              variant,
                                              ...props
                                          }: ButtonProps, ref: ForwardedRef<any>) {
    return (
        <button
            {...props}
            ref={ref}
            type={type ?? "button"}
            disabled={disabled}
            data-testid={dataTestId}
            className={twMerge(
                "disabled:opacity-[0.65] h-8 whitespace-nowrap",
                (variant === "primary") ? "text-button-primary-font enabled:hover:text-button-primary-font-hover" : "",
                (variant === "primary") ? "bg-button-primary enabled:hover:bg-button-primary-hover enabled:active:bg-button-primary-active" : "",
                (variant === "primary") ? "border-button-primary-border enabled:hover:border-button-primary-border-hover enabled:active:border-primary-primary-border-active" : "",
                (variant === "secondary") ? "text-button-secondary-font enabled:hover:text-button-secondary-font-hover" : "",
                (variant === "secondary") ? "bg-button-secondary enabled:hover:bg-button-secondary-hover enabled:active:bg-button-secondary-active" : "",
                (variant === "secondary") ? "border-button-secondary-border enabled:hover:border-button-secondary-border-hover enabled:active:border-secondary-secondary-border-active" : "",
                (variant === "danger") ? "text-button-danger-font enabled:hover:text-button-danger-font-hover" : "",
                (variant === "danger") ? "bg-button-danger enabled:hover:bg-button-danger-hover enabled:active:bg-button-danger-active" : "",
                (variant === "danger") ? "border-button-danger-border enabled:hover:border-button-danger-border-hover enabled:active:border-danger-danger-border-active" : "",
                (variant === "success") ? "text-button-success-font enabled:hover:text-button-success-font-hover" : "",
                (variant === "success") ? "bg-button-success enabled:hover:bg-button-success-hover enabled:active:bg-button-success-active" : "",
                (variant === "success") ? "border-button-success-border enabled:hover:border-button-success-border-hover enabled:active:border-success-success-border-active" : "",
                (variant === "warning") ? "text-button-warning-font enabled:hover:text-button-warning-font-hover" : "",
                (variant === "warning") ? "bg-button-warning enabled:hover:bg-button-warning-hover enabled:active:bg-button-warning-active" : "",
                (variant === "warning") ? "border-button-warning-border enabled:hover:border-button-warning-border-hover enabled:active:border-warning-warning-border-active" : "",
                (variant !== "link") ? "px-3 py-1.5 rounded border text-sm" : "",
                (variant === "link") ? "text-button-link-font hover:underline" : "",
                props.className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
});
