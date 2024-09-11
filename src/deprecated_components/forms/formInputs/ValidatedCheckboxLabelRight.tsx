import React, { useContext} from "react";
import Checkbox from "../../inputs/Checkbox";
import InputErrors from "../../inputs/InputErrors";
import Label from "../../inputs/Label";
import {FormContext} from "../Form";
import type Testid from "../../../types/Testid";
import type {CheckboxVariant} from "../../inputs/Checkbox";
import type {ComponentPropsWithoutRef} from "react";

export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<"input">, "children" | "name">, Testid {
    children: string;
    name: string;
}

export default function ValidatedCheckboxLabelRight({children, name, ...props}: CheckboxProps) {
    const {formHandler} = useContext(FormContext);
    const shouldBeValidated = formHandler.isFieldValidated(name);
    const isTouched = formHandler.touched[name];
    const errors = formHandler.errors[name];

    let variant: CheckboxVariant = "primary";
    if (errors && isTouched && shouldBeValidated) {
        variant = "danger";
    } else if (isTouched && shouldBeValidated) {
        variant = "success";
    }

    return (
        <>
            <div className={"flex flex-row h-8 mt-2"}
                data-testid={props["data-testid"]}>
                <Checkbox
                    {...props}
                    variant={variant}
                    name={name}
                    id={name}
                    onChange={formHandler.handleChange}
                    onBlur={formHandler.handleBlur}
                    value={formHandler.values[name]}
                    data-testid={`${props["data-testid"]}-checkbox`}
                />
                <div className={"flex flex-col h-8 justify-center ml-2 mt-[2px]"}>
                    <Label
                        data-testid={`${props["data-testid"]}-label`}
                        className={"m-0 text-[15px] leading-[15px] cursor-pointer"}
                        variant={(variant === "primary") ? "secondary" : variant}
                        htmlFor={name}>
                        {children}
                    </Label>
                </div>
            </div>
            {isTouched && <InputErrors errors={errors} data-testid={`${props["data-testid"]}-checkbox-error`}/>}
        </>
    );
}
