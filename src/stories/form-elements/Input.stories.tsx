import { Input as CesInput, InputProps } from "@src/index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<InputProps> = {
    title: 'CES Theme/Form elements/Input/Input',
    component: CesInput,
    argTypes: {
        variant: {
            control: "select",
            defaultValue: "neutral",
            options: ["neutral", "success", "danger"],
            description: "Variants of the input that applies a color to all elements." 
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
        "data-testid": "story-input",
    },
};

export default meta;

export const Input: StoryObj<InputProps> = {
    args: {},
};