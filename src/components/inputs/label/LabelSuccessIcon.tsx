
import React, { forwardRef} from "react";
import {CesIconCheck} from "../../icons";
import type {IconProps} from "@phosphor-icons/react";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type LabelSuccessIconProps = ComponentPropsWithoutRef<"svg"> & IconProps & Testid;

type ComponentType = ComponentTypeWithRef<LabelSuccessIconProps, SVGElement>;


const LabelSuccessIcon = forwardRef<SVGSVGElement, LabelSuccessIconProps>((props, ref ) => (
    <CesIconCheck
        weight={"bold"}
        viewBox={"0 20 256 256"}
        ref={ref}
        {...props}
    />
)) as ComponentType;

export default LabelSuccessIcon;

LabelSuccessIcon.displayName = "LabelSucessIcon";
