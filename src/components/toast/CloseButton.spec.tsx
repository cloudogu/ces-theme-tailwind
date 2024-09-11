import { render } from "@testing-library/react";
import CloseButton from "./CloseButton";
import Toast from "./Toast";
import Viewport from "./Viewport";
import DefaultStyles from "@src/constants/DefaultStyles";
import { createRef } from "react";
import { CesIconFaceMask } from "@src/index";
import SegmentedProvider from "./SegmentedProvider";

describe("<CloseButton/>", () => {
    test("should render close button", () => {
        const {queryByTestId} = render(
            <SegmentedProvider>
                <Toast open>
                    <CloseButton data-testid="close-button">
                        Test    
                    </CloseButton>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );

        const element = queryByTestId("close-button");
        expect(element).toBeTruthy();

        DefaultStyles.ColorGroups.Neutral.Tertiary.split(" ").map(uClass => {
            if (uClass === "hover:bg-neutral-weak") {
                uClass = "hover:bg-transparent";
            }

            expect(element!.className).toContain(uClass);
        });
        
        const spanElement = element!.querySelector("span");
        expect(spanElement).toBeInTheDocument();
        expect(spanElement?.innerHTML).toBe("Close");
        expect(spanElement?.className).toContain("sr-only");
    });

    test("should be able to replace icon", () => {
        const refIcon = createRef<SVGSVGElement>();

        render(
            <SegmentedProvider>
                <Toast open>
                    <CloseButton data-testid="close-button">
                        <CesIconFaceMask ref={refIcon}/>    
                    </CloseButton>
                </Toast>
                <Viewport/>
            </SegmentedProvider>
        );

        expect(refIcon.current).toBeTruthy();
        expect(refIcon.current).toBeInTheDocument();
    });
});