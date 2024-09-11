import Label from "@components/inputs/label/Label";
import {subTestid} from "@src/types/Testid";
import {forwardRef} from "react";
import Input from "./Input";
import type {InputProps} from "./Input";
import type { ReactNode} from "react";

export type InputFieldProps = Omit<InputProps, "children"> & {
    label: ReactNode;
    hint?: ReactNode;
    errorHint?: ReactNode;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((
    {
        variant,
        label,
        id,
        hint,
        errorHint,
        ...props
    }, ref) =>
    <Label
        data-testid={subTestid(props, "label")}
        text={label}
        variant={variant}
        htmlFor={id}
        hint={hint}
        errorHint={errorHint}
    >
        <Input
            {...props}
            variant={variant}
            ref={ref}
            id={id}
        />
    </Label>
);

InputField.displayName = "InputField";

export default InputField;
