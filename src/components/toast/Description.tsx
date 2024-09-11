import { ToastDescription as RadixToastDescription } from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type { ToastDescriptionProps as RadixToastDescriptionProps} from "@radix-ui/react-toast";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { VariantProps} from "class-variance-authority";

const descriptionVariants = cva(
    "desktop:text-desktop-regular mobile:text-mobile-regular",
    {
        variants: {
            variant: {
                neutral: "text-default-text",
                brand: "text-brand",
                success: "text-success",
                danger: "text-danger-strong",
            },
        },
        defaultVariants: {
            variant: "neutral",
        },
    }
);

export type ToastDescriptionProps = RadixToastDescriptionProps & Testid & VariantProps<typeof descriptionVariants>;

type ComponentType = ComponentTypeWithRef<ToastDescriptionProps, HTMLDivElement>

const Description = forwardRef<HTMLDivElement, ToastDescriptionProps>(({className, variant, ...props}, ref) => (
    <RadixToastDescription
        ref={ref}
        className={twMerge(
            descriptionVariants({ variant }),
            className
        )}
        {...props}
    />
)) as ComponentType;

Description.displayName = "ToastDescription";

export default Description;