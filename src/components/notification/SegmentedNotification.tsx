import {cva} from "class-variance-authority";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import {VariantContext} from "./Context";
import Description from "./Description";
import Title from "./Title";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {VariantProps} from "class-variance-authority";
import type {HTMLAttributes} from "react";


const notificationVariants = cva([
    "relative w-full p-default-2x text-default-text bg-default-background",
    "desktop:border-[6px]",
    "mobile:border-t-[6px] mobile:border-b-[6px]"
],
{
    variants: {
        variant: {
            brand: "border-brand",
            neutral: "border-neutral",
            danger: "border-danger",
        },
    },
    defaultVariants: {
        variant: "neutral",
    },
}
);

export type SegmentedNotificationProps = HTMLAttributes<HTMLDivElement> & Testid & VariantProps<typeof notificationVariants>;

type ComponentType = ComponentTypeWithRef<SegmentedNotificationProps, HTMLDivElement> & {
    Title: typeof Title;
    Description: typeof Description;
};

const SegmentedNotification = forwardRef<HTMLDivElement, SegmentedNotificationProps>(
    ({
        children,
        className,
        variant = "neutral",
        ...props
    }, ref) => (
        <VariantContext.Provider value={variant}>
            <div
                ref={ref}
                role={variant === "danger" ? "alert" : "status"}
                className={twMerge(notificationVariants({variant}), className)}
                {...props}
            >
                {children}
            </div>
        </VariantContext.Provider>
    )) as ComponentType;

SegmentedNotification.displayName = "SegmentedNotification";
SegmentedNotification.Title = Title;
SegmentedNotification.Description = Description;

export default SegmentedNotification;