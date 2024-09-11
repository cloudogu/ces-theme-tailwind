import HandledFileInput from "@src/deprecated_components/forms/formInputs/HandledFileInput";
import ValidatedFileInput from "@src/deprecated_components/forms/formInputs/ValidatedFileInput";
import ValidatedTextArea from "@src/deprecated_components/forms/formInputs/ValidatedTextArea";
import ValidatedTextInput from "@src/deprecated_components/forms/formInputs/ValidatedTextInput";
import InternalForm, {FormParams} from "./Form";
import ValidatedCheckboxLabelRight from "@deprecated_components/forms/formInputs/ValidatedCheckboxLabelRight";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

type ComponentType = ComponentTypeWithRef<FormParams, HTMLFormElement> & {
    ValidatedTextInput: typeof ValidatedTextInput,
    ValidatedTextArea: typeof ValidatedTextArea,
    ValidatedFileInput: typeof ValidatedFileInput,
    ValidatedCheckboxLabelRight: typeof ValidatedCheckboxLabelRight,
    HandledFileInput: typeof HandledFileInput,
};


const Form = Object.assign(InternalForm, {
    ValidatedTextInput: ValidatedTextInput,
    ValidatedTextArea: ValidatedTextArea,
    ValidatedFileInput: ValidatedFileInput,
    ValidatedCheckboxLabelRight: ValidatedCheckboxLabelRight,
    HandledFileInput: HandledFileInput,
}) as ComponentType;

export {Form};
