import { render } from "@testing-library/react";
import SegmentedNotification from "./SegmentedNotification";
import Notification from "./Notification";
import Title from "./Title";
import { createRef } from "react";

describe("<Title/>", () => {
    test("should render title", () => {
        const { queryByTestId } = render(
            <SegmentedNotification>
                <Title data-testid="title-test">Title</Title>
            </SegmentedNotification>
        );

        expect(queryByTestId("title-test")).toBeTruthy();
    });

    describe('title level', () => {
        test("should render level 1", async () => {
            const { queryByTestId } = render(
                <Notification data-testid={"element"} notificationTitle={""} description={""} titleLevel={1}/>
            );

            expect((queryByTestId("element-title") as HTMLElement).nodeName).toEqual("H1");
        });

        test("should render level 2", async () => {
            const { queryByTestId } = render(
                <Notification data-testid={"element"} notificationTitle={""} description={""} titleLevel={2}/>
            );

            expect((queryByTestId("element-title") as HTMLElement).nodeName).toEqual("H2");
        });

        test("should render default level 2", async () => {
            const { queryByTestId } = render(
                <Notification data-testid={"element"} notificationTitle={""} description={""}/>
            );

            expect((queryByTestId("element-title") as HTMLElement).nodeName).toEqual("H2");
        });
    });

    test("should forward ref", () => {
        const refHead = createRef<HTMLHeadingElement>();

        const { getByTestId } = render(
            <SegmentedNotification>
                <Title ref={refHead} data-testid="title-test">
                    Description
                </Title>
            </SegmentedNotification>
        );

        const element = getByTestId("title-test");

        expect(refHead.current).toBeTruthy();
        expect(refHead.current).toBe(element);
    });
});
