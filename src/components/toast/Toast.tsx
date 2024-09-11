import { Root as RadixToastRoot } from "@radix-ui/react-toast";
import DefaultStyles from "@src/constants/DefaultStyles";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Action from "./Action";
import ActionButton from "./ActionButton";
import Close from "./Close";
import CloseButton from "./CloseButton";
import Description from "./Description";
import Title from "./Title";
import type { ToastProps as RadixToastProps } from "@radix-ui/react-toast";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { VariantProps} from "class-variance-authority";

const toastVariants = cva([DefaultStyles.Focus], {
    variants: {
        variant: {
            neutral: "bg-neutral-weaker border-neutral",
            brand: "bg-brand-weaker border-brand",
            success: "bg-success-weaker border-success",
            danger: "bg-danger-weaker border-danger-strong",
        },
    },
    defaultVariants: {
        variant: "neutral",
    },
});

export type ToastProps = RadixToastProps & Testid & VariantProps<typeof toastVariants>;

type ComponentType = ComponentTypeWithRef<ToastProps, HTMLLIElement> & {
    Action: typeof Action;
    ActionButton: typeof ActionButton;
    Close: typeof Close;
    CloseButton: typeof CloseButton;
    Title: typeof Title;
    Description: typeof Description;
};

const Toast = forwardRef<HTMLLIElement, ToastProps>(({ className, variant, ...props }, ref) => (
    <RadixToastRoot
        ref={ref}
        className={twMerge(
            "group pointer-events-auto relative rounded-md border px-default py-[7px]",
            "transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:mobile:slide-in-from-bottom-full",
            "flex items-center",
            "h-16 w-full overflow-clip",
            "outline-0",
            toastVariants({ variant }),
            className
        )}
        {...props}
    />
)) as ComponentType;

Toast.displayName = "Toast";
Toast.Action = Action;
Toast.ActionButton = ActionButton;
Toast.Close = Close;
Toast.CloseButton = CloseButton;
Toast.Title = Title;
Toast.Description = Description;

export default Toast;
