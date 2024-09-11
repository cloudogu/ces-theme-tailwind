import Toast from "./Toast";
import { render } from "@testing-library/react";
import Viewport from "./Viewport";
import { createRef } from "react";
import Action from "./Action";
import SegmentedProvider from "./SegmentedProvider";

describe("<Action/>", () => {
    test("should render action", () => {
        const {container} = render(
            <SegmentedProvider>
                <Toast open>
                    <Action id="test" altText="Test">
                        Test    
                    </Action>
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
                    <Action id="action" ref={refBtn} altText="Test">
                        Test    
                    </Action>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );

        const element = container.querySelector("#action");

        expect(element).toBeTruthy();

        expect(refBtn.current).toBeTruthy();
        expect(refBtn.current).toBe(element);
    });
});