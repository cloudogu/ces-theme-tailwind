import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import Description from "./Description";
import SegmentedNotification from "./SegmentedNotification";
import Title from "./Title";
import type {SegmentedNotificationProps} from "./SegmentedNotification";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type { ReactNode} from "react";

export type NotificationProps = Omit<SegmentedNotificationProps, "children"> & Testid & {
    notificationTitle: ReactNode,
    description: ReactNode,
    titleLevel?: 1 | 2;
};

type ComponentType = ComponentTypeWithRef<NotificationProps, HTMLDivElement>;

const Notification = forwardRef<HTMLDivElement, NotificationProps>(({titleLevel, notificationTitle, description, ...props}, ref) => (
    <SegmentedNotification
        {...props}
        ref={ref}
    >
        <Title data-testid={subTestid(props, "title")} level={titleLevel}>{notificationTitle}</Title>
        <Description data-testid={subTestid(props, "description")}>{description}</Description>
    </SegmentedNotification>
)) as ComponentType;

Notification.displayName = "Notification";

export default Notification;