import Toast from "./Toast";
import { render } from "@testing-library/react";
import Viewport from "./Viewport";
import { createRef } from "react";
import SegmentedProvider from "./SegmentedProvider";

describe("<Toast/>", () => {
    test("should render toast", () => {
        const { queryByTestId } = render(
            <SegmentedProvider>
                <Toast open data-testid="toast">
                    Test
                </Toast>
                <Viewport />
            </SegmentedProvider>
        );

        const element = queryByTestId("toast");

        expect(element).toBeTruthy();
        expect(element).toHaveTextContent("Test");
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLLIElement>();

        const { getByTestId } = render(
            <SegmentedProvider>
                <Toast open ref={refDiv} data-testid="toast">
                    Test
                </Toast>
                <Viewport />
            </SegmentedProvider>
        );

        const element = getByTestId("toast");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });

    const variants: {
        variant: "neutral" | "success" | "brand" | "danger" | undefined;
        expClass: string;
    }[] = [
        {
            variant: "neutral",
            expClass: "bg-neutral-weaker border-neutral",
        },
        {
            variant: "success",
            expClass: "bg-success-weaker border-success",
        },
        {
            variant: "brand",
            expClass: "bg-brand-weaker border-brand",
        },
        {
            variant: "danger",
            expClass: "bg-danger-weaker border-danger-strong",
        },
        {
            variant: undefined,
            expClass: "bg-neutral-weaker border-neutral",
        },
    ];

    test.each(variants)("should render toast with variant %s", ({ variant, expClass }) => {
        const { getByTestId } = render(
            <SegmentedProvider>
                <Toast open variant={variant} data-testid="toast">
                    Test
                </Toast>
                <Viewport />
            </SegmentedProvider>
        );

        const element = getByTestId("toast");

        expClass.split(" ").forEach((className) => {
            expect(element).toHaveClass(className);
        });
    });

    test("should render toast with custom class", () => {
        const { getByTestId } = render(
            <SegmentedProvider>
                <Toast open className="custom-class" data-testid="toast">
                    Test
                </Toast>
                <Viewport />
            </SegmentedProvider>
        );

        const element = getByTestId("toast");

        expect(element).toHaveClass("custom-class");
    });

    test("should apply styling", () => {
        const { getByTestId } = render(
            <SegmentedProvider>
                <Toast open data-testid="toast">
                    Test
                </Toast>
                <Viewport />
            </SegmentedProvider>
        );

        const element = getByTestId("toast");

        // alignment
        "flex items-center".split(" ").forEach((className) => {
            expect(element).toHaveClass(className);
        });

        // padding and margin
        "px-default py-[7px]".split(" ").forEach((className) => {
            expect(element).toHaveClass(className);
        });

        // border
        "rounded-md border".split(" ").forEach((className) => {
            expect(element).toHaveClass(className);
        });

        // position
        expect(element).toHaveClass("relative");

        // animation
        "transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:mobile:slide-in-from-bottom-full"
            .split(" ")
            .forEach((className) => {
                expect(element).toHaveClass(className);
            });

        // size
        "h-16 w-full overflow-clip".split(" ").forEach((className) => {
            expect(element).toHaveClass(className);
        });
    });

    test("should have expected encapsulated components", async () => {
        expect(Toast.Action).toBeTruthy();
        expect(Toast.ActionButton).toBeTruthy();
        expect(Toast.Close).toBeTruthy();
        expect(Toast.CloseButton).toBeTruthy();
        expect(Toast.Title).toBeTruthy();
        expect(Toast.Description).toBeTruthy();
    });
});
