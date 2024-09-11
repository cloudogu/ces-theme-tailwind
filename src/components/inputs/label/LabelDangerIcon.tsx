
import React, { forwardRef} from "react";
import { CesIconWarning} from "../../icons";
import type {IconProps} from "@phosphor-icons/react";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";


export type LabelDangerIconProps = ComponentPropsWithoutRef<"svg"> & IconProps & Testid;

type ComponentType = ComponentTypeWithRef<LabelDangerIconProps, SVGSVGElement>;


const LabelDangerIcon = forwardRef<SVGSVGElement, LabelDangerIconProps>((props, ref) => (
    <CesIconWarning
        weight={"bold"}
        viewBox={"0 20 256 256"}
        ref={ref}
        {...props}
    />
)) as ComponentType;

export default LabelDangerIcon;

LabelDangerIcon.displayName = "LabelDangerIcon";
