import { render } from "@testing-library/react";
import SegmentedNotification from "./SegmentedNotification";
import Description from "./Description";
import { createRef } from "react";

describe("<Description/>", () => {
    test("should render description", () => {
        const { queryAllByTestId } = render(
            <SegmentedNotification>
                <Description data-testid="description-test">Description</Description>
            </SegmentedNotification>
        );

        expect(queryAllByTestId("description-test")).toBeTruthy();
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLDivElement>();

        const { getByTestId } = render(
            <SegmentedNotification>
                <Description ref={refDiv} data-testid="description-test">
                    Description
                </Description>
            </SegmentedNotification>
        );

        const element = getByTestId("description-test");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });

    const variants: {
        variant: "neutral" | "brand" | "danger" | undefined;
        expClass: string;
    }[] = [
        {
            variant: "neutral",
            expClass: "text-default-text",
        },
        {
            variant: "brand",
            expClass: "text-default-text",
        },
        {
            variant: "danger",
            expClass: "text-danger",
        },
        {
            variant: undefined,
            expClass: "text-default-text",
        },
    ];

    test.each(variants)("should render description with %s color", (variants) => {
        const { getByTestId } = render(
            <SegmentedNotification variant={variants.variant}>
                <Description data-testid="description-test">Description</Description>
            </SegmentedNotification>
        );

        const element = getByTestId("description-test");

        expect(element.className).toContain(variants.expClass);
    });
});
