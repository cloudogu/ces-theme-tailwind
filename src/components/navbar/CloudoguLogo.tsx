import OriginalCloudoguLogo from "@components/icons/CloudoguLogo";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type NavbarCloudoguLogoProps = Omit<ComponentPropsWithoutRef<"svg">, "children"> & Testid;

type ComponentType = ComponentTypeWithRef<NavbarCloudoguLogoProps, SVGSVGElement>;

const CloudoguLogo = forwardRef<SVGSVGElement, NavbarCloudoguLogoProps>((props, ref) => (
    <OriginalCloudoguLogo
        {...props}
        ref={ref}
        className={
            twMerge(
                "h-8",
                props.className,
            )
        }
    />
)) as ComponentType;

CloudoguLogo.displayName = "CloudoguLogoNavbar";

export default CloudoguLogo;