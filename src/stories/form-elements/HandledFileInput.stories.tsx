import React from 'react';
import FileInput from "@deprecated_components/inputs/FileInput";
import useFormHandler from "@src/deprecated_hooks/useFormHandler";
import {Form} from "@deprecated_components/forms";
import {Button} from "@src/index"

export default {
    title: 'Old CES Theme/Form elements/HandledFileInput',
    component: FileInput,
};

// @ts-ignore
const Template = (args) => {
    const handler = useFormHandler<any>({
        enableReinitialize: false,
        onSubmit: () => {
            handler.resetForm();
        },
        initialValues: {"input": undefined},
    });
    return <Form handler={handler}><Form.HandledFileInput name={"input"} {...args} /><Button variant={"primary"} type={"submit"}>Reset</Button></Form>;
};

export const Primary = Template.bind({});

// @ts-ignore
Primary.args = {
    variant: "primary",
    disabled: false
};
