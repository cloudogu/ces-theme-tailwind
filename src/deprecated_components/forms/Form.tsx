import type {ComponentPropsWithoutRef} from "react";
import {createContext} from "react";
import type {FormHandler} from "@src/deprecated_hooks/useFormHandler";
import type {StateHandler} from "../inputs/StateHandler";

export interface FormParams extends ComponentPropsWithoutRef<"form">{
    handler: FormHandler<any>;
    "data-testid"?: string;
}

export type SubmitHandler = {
    handleSubmit: any;
};

type FormContextProps = {
    formHandler: SubmitHandler & StateHandler,
};
export const FormContext = createContext<FormContextProps>({
    formHandler: {
        isFieldValidated: () => false,
        values: {},
        handleBlur: () => {
        },
        handleChange: () => {
        },
        handleSubmit: () => {
        },
        errors: {},
        touched: {},
        setFieldValue: async () => {
        },
    },
});

const Form = (props: FormParams) => (
    <FormContext.Provider value={{formHandler: props?.handler}}>
        <form
            data-testid={props["data-testid"]}
            onSubmit={props?.handler?.handleSubmit}
            className={"flex flex-col font-sans"}
        >
            {props?.children}
        </form>
    </FormContext.Provider>
);
export default Form;
