import { CesIconMinus } from "@src/components/icons";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type { IconProps } from "@phosphor-icons/react";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { ComponentPropsWithoutRef} from "react";


export type CheckboxIconMinusProps = ComponentPropsWithoutRef<"svg"> & IconProps & Testid;

type ComponentType = ComponentTypeWithRef<CheckboxIconMinusProps, SVGSVGElement>;

const CheckIconMinus = forwardRef<SVGSVGElement, CheckboxIconMinusProps>((props, ref) => (
    <CesIconMinus
        weight={"bold"}
        size={24}
        {...props}
        ref={ref}
        className={
            twMerge(props.className,
                "text-inverted-text",
            )
        } />
)) as ComponentType;

CheckIconMinus.displayName = "CheckboxCheckIconMinus";

export default CheckIconMinus;
