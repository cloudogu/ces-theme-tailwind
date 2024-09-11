import { render } from "@testing-library/react";
import { createRef } from "react";
import Toast from "./Toast";
import Viewport from "./Viewport";
import Close from "./Close";
import SegmentedProvider from "./SegmentedProvider";

describe("<Close/>", () => {
    test("should render close", () => {
        const {container} = render(
            <SegmentedProvider>
                <Toast open>
                    <Close id="test">
                        Test    
                    </Close>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );

        expect(container.querySelector("#test")).toBeTruthy();
    });

    test("should forward ref", () => {
        const refBtn = createRef<HTMLButtonElement>();

        const { container } = render(
            <SegmentedProvider>
                <Toast open>
                    <Close id="close" ref={refBtn}>
                        Test    
                    </Close>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );

        const element = container.querySelector("#close");

        expect(element).toBeTruthy();

        expect(refBtn.current).toBeTruthy();
        expect(refBtn.current).toBe(element);
    });
});