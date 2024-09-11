import React from "react";
import type {Meta} from "@storybook/react";
import {Button, ButtonProps} from "@src/index"
import {CesIconActivity} from "@src/index";
import {TextWithIcon} from "@src/index";

const meta: Meta<ButtonProps> = {
    title: "CES Theme/Form elements/Button",
    argTypes: {
        color: {
            control: "select",
            options: ["brand", "neutral", "danger", "success"],
            defaultValue: "brand",
            description: "Define the main color of the button (brand / neutral / danger / success)"
        },
        variant: {
            control: "select",
            options: ["primary", "secondary", "tertiary", "special"],
            defaultValue: "primary",
            description: "Define the variant of the button (primary /secondary / tertiary / special).",
        },
        size: {
            control: "radio",
            options: ["small", "regular", "large"],
            defaultValue: "regular",
            description: "Define the size of the button (small / regular / large).",
        },
        disabled: {
            control: "boolean",
            defaultValue: false,
        },
    },
};

const Buttons = (args: any) => (
    <>
        <div>
            <Button {...args} onClick={() => alert("clicked")}>Click me!</Button>
        </div>
        <div>
            <Button {...args} onClick={() => alert("clicked")}><CesIconActivity/></Button>
        </div>
        <div>
            <Button {...args} onClick={() => alert("clicked")}><TextWithIcon
                icon={<CesIconActivity/>}>Test</TextWithIcon></Button>
        </div>
    </>
);
const Template = (args: any) => (
    <div className={"flex flex-col ces-font-sans"}>
        <div className={"flex flex-row m-1 p-1 gap-default-2x"}>
            <Buttons {...args}/>
        </div>
        <div className={"flex flex-row bg-danger-weaker m-1 p-1 gap-default-2x"}>
            <Buttons {...args}/>
        </div>
        <div className={"flex flex-row bg-success-weaker m-1 p-1 gap-default-2x"}>
            <Buttons {...args}/>
        </div>
        <div className={"flex flex-row bg-brand-weaker m-1 p-1 gap-default-2x"}>
            <Buttons {...args}/>
        </div>
        <div className={"flex flex-row bg-neutral-weaker m-1 p-1 gap-default-2x"}>
            <Buttons {...args}/>
        </div>
    </div>
);

export const Playground = Template.bind({}) as unknown as {args: ButtonProps};

Playground.args = {
    color: "brand",
    variant: "primary",
    size: "regular",
    disabled: false
};

export default meta;
