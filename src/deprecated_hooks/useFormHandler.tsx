import type {FormikHelpers, FormikValues} from "formik";
import {useFormik} from "formik";
import type {ValidationError} from 'yup';

export interface FormHandlerConfig<T> {
    initialValues?: T;
    onSubmit: (_values: T, _formikHelpers: FormikHelpers<T>) => void | Promise<any>;
    validationSchema?: any | (() => any);
    enableReinitialize: boolean;
}

// This is a workaround to allow type extraction of a generic function
class Helper <T extends FormikValues> {
    Return = useFormik<T>(undefined as unknown as any);
}
export type FormHandler<T extends FormikValues> = Helper<T>["Return"] & {isFieldValidated: (_: string) => boolean}

/**
 * Create a custom validation function for a yup-validation-schema.
 * This implementation is necessary because yup skips after the first error but we want to see all errors.
 * @param schema
 */
export function createValidateSchemaFunction(
    schema: { validate: (_values: { [field: string]: any }, _props: any) => Promise<any> }): (_values: any) => any {
    if (!schema) {
        return () => true;
    }
    return values => schema
        .validate(values, {abortEarly: false, strict: false})
        .then(() => {
            return {};
        })
        .catch((error: ValidationError) => {
            return handleValidationError(error, Object.keys(values));
        });
}

/**
 * This function maps a ValidationError to an error object.
 * @param inner The validation error to map. It is deconstructed to its `inner`-Prop (nested errors)
 * @param availableKeys The available keys. Errors with a key that is not included in this array are skipped.
 */
export function handleValidationError({inner}: ValidationError, availableKeys: string[]): { [path: string]: string[] } {
    return inner
        .reduce((result: { [path: string]: string[] }, error: ValidationError) => {
            if (error.path && availableKeys.includes(error.path)) {
                if (!result[error.path]) {
                    result[error.path] = [];
                }
                result[error.path] = [...result[error.path], error.message];
            }
            return result;
        }, {} as { [path: string]: string[] });
}

/**
 * Create a form handler which can be passed to the 'Form'-Component and all input-components.
 * @param config The Configuration for the form handler.
 */
export default function useFormHandler<T extends { [field: string]: any }>(config: FormHandlerConfig<T>): FormHandler<T> {
    const validatedFields = (config?.validationSchema?.fields) ? Object.keys(config.validationSchema.fields) : [];

    return {
        ...useFormik<T>(
            {
                ...config,
                initialValues: (config.initialValues ?? {}) as T,
                validate: createValidateSchemaFunction(config.validationSchema),
            }
        ),
        isFieldValidated: (fieldName: string) => validatedFields.includes(fieldName),
    };
}

export type UseFormHandlerFunctions<T extends { [field: string]: any }> = ReturnType<typeof useFormHandler<T>>;