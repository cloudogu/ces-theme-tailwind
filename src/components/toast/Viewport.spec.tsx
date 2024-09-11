import { render } from "@testing-library/react";
import Viewport from "./Viewport";
import { createRef } from "react";
import SegmentedProvider from "./SegmentedProvider";

describe("<Viewport/>", () => {
    test("should render viewport without counter", () => {
        const { queryByTestId } = render(
            <SegmentedProvider>
                <Viewport data-testid="viewport"/>
            </SegmentedProvider>
        );
        
        expect(queryByTestId("viewport")).toBeTruthy();
        expect(queryByTestId("viewport-counter")).toBeFalsy();
    });

    test("should render viewport with counter", () => {
        const { queryByTestId } = render(
            <SegmentedProvider>
                <Viewport counter={2} data-testid="viewport"/>
            </SegmentedProvider>
        );
        
        const element = queryByTestId("viewport");
        expect(element).toBeTruthy();
        expect(element?.className).toContain("desktop:mb-10 mobile:mb-10")
        
        const counter = queryByTestId("viewport-counter");
        expect(counter).toBeTruthy();
        expect(counter?.textContent).toContain("2");
    });


    test("should forward ref", () => {
        const refDiv = createRef<HTMLOListElement>();

        const { getByTestId } = render(
            <SegmentedProvider>
                <Viewport ref={refDiv} data-testid="viewport"/>
            </SegmentedProvider>
        );

        const element = getByTestId("viewport");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });

    test("should apply default styling", () => {
        const { getByTestId } = render(
            <SegmentedProvider>
                <Viewport className="bg-neutral-weaker" data-testid="viewport"/>
            </SegmentedProvider>
        );

        const element = getByTestId("viewport");
        
        // position
        "fixed bottom-0 desktop:right-0 top-auto".split(" ").forEach((uClass) => {
            expect(element.className).toContain(uClass);
        });

        // alignment
        "flex flex-col".split(" ").forEach((uClass) => {
            expect(element.className).toContain(uClass);
        });

        // margin
        expect(element.className).toContain("m-default-2x");

        // height
        expect(element.className).toContain("max-h-screen");

        // width
        "desktop:w-[400px] mobile:w-[calc(100vw-2rem)]".split(" ").forEach((uClass) => {
            expect(element.className).toContain(uClass);
        });

        // override
        expect(element.className).toContain("bg-neutral-weaker");
    });
});