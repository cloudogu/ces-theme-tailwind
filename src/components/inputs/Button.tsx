import {cva, type VariantProps} from "class-variance-authority";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../constants/DefaultStyles";
import type Testid from "../../types/Testid";
import type {ComponentPropsWithoutRef, ReactElement} from "react";

const buttonVariants = cva(
    [
        DefaultStyles.DefaultTextStyling,
        DefaultStyles.Focus,
        "whitespace-nowrap rounded px-[14px] font-bold h-10"
    ],
    {
        variants: {
            size: {
                small: [DefaultStyles.TextSizeRegular, "py-0 h-8"],
                regular: [DefaultStyles.TextSizeRegular, ""],
                large: [DefaultStyles.TextSizeXl, "px-4 h-12"],
            },
            color: {
                brand: [],
                neutral: [],
                danger: [],
                success: [],
            },
            variant: {
                primary: [],
                secondary: [],
                tertiary: [],
                special: [],
            },
            disabled: {
                true: ["cursor-default select-none"],
                false: [],
            }
        },
        compoundVariants: [
            {
                color: "brand",
                variant: ["primary", "special"],
                class: DefaultStyles.ColorGroups.Brand.Primary,
            },
            {
                color: "brand",
                variant: "secondary",
                class: DefaultStyles.ColorGroups.Brand.Secondary,
            },
            {
                color: "brand",
                variant: "tertiary",
                class: DefaultStyles.ColorGroups.Brand.Tertiary,
            },
            {
                color: "danger",
                variant: ["primary", "special"],
                class: DefaultStyles.ColorGroups.Danger.Primary,
            },
            {
                color: "danger",
                variant: "secondary",
                class: DefaultStyles.ColorGroups.Danger.Secondary,
            },
            {
                color: "danger",
                variant: "tertiary",
                class: DefaultStyles.ColorGroups.Danger.Tertiary,
            },
            {
                color: "success",
                variant: ["primary", "special"],
                class: DefaultStyles.ColorGroups.Success.Primary,
            },
            {
                color: "success",
                variant: "secondary",
                class: DefaultStyles.ColorGroups.Success.Secondary,
            },
            {
                color: "success",
                variant: "tertiary",
                class: DefaultStyles.ColorGroups.Success.Tertiary,
            },
            {
                color: "neutral",
                variant: ["primary", "special"],
                class: DefaultStyles.ColorGroups.Neutral.Primary,
            },
            {
                color: "neutral",
                variant: "secondary",
                class: DefaultStyles.ColorGroups.Neutral.Secondary,
            },
            {
                color: "neutral",
                variant: "tertiary",
                class: DefaultStyles.ColorGroups.Neutral.Tertiary,
            },
            {
                variant: "special",
                class: "rounded-4xl",
            }
        ],
        defaultVariants: {
            color: "brand",
            variant: "primary",
            size: "regular"
        }
    }
);


export type ButtonProps =
    Omit<ComponentPropsWithoutRef<"button">, "color" | "aria-label">
    & Omit<VariantProps<typeof buttonVariants>, "disabled">
    & Testid
    & {
    "aria-label"?: string | ReactElement;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
    {
        className,
        size,
        color,
        variant,
        disabled = false,
        type = "button",
        onClick,
        "aria-label": ariaLabel,
        children,
        ...props
    }, ref) => {
    const ariaAttributes: any = {};
    if (typeof ariaLabel === "string"){
        ariaAttributes["aria-label"] = ariaLabel;
    }

    return (
        <button
            {...props}
            {...ariaAttributes}
            aria-label={(typeof ariaLabel === "string") ? ariaLabel : undefined}
            onClick={
                (disabled) ? () => {
                } : onClick
            }
            aria-disabled={disabled}
            ref={ref}
            className={
                twMerge(buttonVariants({size, color, variant, disabled, className}))
            }
            type={type}
            disabled={false}
        >
            {(typeof ariaLabel !== "string" && ariaLabel) && <span className={"sr-only"}>{ariaLabel}</span>}
            {children}
        </button>
    );
}
);

Button.displayName = "Button";

export default Button;