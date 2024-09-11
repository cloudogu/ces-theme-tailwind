import {Meta} from "@storybook/react";
import React from "react";
import {Hint, HintProps} from "@src/index";

const meta: Meta<HintProps> = {
    title: 'CES Theme/Form elements/Hint',
    argTypes: {
        variant: {
            control: "select",
            options: ["neutral", "danger"],
            defaultValue: "neutral",
            description: "Define the variant of the hint",
        },
    },
};

const Template = ({...args}: HintProps) => {
    return (
        <>
            <Hint {...args}>
                Hinweis Text
            </Hint>
        </>
    );
};

const ShortVersionHint = () => (
    <>
        <Hint>
            Hinweis Text
        </Hint>
    </>
);

export const Playground = Template.bind({}) as unknown as { args: {} };

Playground.args = {
    variant: "neutral",
    text: "Mein Hinweis Text",
};

export default meta;
