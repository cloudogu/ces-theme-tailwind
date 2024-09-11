import { CesIconX } from "@components/icons";
import Button from "@components/inputs/Button";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Close from "./Close";
import type Testid from "../../types/Testid";
import type { IconProps } from "@phosphor-icons/react";
import type { DialogCloseProps } from "@radix-ui/react-dialog";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type { ComponentPropsWithoutRef} from "react";

export type DialogCloseIconProps = DialogCloseProps & Testid;

const DefaultX = (props: IconProps & ComponentPropsWithoutRef<"svg">) => <CesIconX {...props}/>;

type ComponentType = ComponentTypeWithRef<DialogCloseIconProps, HTMLButtonElement> & {
    DefaultIcon: typeof DefaultX
};

const CloseIcon = forwardRef<HTMLButtonElement, DialogCloseIconProps>(({className, children, ...props}, ref) => (
    <Close
        asChild
        className={twMerge(
            "absolute right-1 top-3 rounded-sm",
            className
        )}
        {...props}
    >
        <Button ref={ref} color={"neutral"} variant={"tertiary"} className="hover:bg-transparent">
            {children ?? <DefaultX className="h-4 w-4"/>}
            <span className="sr-only">Close</span>
        </Button>
    </Close>
)) as ComponentType;

CloseIcon.displayName = "DialogCloseIcon";
CloseIcon.DefaultIcon = DefaultX;

export default CloseIcon;
