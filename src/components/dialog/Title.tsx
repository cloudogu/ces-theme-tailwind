import { DialogTitle as RadixDialogTitle} from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {DialogTitleProps as RadixDialogTitleProps} from "@radix-ui/react-dialog";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";

export type DialogTitleProps = RadixDialogTitleProps & Testid;

type ComponentType = ComponentTypeWithRef<DialogTitleProps, HTMLHeadingElement>

const Title = forwardRef<HTMLHeadingElement, DialogTitleProps>(({className, ...props}, ref) => (
    <RadixDialogTitle
        ref={ref}
        className={twMerge(
            "desktop:text-desktop-2xl mobile:text-mobile-2xl mb-0",
            className
        )}
        {...props}
    />
)) as ComponentType;

Title.displayName = "DialogTitle";

export default Title;
