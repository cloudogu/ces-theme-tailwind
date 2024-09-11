import Label from "@src/deprecated_components/inputs/Label";
import React, { useContext} from "react";
import InputErrors from "../../inputs/InputErrors";
import TextInput from "../../inputs/TextInput";
import {FormContext} from "../Form";
import type {ComponentPropsWithoutRef} from "react";
import {Hint} from "@components/inputs/label";

export interface ValidatedTextInputProps extends Omit<ComponentPropsWithoutRef<"input">, "type" | "children" | "hint" | "name"> {
    children: string;
    hint?: string;
    name: string;
    type: "text" | "password";
    "data-testid"?: string;
}

export default function ValidatedTextInput({
    name,
    children,
    hint,
    type,
    disabled,
    "data-testid": dataTestid,
    ...props
}: ValidatedTextInputProps) {
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
        <Label
            htmlFor={name}
            variant={(variant === "primary") ? "secondary" : variant}
            data-testid={`${dataTestid ?? "validated-input"}-label`}
        >
            {children}
        </Label>
        {hint && <Hint>{hint}</Hint>}
        <TextInput
            {...props}
            variant={variant}
            type={type}
            disabled={disabled}
            id={name}
            name={name}
            onChange={formHandler.handleChange}
            onBlur={formHandler.handleBlur}
            value={formHandler.values[name]}
            data-testid={`${dataTestid ?? "validated-input"}-input`}
        />
        {isTouched && <InputErrors errors={errors} data-testid={`${dataTestid ?? "validated-input"}-input-error`}/>}
    </>;
}
