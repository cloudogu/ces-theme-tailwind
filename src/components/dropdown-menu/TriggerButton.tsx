import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../constants/DefaultStyles";
import CommonIcons from "./CommonIcons";
import Trigger from "./Trigger";
import type Testid from "../../types/Testid";
import type { ComponentTypeWithRef } from "@src/types/ComponentTypeWithRef";
import type {ComponentPropsWithoutRef} from "react";

export type DropdownMenuTriggerButtonProps = Omit<ComponentPropsWithoutRef<"button">, "color"> & Testid

type ComponentType =
    ComponentTypeWithRef<DropdownMenuTriggerButtonProps, HTMLButtonElement>
    & { CommonIcons: typeof CommonIcons };

const TriggerButton: ComponentType = forwardRef<HTMLButtonElement, DropdownMenuTriggerButtonProps>((props, ref) => (
    <Trigger asChild={true}>
        <button
            {...props}
            ref={ref}
            onClick={props.disabled ? () => {
            } : props.onClick}
            className={
                twMerge(
                    DefaultStyles.DefaultTextStyling,
                    DefaultStyles.TextSize2Xl,
                    DefaultStyles.ColorGroups.Neutral.Tertiary,
                    DefaultStyles.Focus,
                    "outline-0 rounded h-10 w-10 flex items-center justify-center",
                    "disabled:pointer-events-none",
                    props.className
                )
            }
        />
    </Trigger>
)) as ComponentType;

TriggerButton.displayName = "TriggerButton";
TriggerButton.CommonIcons = CommonIcons;
export default TriggerButton;