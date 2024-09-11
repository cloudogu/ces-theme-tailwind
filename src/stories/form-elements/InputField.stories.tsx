import { InputField as CesInputField, InputFieldProps,  } from "@src/index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<InputFieldProps> = {
    title: 'CES Theme/Form elements/Input/InputField',
    component: CesInputField,
    argTypes: {
        variant: {
            control: "select",
            defaultValue: "neutral",
            options: ["neutral", "success", "danger"],
            description: "Variants of the input field that applies a color to all elements." 
        },
        type: {
            control: "select",
            options: [
                'color'
                , 'date'
                , 'datetime-local'
                , 'email'
                , 'hidden'
                , 'month'
                , 'number'
                , 'password'
                , 'text'
                , 'time'
                , 'week'
            ],
            description: "Type of the input field."
        },
        disabled: {
            control: "boolean",
            defaultValue: false,
            description: "Deactivates the input field so that editing is no longer possible."
        },
        "data-testid": {
            description: "Optional test ID to facilitate integration tests."
        },
    },
    args: {
        variant: "neutral",
        disabled: false,
        type: "text",
        label: "My label text",
        hint: "This is a super helpful hint",
        errorHint: "An error occured",
        "data-testid": "story-input-field",
    },
};

export default meta;

export const InputField: StoryObj<InputFieldProps> = {
    args: {},
};