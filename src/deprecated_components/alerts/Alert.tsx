import React from "react";
import {twMerge} from "tailwind-merge";
import { CesIconX } from "@components/icons";
import type Testid from "@src/types/Testid";

export type AlertProps = {
    children: string | JSX.Element;
    variant: AlertVariant;
    onClose: () => void;
} & Testid;

export type AlertVariant = "primary" | "secondary" | "warning" | "success" | "danger";

export default function Alert({children, variant, onClose, "data-testid": dataTestId}: AlertProps) {
    return <div
        data-testid={dataTestId}
        className={
            twMerge("border rounded flex justify-between p-4",
                variant === "primary" ?
                    "border-alert-primary-inverse-border bg-alert-primary-inverse text-alert-primary-inverse-font" : "",
                variant === "secondary" ?
                    "border-alert-secondary-inverse-border bg-alert-secondary-inverse text-alert-secondary-inverse-font" : "",
                variant === "warning" ?
                    "border-alert-warning-inverse-border bg-alert-warning-inverse text-alert-warning-inverse-font" : "",
                variant === "success" ?
                    "border-alert-success-inverse-border bg-alert-success-inverse text-alert-success-inverse-font" : "",
                variant === "danger" ?
                    "border-alert-danger-inverse-border bg-alert-danger-inverse text-alert-danger-inverse-font" : "",
            )}>
        <div className={
            twMerge(
                variant === "primary" ? "text-alert-primary-inverse-font" : "",
                variant === "secondary" ?
                    "text-alert-secondary-inverse-font" : "",
                variant === "warning" ?
                    "text-alert-warning-inverse-font" : "",
                variant === "success" ?
                    "text-alert-success-inverse-font" : "",
                variant === "danger" ?
                    "text-alert-danger-inverse-font" : "",
            )}>
            {children}
        </div>
        <button
            onClick={onClose}
            data-testid={"cloudogu-alert-button"}
            type={"button"}
            className={twMerge("font-bold text-xl opacity-50 relative", "p-2",
                variant === "primary" ?
                    "text-primary-font hover:text-primary-font-active" : "",
                variant === "secondary" ?
                    "text-alert-secondary-font hover:text-alert-secondary-font-active" : "",
                variant === "warning" ?
                    "text-warning-font hover:text-warning-font-active" : "",
                variant === "success" ?
                    "text-success-font hover:text-success-font-active" : "",
                variant === "danger" ?
                    "text-danger-font hover:text-danger-font-active" : "",
            )}>
            <CesIconX className={"w-5 h-5 absolute top-0 right-0"}/>
        </button>
    </div>;
}

