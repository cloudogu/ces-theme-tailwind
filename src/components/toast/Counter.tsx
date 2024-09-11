import {t} from "i18next";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { HTMLAttributes} from "react";

export type ToastCounterProps = HTMLAttributes<HTMLDivElement> & Testid & {
    counter: number;
};

type ComponentType = ComponentTypeWithRef<ToastCounterProps, HTMLDivElement>;

const Counter = forwardRef<HTMLDivElement, ToastCounterProps>(({className, counter, ...props}, ref) => (
    <div
        ref={ref}
        className={twMerge(
            "outline-0",
            "h-8",
            "px-default py-[7px]",
            "bg-neutral-weaker border-neutral border-b-0 border-x border-t rounded-t-md",
            "desktop:text-desktop-small mobile:text-mobile-small",
            className
        )}
        {...props}
    >
        {counter} {counter > 1 ? t("ces-theme-tailwind-lib-translation.toast.counter.plural"): t("ces-theme-tailwind-lib-translation.toast.counter.singular")}
    </div>
)) as ComponentType;

Counter.displayName = "ToastCounter";

export default Counter;