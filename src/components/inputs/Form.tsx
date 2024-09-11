import React, { forwardRef} from "react";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type FormProps = ComponentPropsWithoutRef<"form"> & Testid;

type ComponentType = ComponentTypeWithRef<FormProps, HTMLFormElement>;

const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => (
    <form
        {...props}
        ref={ref}
    />
)) as ComponentType;

Form.displayName = "Form";

export default Form;