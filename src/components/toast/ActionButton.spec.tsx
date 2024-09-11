import { render } from "@testing-library/react";
import { createRef } from "react";
import Toast from "./Toast";
import Viewport from "./Viewport";
import DefaultStyles from "@src/constants/DefaultStyles";
import SegmentedProvider from "./SegmentedProvider";
import ActionButton from "./ActionButton";

describe("<ActionButton/>", () => {
    test("should render action button", () => {
        const { getByTestId } = render(
            <SegmentedProvider>
                <Toast open>
                    <ActionButton className="z-50" altText="Test" data-testid="action-button">
                        Test    
                    </ActionButton>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );

        const element = getByTestId("action-button");

        expect(element).toBeInstanceOf(HTMLButtonElement);
        expect(element.innerHTML).toContain("Test");

        DefaultStyles.ColorGroups.Neutral.Tertiary.split(" ").forEach((className) => {
            expect(element.className).toContain(className);
        });

        // override
        expect(element.className).toContain("z-50");
    });

    test("should forward ref", () => {
        const refBtn = createRef<HTMLButtonElement>();

        const { getByTestId } = render(
            <SegmentedProvider>
                <Toast open>
                    <ActionButton ref={refBtn} altText="Test" data-testid="action-button">
                        Test    
                    </ActionButton>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );

        const element = getByTestId("action-button");

        expect(refBtn.current).toBeTruthy();
        expect(refBtn.current).toBe(element);
    });
});