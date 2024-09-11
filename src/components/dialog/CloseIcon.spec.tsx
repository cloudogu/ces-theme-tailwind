import { render } from "@testing-library/react";
import DefaultStyles from "../../constants/DefaultStyles";
import { createRef } from "react";
import { CesIconFaceMask } from "@components/icons";
import SegmentedDialog from "@components/dialog/SegmentedDialog";

describe("<CloseIcon/>", () => {
    test("should render close button", () => {
        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content showDefaultCloseIcon = {false}>
                    <SegmentedDialog.Content.CloseIcon data-testid="test"/>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("test");

        DefaultStyles.ColorGroups.Neutral.Tertiary.split(" ").map(uClass => {
            if (uClass === "hover:bg-neutral-weak") {
                uClass = "hover:bg-transparent";
            }

            expect(element.className).toContain(uClass);
        });
        
        const spanElement = element.querySelector("span");
        expect(spanElement).toBeInTheDocument();
        expect(spanElement?.innerHTML).toBe("Close");
        expect(spanElement?.className).toContain("sr-only");
    });

    test("should be able to replace icon", () => {
        const refIcon = createRef<SVGSVGElement>();

        render(
            <SegmentedDialog open>
                <SegmentedDialog.Content showDefaultCloseIcon = {false}>
                    <SegmentedDialog.Content.CloseIcon><CesIconFaceMask ref={refIcon}/></SegmentedDialog.Content.CloseIcon>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        expect(refIcon.current).toBeTruthy();
        expect(refIcon.current).toBeInTheDocument();
    });
});