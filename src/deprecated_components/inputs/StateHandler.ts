import type {ChangeEventHandler, FocusEventHandler} from "react";

export type StateHandler = {
    handleChange: ChangeEventHandler<any>;
    handleBlur: FocusEventHandler<any>;
    values: { [key: string]: any };
    touched: { [key: string]: any };
    errors: { [key: string]: any };
    isFieldValidated: (_: string) => boolean;
    setFieldValue: (_key: string, _value: any, _shouldValidate?: boolean | undefined) => void;
};
