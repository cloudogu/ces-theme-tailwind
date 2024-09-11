import {cva} from "class-variance-authority";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../constants/DefaultStyles";
import UnstyledItem from "./UnstyledItem";
import type SchemeColor from "../../types/SchemeColor";
import type Testid from "../../types/Testid";
import type {DropdownMenuItemProps as RadixDropdownMenuItemProps} from "@radix-ui/react-dropdown-menu/dist";

const itemVariants = cva(
    [
        "outline-0 cursor-pointer p-default " +
        "inline-flex flex-row items-center border-box " +
        "ces-unstyled min-w-[var(--radix-dropdown-menu-trigger-width)]",
        DefaultStyles.DefaultTextStyling
    ],
    {
        variants: {
            color: {
                brand: [
                    "text-brand focus-visible:bg-brand focus-visible:text-inverted-text",
                    "group-[&:not(:has([data-highlighted]))]:hover:text-inverted-text",
                    "group-[&:not(:has([data-highlighted]))]:hover:bg-brand",
                    "data-[highlighted]:hover:text-inverted-text",
                    "data-[highlighted]:hover:bg-brand",
                ],
                danger: [
                    "text-danger focus-visible:bg-danger focus-visible:text-inverted-text",
                    "group-[&:not(:has([data-highlighted]))]:hover:text-inverted-text",
                    "group-[&:not(:has([data-highlighted]))]:hover:bg-danger",
                    "data-[highlighted]:hover:text-inverted-text",
                    "data-[highlighted]:hover:bg-danger",
                ],
                success: [
                    "text-success focus-visible:bg-success focus-visible:text-inverted-text",
                    "group-[&:not(:has([data-highlighted]))]:hover:text-inverted-text",
                    "group-[&:not(:has([data-highlighted]))]:hover:bg-success",
                    "data-[highlighted]:hover:text-inverted-text",
                    "data-[highlighted]:hover:bg-success",
                ],
                neutral: [
                    "text-neutral focus-visible:bg-neutral focus-visible:text-inverted-text",
                    "group-[&:not(:has([data-highlighted]))]:hover:text-inverted-text",
                    "group-[&:not(:has([data-highlighted]))]:hover:bg-neutral",
                    "data-[highlighted]:hover:text-inverted-text",
                    "data-[highlighted]:hover:bg-neutral",
                ],
            },
        },
        defaultVariants: {
            color: "neutral",
        },
    }
);

export type DropdownMenuItemProps =
    Omit<RadixDropdownMenuItemProps, "color">
    & Testid
    & { color?: SchemeColor };

export function removeHoverStyles(input: string): string {
    const removeHoverRegexp = new RegExp("[^ ]*hover:[^ ]*", "g");
    return input
        .replace(removeHoverRegexp, "")
        .replaceAll("  ", " ")
        .trim();
}

const Item = forwardRef<HTMLDivElement, DropdownMenuItemProps>(({color, ...props}, ref) => (
    <UnstyledItem
        {...props}
        ref={ref}
        className={
            twMerge(
                itemVariants({color}),
                props.className,
            )
        }
    />
));

Item.displayName = "Item";

export default Item;