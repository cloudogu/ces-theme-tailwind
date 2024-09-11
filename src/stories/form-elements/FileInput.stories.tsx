import React from 'react';
import FileInput from "@deprecated_components/inputs/FileInput";

export default {
    title: 'Old CES Theme/Form elements/File',
    component: FileInput,
};

// @ts-ignore
const Template = (args) => <FileInput {...args} />;

export const Primary = Template.bind({});

// @ts-ignore
Primary.args = {
    variant: "primary",
    disabled: false
}
