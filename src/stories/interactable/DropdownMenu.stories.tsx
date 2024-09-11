import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import {
    CesIconActivity,
    ConfirmDialog,
    DropdownMenu,
    DropdownMenuItemProps,
    SegmentedDropdownMenu,
    TextWithIcon
} from "@src/index";

const meta: Meta<DropdownMenuItemProps> = {
    title: "CES Theme/Interactable/DropdownMenu",
    argTypes: {
        color: {
            control: "select",
            options: ["brand", "neutral", "danger", "success"],
            defaultValue: "brand",
            description: "Apply a color to an Element. This attribute can be applied to each list element separate."
        },
    },
    args: {
        color: "brand"
    }
};

function Dropdown(args: any) {
    return (<>
            <DropdownMenu key={args}>
                <DropdownMenu.Group>
                    <DropdownMenu.ButtonItem {...args}>Ich bin button 1!</DropdownMenu.ButtonItem>
                    <DropdownMenu.ButtonItem {...args}>Ich bin button 2!</DropdownMenu.ButtonItem>
                    <DropdownMenu.ButtonItem {...args}>Ich bin button 3!</DropdownMenu.ButtonItem>
                    <DropdownMenu.ButtonItem {...args}>
                        <TextWithIcon icon={<CesIconActivity/>}>
                            Ich bin button 4!
                        </TextWithIcon>
                    </DropdownMenu.ButtonItem>
                </DropdownMenu.Group>

                <DropdownMenu.Group>
                    <DropdownMenu.LinkItem {...args}>Ich bin link 1!</DropdownMenu.LinkItem>
                    <DropdownMenu.LinkItem {...args}>Ich bin link 2!</DropdownMenu.LinkItem>
                    <DropdownMenu.LinkItem {...args}>
                        <TextWithIcon icon={<CesIconActivity/>}>
                            Ich bin link 3!
                        </TextWithIcon>
                    </DropdownMenu.LinkItem>
                    <DropdownMenu.LinkItem {...args}>Ich bin link 4!</DropdownMenu.LinkItem>
                </DropdownMenu.Group>

                <DropdownMenu.Group>
                    <DropdownMenu.RouterLinkItem {...args} to={"#"}>
                        Ich bin router-link 1!
                    </DropdownMenu.RouterLinkItem>
                    <DropdownMenu.RouterLinkItem {...args} to={"#"}>
                        <TextWithIcon icon={<CesIconActivity/>}>
                            Ich bin router-link 2!
                        </TextWithIcon>
                    </DropdownMenu.RouterLinkItem>
                    <DropdownMenu.RouterLinkItem {...args} to={"#"}>Ich bin router-link 3!</DropdownMenu.RouterLinkItem>
                    <DropdownMenu.RouterLinkItem {...args} to={"#"}>Ich bin router-link 4!</DropdownMenu.RouterLinkItem>
                </DropdownMenu.Group>
            </DropdownMenu>
        </>
    );
}

export const DropdownMenuShortHiddenStory: StoryObj<DropdownMenuItemProps> = {
    render: ({color}: DropdownMenuItemProps) => {
        DropdownMenu.displayName = "DropdownMenu";
        DropdownMenu.ButtonItem.displayName = "DropdownMenu.ButtonItem";
        DropdownMenu.LinkItem.displayName = "DropdownMenu.LinkItem";
        DropdownMenu.Group.displayName = "DropdownMenu.Group";
        DropdownMenu.RouterLinkItem.displayName = "DropdownMenu.RouterLinkItem";
        DropdownMenu.Item.displayName = "DropdownMenu.Item";
        ConfirmDialog.displayName = "ConfirmDialog";

        return (
            <BrowserRouter>
                <DropdownMenu>
                    <DropdownMenu.ButtonItem color={color}>I am a button item</DropdownMenu.ButtonItem>
                    <DropdownMenu.LinkItem color={color} href={"#"}>I am a link item</DropdownMenu.LinkItem>
                    <DropdownMenu.Group>
                        <DropdownMenu.RouterLinkItem
                            color={color}
                            to={"#"}>
                            I am a router link item!
                        </DropdownMenu.RouterLinkItem>
                        <ConfirmDialog variant={"standard"} dialogTitle={"Title?"} dialogBody={"Body?"}>
                            <DropdownMenu.Item color={color} onSelect={(e) => e.preventDefault()}>
                                <button>I cann trigger a modal window!</button>
                            </DropdownMenu.Item>
                        </ConfirmDialog>
                    </DropdownMenu.Group>
                </DropdownMenu>
            </BrowserRouter>
        );
    },
    args: {},
};

export const DropdownMenuLongHiddenStory: StoryObj<DropdownMenuItemProps> = {
    render: ({color}: DropdownMenuItemProps) => {
        (BrowserRouter as any).displayName = "BrowserRouter";
        SegmentedDropdownMenu.displayName = "SegmentedDropdownMenu";
        SegmentedDropdownMenu.TriggerButton.displayName = "SegmentedDropdownMenu.TriggerButton";
        (SegmentedDropdownMenu.TriggerButton.CommonIcons.ThreeDotIcon as any).displayName = "SegmentedDropdownMenu.TriggerButton.CommonIcons.ThreeDotIcon";
        SegmentedDropdownMenu.Content.displayName = "SegmentedDropdownMenu.Content";
        SegmentedDropdownMenu.Content.ButtonItem.displayName = "SegmentedDropdownMenu.Content.ButtonItem";
        SegmentedDropdownMenu.Content.LinkItem.displayName = "SegmentedDropdownMenu.Content.LinkItem";
        SegmentedDropdownMenu.Content.Group.displayName = "SegmentedDropdownMenu.Content.Group";
        SegmentedDropdownMenu.Content.RouterLinkItem.displayName = "SegmentedDropdownMenu.Content.RouterLinkItem";
        SegmentedDropdownMenu.Content.Item.displayName = "SegmentedDropdownMenu.Content.Item";

        return (
            (
                <BrowserRouter>
                    <SegmentedDropdownMenu>
                        <SegmentedDropdownMenu.TriggerButton>
                            <SegmentedDropdownMenu.TriggerButton.CommonIcons.ThreeDotIcon/>
                        </SegmentedDropdownMenu.TriggerButton>
                        <SegmentedDropdownMenu.Content>
                            <SegmentedDropdownMenu.Content.ButtonItem color={color}>I am a button
                                item</SegmentedDropdownMenu.Content.ButtonItem>
                            <SegmentedDropdownMenu.Content.LinkItem color={color} href={"#"}>I am a link
                                item</SegmentedDropdownMenu.Content.LinkItem>
                            <SegmentedDropdownMenu.Content.Group>
                                <SegmentedDropdownMenu.Content.RouterLinkItem
                                    color={color}
                                    to={"#"}>
                                    I am a router link item!
                                </SegmentedDropdownMenu.Content.RouterLinkItem>
                                <ConfirmDialog variant={"standard"} dialogTitle={"Title?"} dialogBody={"Body?"}>
                                    <SegmentedDropdownMenu.Content.Item color={color}
                                                                        onSelect={(e) => e.preventDefault()}>
                                        <button>I cann trigger a modal window!</button>
                                    </SegmentedDropdownMenu.Content.Item>
                                </ConfirmDialog>
                            </SegmentedDropdownMenu.Content.Group>
                        </SegmentedDropdownMenu.Content>
                    </SegmentedDropdownMenu>
                </BrowserRouter>
            )
        );
    },
    args: {},
};

const Template = (args: any) => {
    return (
        <Router>
            <div className={`h-[calc(100vh-2rem)] flex flex-col justify-between`}>
                <div className={"flex justify-center flex-row"}>
                    <Dropdown {...args}/>
                </div>
                <div className={"flex justify-between"}>
                    <Dropdown {...args}/>
                    <div>
                        <Dropdown {...args}/>
                        <Dropdown {...args}/>
                    </div>
                    <Dropdown {...args}/>
                </div>
                <div className={"flex justify-center"}>
                    <Dropdown {...args}/>
                </div>
            </div>
        </Router>
    );
};

export const Playground = Template.bind({}) as any;
export default meta;
