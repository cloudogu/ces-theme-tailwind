import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type Testid from "../../types/Testid";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type { HTMLAttributes} from "react";

export type DialogBodyProps = HTMLAttributes<HTMLDivElement> & Testid;

type ComponentType = ComponentTypeWithRef<DialogBodyProps, HTMLDivElement>;

const Body = forwardRef<HTMLDivElement, DialogBodyProps>(({ children, className, ...props }, ref) => (
    <div 
        ref={ref} 
        className={twMerge(
            "py-default-2x desktop:px-default-2x mobile:px-default", 
            className
        )} 
        {...props}>
        {children}
    </div>
)) as ComponentType;

Body.displayName = "DialogBody";

export default Body;
