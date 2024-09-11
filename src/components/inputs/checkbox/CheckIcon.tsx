import { CesIconCheck } from "@src/components/icons";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type { IconProps } from "@phosphor-icons/react";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { ComponentPropsWithoutRef} from "react";

export type CheckboxIconProps = ComponentPropsWithoutRef<"svg"> & IconProps & Testid;

type ComponentType = ComponentTypeWithRef<CheckboxIconProps, SVGSVGElement>;

const CheckIcon = forwardRef<SVGSVGElement, CheckboxIconProps>((props, ref) => (
    <CesIconCheck
        weight={"bold"}
        size={24}
        {...props}
        ref={ref}
        className={
            twMerge(props.className,
                "text-inverted-text",
            )
        }
    />
)) as ComponentType;

CheckIcon.displayName = "CheckboxCheckIcon";

export default CheckIcon;
