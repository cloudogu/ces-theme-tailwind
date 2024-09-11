import {Meta} from "@storybook/react";
import React from "react";
import {SegmentedLabel} from "@src/index";
import {Label, LabelProps} from "@src/index";
import {Input} from "@src/index";

const meta: Meta<LabelProps> = {
    title: 'CES Theme/Form elements/Label',
    argTypes: {
        variant: {
            control: "select",
            options: ["neutral", "danger", "success"],
            defaultValue: "neutral",
            description: "Define the variant of the label",
        },
        text: {
            control: "text",
        },
        hint: {
            control: "text",
        },
        errorHint: {
            control: "text",
        }
    },
};

const Template = ({text, hint, errorHint, ...args}: LabelProps) => {
    return (
        <>
            <Label {...args} text={text} hint={hint} errorHint={errorHint}>
                <Input type="text"/>
            </Label>

            <Label{...args} htmlFor={"label-1"} text={text} hint={hint} errorHint={errorHint}/>
            <Input type="text" id={"label-1"}/>

            <SegmentedLabel {...args}>
                <SegmentedLabel.TextContainer>
                    {args.variant === "danger" && <SegmentedLabel.TextContainer.DangerIcon/>}
                    {args.variant === "success" && <SegmentedLabel.TextContainer.SuccessIcon/>}
                    {text}
                </SegmentedLabel.TextContainer>
                {args.variant === "danger" && errorHint && <SegmentedLabel.Hint variant={"danger"}>{errorHint}</SegmentedLabel.Hint>}
                {hint && <SegmentedLabel.Hint>{hint}</SegmentedLabel.Hint>}
                <Input type="text"/>
            </SegmentedLabel>

            <SegmentedLabel {...args} htmlFor={"label-2"}>
                <SegmentedLabel.TextContainer>
                    {args.variant === "danger" && <SegmentedLabel.TextContainer.DangerIcon/>}
                    {args.variant === "success" && <SegmentedLabel.TextContainer.SuccessIcon/>}
                    {text}
                </SegmentedLabel.TextContainer>
            </SegmentedLabel>
            {args.variant === "danger" && errorHint && <SegmentedLabel.Hint variant={"danger"}>{errorHint}</SegmentedLabel.Hint>}
            {hint && <SegmentedLabel.Hint>{hint}</SegmentedLabel.Hint>}
            <Input type="text" id={"label-2"}/>
        </>
    );
};

const ShortVersionInputEmbedded = () => (
    <Label text={"my label text"} hint={"my hint text"} errorHint={"my error hint text"}>
        <Input type="text"/>
    </Label>
);
const ShortVersionInputOutside = () => (
    <>
        <Label htmlFor={"label-1"} text={"my label text"} hint={"my hint text"} errorHint={"my error hint text"}/>
        <Input type="text" id={"label-1"}/>
    </>
);
const LongVersionInputEmbedded = (variant: "danger" | "success" | "neutral") => (
    <SegmentedLabel>
        <SegmentedLabel.TextContainer>
            {variant === "danger" && <SegmentedLabel.TextContainer.DangerIcon/>}
            {variant === "success" && <SegmentedLabel.TextContainer.SuccessIcon/>}
            my label text
        </SegmentedLabel.TextContainer>
        <SegmentedLabel.Hint variant={"danger"}>my error hint text</SegmentedLabel.Hint>
        <SegmentedLabel.Hint>my hint text</SegmentedLabel.Hint>
        <Input type="text"/>
    </SegmentedLabel>
);
const LongVersionInputOutside = (variant: "danger" | "success" | "neutral") => (
    <>
        <SegmentedLabel htmlFor={"label-2"}>
            <SegmentedLabel.TextContainer>
                {variant === "danger" && <SegmentedLabel.TextContainer.DangerIcon/>}
                {variant === "success" && <SegmentedLabel.TextContainer.SuccessIcon/>}
                my label text
            </SegmentedLabel.TextContainer>
        </SegmentedLabel>
        <SegmentedLabel.Hint variant={"danger"}>my error hint text</SegmentedLabel.Hint>
        <SegmentedLabel.Hint>my hint text</SegmentedLabel.Hint>
        <Input type="text" id={"label-2"}/>
    </>
);

export const Playground = Template.bind({}) as unknown as { args: {} };

Playground.args = {
    variant: "neutral",
    text: "Mein Label Text",
};

export default meta;
