import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { CesIconCircle } from "@src/components/icons";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type {IconProps} from "@phosphor-icons/react";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { ComponentPropsWithoutRef} from "react";

export type RadioGroupIndicatorProps = RadixRadioGroup.RadioIndicatorProps & Testid;

const DefaultIcon = ({weight = "fill", ...props}: IconProps & ComponentPropsWithoutRef<"svg">) => (
    <CesIconCircle
        {...props}
        weight={weight}
    />
);

type ComponentType = ComponentTypeWithRef<RadioGroupIndicatorProps, HTMLSpanElement> &
    {
        DefaultIcon: typeof DefaultIcon
    };

const Indicator = forwardRef<HTMLSpanElement, RadioGroupIndicatorProps>((props, ref) => (
    <RadixRadioGroup.Indicator
        {...props}
        ref={ref}
        className={
            twMerge(
                "flex items-center justify-center",
                "data-[state=checked]:text-brand",
                "group-hover:text-brand-strong",
                "group-focus-visible:text-brand-strong",
                "group-disabled:text-neutral",
                props.className,
            )
        }
    />
)) as ComponentType;

Indicator.displayName = "RadioGroupIndicator";
Indicator.DefaultIcon = DefaultIcon;

export default Indicator;