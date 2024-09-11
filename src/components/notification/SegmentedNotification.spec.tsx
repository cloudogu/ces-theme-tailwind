import { render } from "@testing-library/react";
import SegmentedNotification from "./SegmentedNotification";
import { createRef } from "react";

describe("<SegmentedNotification/>", () => {
    test("should render notification", () => {
        const { queryByTestId } = render(<SegmentedNotification data-testid="notification-test">Test</SegmentedNotification>);

        expect(queryByTestId("notification-test")).toBeTruthy();
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLDivElement>();

        const { getByTestId } = render(
            <SegmentedNotification ref={refDiv} data-testid="notification-test">
                Test
            </SegmentedNotification>
        );

        const element = getByTestId("notification-test");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });

    const variants: {
        variant: "neutral" | "brand" | "danger" | undefined;
        expClass: string;
    }[] = [
        {
            variant: "neutral",
            expClass: "border-neutral",
        },
        {
            variant: "brand",
            expClass: "border-brand",
        },
        {
            variant: "danger",
            expClass: "border-danger",
        },
        {
            variant: undefined,
            expClass: "border-neutral",
        },
    ];

    test.each(variants)("should render notification with %s border color", (variants) => {
        const { getByTestId } = render(
            <SegmentedNotification variant={variants.variant} data-testid="notification-test">
                Test
            </SegmentedNotification>
        );

        const element = getByTestId("notification-test");

        expect(element.className).toContain(variants.expClass);
    });

    test("should apply styles", () => {
        const { getByTestId } = render(
            <SegmentedNotification data-testid="notification-test" className="test">
                Test
            </SegmentedNotification>
        );

        const element = getByTestId("notification-test");

        "relative w-full p-default-2x text-default-text bg-default-background".split(" ").forEach((className) => (
            expect(element.className).toContain(className)
        ));

        "desktop:border-[6px] mobile:border-t-[6px] mobile:border-b-[6px]".split(" ").forEach((className) => (
            expect(element.className).toContain(className)
        ));

        expect(element.className).toContain("test");
    });
});
