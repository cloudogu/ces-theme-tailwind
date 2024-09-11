import {Notification, SegmentedNotification, SegmentedNotificationProps} from "@src/index";
import {Meta, StoryObj} from "@storybook/react";
import {ReactNode} from "react";

type ActualProps = SegmentedNotificationProps & {
    titleLevel: 1 | 2;
    notificationTitle: ReactNode;
    description: ReactNode;
};

const meta: Meta<ActualProps> = {
    title: 'CES Theme/General/Notification',
    component: SegmentedNotification,
    argTypes: {
        variant: {
            control: "select",
            defaultValue: "neutral",
            options: ["neutral", "danger", "brand"],
            description: "Variants of the alert that applies a color to all elements."
        },
        titleLevel: {
            control: "select",
            options: [1, 2],
            description: "Optional: Heading level of the notification title."
        },
        notificationTitle: {
            control: "text",
            defaultValue: "Notification",
            description: "The headline of the notification."
        },
        description: {
            control: "text",
            defaultValue: "This is the description of the Notification",
            description: "The text of the notification."
        }
    },
    args: {
        variant: "neutral",
        notificationTitle: "Notification",
        description: "This is the description of the Notification",
    },
};

export default meta;

SegmentedNotification.displayName = "SegmentedNotification";
SegmentedNotification.Title.displayName = "SegmentedNotification.Title";
SegmentedNotification.Description.displayName = "SegmentedNotification.Description";

export const Desktop: StoryObj<ActualProps> = {
    render: ({variant}) => (
        <SegmentedNotification variant={variant}>
            <SegmentedNotification.Title>Notification</SegmentedNotification.Title>
            <SegmentedNotification.Description>This is the description of the
                Notification</SegmentedNotification.Description>
        </SegmentedNotification>
    ),
    args: {},
};
export const LongVariantHiddenStory: StoryObj<ActualProps> = {
    render: ({variant}) => (
        <SegmentedNotification variant={variant}>
            <SegmentedNotification.Title>Notification</SegmentedNotification.Title>
            <SegmentedNotification.Description>
                This is the description of the Notification
            </SegmentedNotification.Description>
        </SegmentedNotification>
    ),
    args: {},
};
export const ShortVariantHiddenStory: StoryObj<ActualProps> = {
    render: ({variant, titleLevel, notificationTitle, description}) => (
        <Notification
            variant={variant}
            titleLevel={titleLevel}
            notificationTitle={notificationTitle}
            description={description}
        />
    ),
    args: {},
};

export const Mobile: StoryObj<ActualProps> = {
    render: Desktop.render,
    args: {
        ...Desktop.args,
    },
    parameters: {
        layout: "fullscreen",
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};
