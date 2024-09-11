import {DialogContent as RadixDialogContent} from "@radix-ui/react-dialog";
import {subTestid} from "@src/types/Testid";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import CloseIcon from "./CloseIcon";
import {useVariantContext} from "./Context";
import Description from "./Description";
import Title from "./Title";
import type Testid from "../../types/Testid";
import type {DialogContentProps as RadixDialogContentProps} from "@radix-ui/react-dialog";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type DialogSegmentedContentProps = RadixDialogContentProps &
    Testid & {
    showDefaultCloseIcon?: boolean;
};

type ComponentType = ComponentTypeWithRef<DialogSegmentedContentProps, HTMLDivElement> & {
    Title: typeof Title;
    Description: typeof Description;
    CloseIcon: typeof CloseIcon;
};

const SegmentedContent = forwardRef<HTMLDivElement, DialogSegmentedContentProps>(({
    className,
    children,
    showDefaultCloseIcon = true,
    ...props
}, ref) => {
    const variantContext = useVariantContext();
    const borderColor = variantContext == "danger" ? "border-danger" : "border-neutral";

    return (
        <RadixDialogContent
            ref={ref}
            className={twMerge(
                "fixed z-50",
                "left-[50%] translate-x-[-50%] desktop:top-[50%] desktop:translate-y-[-50%] mobile:bottom-0",
                "w-full desktop:max-w-lg",
                "border desktop:rounded-lg mobile:rounded-t-lg bg-default-background",
                borderColor,
                className
            )}
            {...props}
        >
            {children}
            {showDefaultCloseIcon && <CloseIcon data-testid={subTestid(props, "close-button")}/>}
        </RadixDialogContent>
    );
}) as ComponentType;

SegmentedContent.displayName = "DialogSegmentedContent";
SegmentedContent.Title = Title;
SegmentedContent.Description = Description;
SegmentedContent.CloseIcon = CloseIcon;


export default SegmentedContent;
