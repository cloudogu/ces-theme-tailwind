import type {Meta} from "@storybook/react";
import React, {useState} from "react";
import {SelectProps} from "@radix-ui/react-select";
import {SegmentedSelect, Select} from "../..";


const meta: Meta<SelectProps> = {
    title: "CES Theme/Form elements/Select",
    argTypes: {
        open: {
            defaultValue: false,
            description: "Force the open state. Note: This was added for test purpose and is not using the default behaviour of the open-prop.",
        },
        disabled: {
            defaultValue: false,
            description: "Disabled the input",
            type: "boolean",
        },
    },
};

const Template = (args: { open: boolean, disabled: boolean }) => {
    const [open, setOpen] = useState(args.open);
    return (
        <div className={"flex flex-col gap-6"}>
            <div>
                <StoryShort open={open || args.open} setOpen={setOpen} disabled={args.disabled}/>
            </div>
            <div>
                <StoryLong/>
            </div>
            <div>
                <StoryLonger/>
            </div>
        </div>
    );
};

const StoryShort = ({open, setOpen, disabled}: { open: boolean, setOpen: (_: boolean) => void, disabled: boolean }) => (
    <Select placeholder={"Select a fruit…"} open={open} onOpenChange={setOpen} className={"w-[240px]"}
            disabled={disabled}>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes">Grapes</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
        <Select.Item value="aubergine">Aubergine</Select.Item>
        <Select.Item value="broccoli">Broccoli</Select.Item>
        <Select.Item value="courgette">Courgette</Select.Item>
        <Select.Item value="leek">Leek</Select.Item>
        <Select.Item value="beef">Beef</Select.Item>
        <Select.Item value="chicken">Chicken</Select.Item>
        <Select.Item value="lamb">Lamb</Select.Item>
        <Select.Item value="pork">Pork</Select.Item>
    </Select>
);

const StoryLong = () => (
    <SegmentedSelect>
        <SegmentedSelect.TriggerButton className={"w-[210px]"}>
            Select a fruit…
        </SegmentedSelect.TriggerButton>
        <SegmentedSelect.Content>
            <SegmentedSelect.Content.Item value="apple">Apple</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="banana">Banana</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="blueberry">Blueberry</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="grapes">Grapes</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="pineapple">Pineapple</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="aubergine">Aubergine</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="broccoli">Broccoli</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="courgette">Courgette</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="leek">Leek</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="beef">Beef</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="chicken">Chicken</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="lamb">Lamb</SegmentedSelect.Content.Item>
            <SegmentedSelect.Content.Item value="pork">Pork</SegmentedSelect.Content.Item>
        </SegmentedSelect.Content>
    </SegmentedSelect>
);
const StoryLonger = () => (
    <SegmentedSelect>
        <SegmentedSelect.SegmentedTriggerButton className={"w-[180px]"}>
            <SegmentedSelect.SegmentedTriggerButton.Value placeholder={"Select a fruit…"}/>
            <SegmentedSelect.SegmentedTriggerButton.Icon>
                <SegmentedSelect.SegmentedTriggerButton.Icon.DefaultArrow/>
            </SegmentedSelect.SegmentedTriggerButton.Icon>
        </SegmentedSelect.SegmentedTriggerButton>
        <SegmentedSelect.Portal>
            <SegmentedSelect.Portal.Content>
                <SegmentedSelect.Portal.Content.ScrollUpButton>
                    <SegmentedSelect.Portal.Content.ScrollUpButton.Arrow/>
                </SegmentedSelect.Portal.Content.ScrollUpButton>
                <SegmentedSelect.Portal.Content.Viewport>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="apple">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Apple</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="banana">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Banana</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="blueberry">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Blueberry</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="grapes">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Grapes</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="pineapple">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Pineapple</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="aubergine">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Aubergine</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="broccoli">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Broccoli</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="courgette">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Courgette</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="leek">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Leek</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="beef">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Beef</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="chicken">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Chicken</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="lamb">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Lamb</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                    <SegmentedSelect.Portal.Content.Viewport.SegmentedItem value="pork">
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>Pork</SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Text>
                        <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                            <SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator.DefaultIcon/>
                        </SegmentedSelect.Portal.Content.Viewport.SegmentedItem.Indicator>
                    </SegmentedSelect.Portal.Content.Viewport.SegmentedItem>
                </SegmentedSelect.Portal.Content.Viewport>
                <SegmentedSelect.Portal.Content.ScrollDownButton>
                    <SegmentedSelect.Portal.Content.ScrollDownButton.Arrow/>
                </SegmentedSelect.Portal.Content.ScrollDownButton>
            </SegmentedSelect.Portal.Content>
        </SegmentedSelect.Portal>
    </SegmentedSelect>
);
export const Playground = Template.bind({}) as unknown as { args: {} };

Playground.args = {
    open: false,
    disabled: false,
};

export default meta;
