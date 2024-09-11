import { DialogOverlay as RadixDialogOverlay} from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {DialogOverlayProps as RadixDialogOverlayProps} from "@radix-ui/react-dialog";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";

export type DialogOverlayProps = RadixDialogOverlayProps & Testid;

type ComponentType = ComponentTypeWithRef<DialogOverlayProps, HTMLDivElement>;

const Overlay = forwardRef<HTMLDivElement, DialogOverlayProps>(({className, ...props}, ref) => (
    <RadixDialogOverlay
        ref={ref}
        className={twMerge(
            "fixed inset-0 z-50 bg-neutral opacity-70",
            className
        )}
        {... props}
    />
)) as ComponentType;

Overlay.displayName = "DialogOverlay";

export default Overlay;