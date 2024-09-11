import { render } from "@testing-library/react";
import Description from "./Description";
import Toast from "./Toast";
import Viewport from "./Viewport";
import { createRef } from "react";
import SegmentedProvider from "./SegmentedProvider";

describe("<Description/>", () => {
    test("should render description", () => {
        const {queryAllByTestId} = render(
            <SegmentedProvider>
                <Toast open>
                    <Description data-testid="description-test">
                        Description    
                    </Description>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );
        
        expect(queryAllByTestId("description-test")).toBeTruthy();
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLDivElement>();

        const {getByTestId} = render(
            <SegmentedProvider>
                <Toast open>
                    <Description ref={refDiv} data-testid="description-test">
                        Description    
                    </Description>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );

        const element = getByTestId("description-test");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });

    const variants: {
            variant: ("neutral" | "success" | "brand" | "danger"  | undefined)
            expClass: string
        }[] = [
        {
            variant: "neutral",
            expClass: "text-default-text"
        },
        {
            variant: "success",
            expClass: "text-success"
        },
        {
            variant: "brand",
            expClass: "text-brand"
        },
        {
            variant: "danger",
            expClass: "text-danger-strong"
        },
        {
            variant: undefined,
            expClass: "text-default-text"
        }
      ];

    test.each(variants)("should render description with %s color", (variants) => {

        const {getByTestId} = render(
            <SegmentedProvider>
                <Toast open>
                    <Description variant={variants.variant} data-testid="description-test">
                        Description    
                    </Description>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );

        const element = getByTestId("description-test");

        expect(element.className).toContain(variants.expClass);
    });
});