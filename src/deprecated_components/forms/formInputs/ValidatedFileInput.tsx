import React, { useContext} from "react";

import InputErrors from "../../inputs/InputErrors";
import SegmentedLabel from "@components/inputs/label/SegmentedLabel";
import {FormContext} from "../Form";
import HandledFileInput from "./HandledFileInput";
import type {ComponentPropsWithoutRef} from "react";

export interface ValidatedFileInputProps extends Omit<ComponentPropsWithoutRef<"input">, "type" | "children" | "name"> {
    children: string;
    name: string;
    "data-testid"?: string;
}

export default function ValidatedFileInput({
    name,
    children,
    disabled,
    "data-testid": dataTestid,
    ...props
}: ValidatedFileInputProps) {
    const {formHandler} = useContext(FormContext);
    const shouldBeValidated = formHandler.isFieldValidated(name);
    const isTouched = formHandler.touched[name];
    const errors = formHandler.errors[name];

    let variant: "primary" | "danger" | "success" = "primary";
    if (errors && isTouched && shouldBeValidated) {
        variant = "danger";
    } else if (isTouched && shouldBeValidated) {
        variant = "success";
    }

    return <>
        <SegmentedLabel
            htmlFor={name}
            data-testid={`${dataTestid ?? "validated-input"}-label`}
        >
            {children}
        </SegmentedLabel>
        <HandledFileInput
            {...props}
            variant={variant}
            disabled={disabled}
            id={name}
            name={name}
            onChange={formHandler.handleChange}
            onBlur={formHandler.handleBlur}
            data-testid={`${dataTestid ?? "validated-input"}-input`}
        />
        {isTouched && <InputErrors errors={errors} data-testid={`${dataTestid ?? "validated-input"}-input-error`}/>}
    </>;
}
