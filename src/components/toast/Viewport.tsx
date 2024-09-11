import { ToastViewport as RadixToastViewport}from "@radix-ui/react-toast";
import DefaultStyles from "@src/constants/DefaultStyles";
import { subTestid } from "@src/types/Testid";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Counter from "./Counter";
import type {ToastViewportProps as RadixToastViewportProps} from "@radix-ui/react-toast";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";

export type ToastViewportProps = RadixToastViewportProps & Testid & {
    counter?: number;
};

type ComponentType = ComponentTypeWithRef<ToastViewportProps, HTMLOListElement>

const Viewport = forwardRef<HTMLOListElement, ToastViewportProps>(({className, counter = 0, ...props}, ref) => (
    <>
        <RadixToastViewport
            ref={ref}
            className={twMerge(
                DefaultStyles.Focus,
                "outline-0",
                "fixed bottom-0 desktop:right-0 top-auto",
                "flex flex-col-reverse", 
                "desktop:w-[400px] mobile:w-[calc(100vw-2rem)] max-h-screen",
                "desktop:m-default-2x",
                "z-[2147483647]",
                "gap-default",
                `${counter === 0 ? "mobile:mb-default-2x": "desktop:mb-10 mobile:mb-10"}`,
                className
            )}
            {...props}
        />
        {counter > 0 && 
            <Counter 
                counter={counter} 
                data-testid={subTestid(props, "counter")}
                className="fixed bottom-0 desktop:right-0 desktop:w-[400px] mobile:w-[calc(100vw-2rem)] desktop:mx-default-2x mt-default"
            />
        }
    </>
    
)) as ComponentType;

Viewport.displayName = "ToastViewport";

export default Viewport;