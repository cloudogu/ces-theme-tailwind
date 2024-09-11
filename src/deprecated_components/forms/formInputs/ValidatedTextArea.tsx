import React, { useContext} from "react";
import InputErrors from "../../inputs/InputErrors";
import TextArea from "../../inputs/TextArea";
import SegmentedLabel from "@components/inputs/label/SegmentedLabel";

import {FormContext} from "../Form";
import type {ComponentPropsWithoutRef} from "react";

export interface ValidatedTextAreaProps extends Omit<ComponentPropsWithoutRef<"textarea">, "children" | "name"> {
    children: string;
    name: string;
    "data-testid"?: string;
}

export default function ValidatedTextArea({
    name,
    children,
    disabled,
    "data-testid": dataTestid,
    ...props
}: ValidatedTextAreaProps) {
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
        <TextArea
            {...props}
            variant={variant}
            disabled={disabled}
            id={name}
            name={name}
            onChange={formHandler.handleChange}
            onBlur={formHandler.handleBlur}
            value={formHandler.values[name]}
            data-testid={`${dataTestid ?? "validated-input"}-area`}
        />
        {isTouched && <InputErrors errors={errors} data-testid={`${dataTestid ?? "validated-input"}-area-error`}/>}
    </>;
}
