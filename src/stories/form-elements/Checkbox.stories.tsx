import {Meta} from "@storybook/react";
import {SegmentedCheckbox} from "@src/index";
import {useState} from "react";
import {Checkbox} from "@src/index";
import {CheckboxField} from "@src/index";

const meta: Meta<any> = {
    title: 'CES Theme/Form elements/Checkbox',
    argTypes: {
        label: {
            control: "text",
        },
        alignLabel: {
            control: "select",
            options: ["LEFT", "RIGHT"],
        },
        disabled: {
            control: "boolean",
        },
        checked: {
            control: "select",
            options: [undefined, true, false, "indeterminate"],
        }
    },
    args: {
        label: "Ich bin ein Label!",
        alignLabel: "RIGHT",
        disabled: false,
        checked: undefined,
    },
};

const Template = ({...args}: any & { forceCheckedState: string }) => {
    return (
        <div className={"flex flex-col gap-6"}>
            <CheckboxField {...args}>{args.label}</CheckboxField>
            <div className={"flex flex-row gap-5"}>
                <Checkbox checked={true}/>
                <Checkbox checked={false}/>
                <Checkbox checked={"indeterminate"}/>
            </div>
            <div className={"flex flex-row gap-5"}>
                <Checkbox checked={true} disabled/>
                <Checkbox checked={false} disabled/>
                <Checkbox checked={"indeterminate"} disabled/>
            </div>
            <div>
                <ControlledExample/>
            </div>
        </div>
    );
};

const ControlledExample = () => {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>(true);
    return (
        <SegmentedCheckbox checked={checked} onCheckedChange={setChecked}>
            <SegmentedCheckbox.CheckboxIndicator>
                {checked === true && <SegmentedCheckbox.CheckboxIndicator.CheckIcon/>}
                {checked === "indeterminate" && <SegmentedCheckbox.CheckboxIndicator.CheckIconMinus/>}
            </SegmentedCheckbox.CheckboxIndicator>
        </SegmentedCheckbox>
    )
};

export const Playground = Template.bind({}) as unknown as { args: {} };

export default meta;
