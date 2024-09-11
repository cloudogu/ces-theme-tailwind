import { forwardRef } from "react";
import { CesIconX } from "../icons";
import Button from "../inputs/Button";
import Close from "./Close";
import type { ToastCloseProps } from "./Close";
import type { IconProps } from "@phosphor-icons/react";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { ComponentPropsWithoutRef} from "react";

export type ToastCloseButtonProps = ToastCloseProps & Testid;

const DefaultX = (props: IconProps & ComponentPropsWithoutRef<"svg">) => <CesIconX {...props}/>;

type ComponentType = ComponentTypeWithRef<ToastCloseButtonProps, HTMLButtonElement> & {
    DefaultIcon: typeof DefaultX
};

const CloseButton = forwardRef<HTMLButtonElement, ToastCloseButtonProps>(({className, children, ...props}, ref) => (
    <Close
        asChild
        className={className}
        {...props}
    >
        <Button ref={ref} size={"small"} color={"neutral"} variant={"tertiary"} className="hover:bg-transparent">
            {children ?? <DefaultX />}
            <span className="sr-only">Close</span>
        </Button>
    </Close>
)) as ComponentType;

CloseButton.displayName = "ToastCloseButton";
CloseButton.DefaultIcon = DefaultX;

export default CloseButton;