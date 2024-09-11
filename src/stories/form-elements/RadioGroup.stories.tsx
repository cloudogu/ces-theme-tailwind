import { CesIconAddressBook, CesIconArmchair, CesIconCheck } from "@src/index";
import { SegmentedLabel } from "@src/index";
import { RadioGroup, RadioGroupProps } from "@src/index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<RadioGroupProps> = {
    title: "CES Theme/Form elements/RadioGroup",
    component: RadioGroup,
    args: {
        defaultValue: "option-one",
        disabled: false,
        orientation: "vertical",
        "data-testid": "story-radio-group",
    },
    argTypes: {
        defaultValue: {
            control: "text",
            defaultValue: "option-one",
            description: "The default value of the selected radio button.",
        },
        disabled: {
            control: "boolean",
            defaultValue: false,
            description: "Deactivates the radio group so that editing is no longer possible.",
        },
        orientation: {
            control: 'select',
            options: ["vertical", "horizontal"],
            defaultValue: "vertical",
            description: "The orientation of the radio group.",
        },
        "data-testid": {
            control: "text",
            description: "Optional test ID to facilitate integration tests.",
        },
    },
};

export const Item: StoryObj<RadioGroupProps> = {
    render: ({ defaultValue, disabled, orientation, ...args }) => (
        <RadioGroup defaultValue={defaultValue} disabled={disabled} orientation={orientation} data-testid={args["data-testid"]}>
            <div className="flex items-center space-x-4">
                <RadioGroup.Item value="option-one" id="option-one" />
                <SegmentedLabel htmlFor="option-one">Option One</SegmentedLabel>
            </div>
            <div className="flex items-center space-x-4">
                <RadioGroup.Item value="option-two" id="option-two" />
                <SegmentedLabel htmlFor="option-two">Option Two</SegmentedLabel>
            </div>
            <div className="flex items-center space-x-4">
                <RadioGroup.Item value="option-three" id="option-three" />
                <SegmentedLabel htmlFor="option-three">Option Three</SegmentedLabel>
            </div>
        </RadioGroup>
    ),
    args: {},
};

export const SegmentedItem: StoryObj<RadioGroupProps> = {
    render: ({ defaultValue, disabled, orientation, ...args }) => (
        <RadioGroup defaultValue={defaultValue} disabled={disabled} orientation={orientation} data-testid={args["data-testid"]}>
            <div className="flex items-center space-x-4">
                <RadioGroup.SegmentedItem value="option-one" id="option-one">
                    <RadioGroup.SegmentedItem.Indicator>
                        <CesIconArmchair className="h-3.5 w-3.5 fill-primary" />
                    </RadioGroup.SegmentedItem.Indicator>
                </RadioGroup.SegmentedItem>
                <SegmentedLabel htmlFor="option-one">Option One</SegmentedLabel>
            </div>
            <div className="flex items-center space-x-4">
                <RadioGroup.SegmentedItem value="option-two" id="option-two">
                    <RadioGroup.SegmentedItem.Indicator>
                        <CesIconCheck className="h-3.5 w-3.5 fill-primary" />
                    </RadioGroup.SegmentedItem.Indicator>
                </RadioGroup.SegmentedItem>
                <SegmentedLabel htmlFor="option-two">Option Two</SegmentedLabel>
            </div>
            <div className="flex items-center space-x-4">
                <RadioGroup.SegmentedItem value="option-three" id="option-three">
                    <RadioGroup.SegmentedItem.Indicator>
                        <CesIconAddressBook className="h-3.5 w-3.5 fill-primary" />
                    </RadioGroup.SegmentedItem.Indicator>
                </RadioGroup.SegmentedItem>
                <SegmentedLabel htmlFor="option-three">Option Three</SegmentedLabel>
            </div>
        </RadioGroup>
    ),
    args: {},
};

export const ItemField: StoryObj<RadioGroupProps> = {
    render: ({ defaultValue, disabled, orientation, ...args }) => (
        <RadioGroup defaultValue={defaultValue} disabled={disabled} orientation={orientation} data-testid={args["data-testid"]}>
            <RadioGroup.ItemField value="option-one" id="option-one" alignLabel="RIGHT" data-testid="field1">
                Option One
            </RadioGroup.ItemField>
            <RadioGroup.ItemField value="option-two" id="option-two" alignLabel="RIGHT" data-testid="field2">
                Option Two
            </RadioGroup.ItemField>
            <RadioGroup.ItemField value="option-three" id="option-three" alignLabel="RIGHT" data-testid="field3">
                Option Three
            </RadioGroup.ItemField>
            <RadioGroup.ItemField value="another-option" alignLabel="RIGHT" data-testid="field3">
                Another Option
            </RadioGroup.ItemField>
        </RadioGroup>
    ),
    args: {},
};

export default meta;