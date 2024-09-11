import { render } from "@testing-library/react";
import { createRef } from "react";
import SegmentedDialog from "./SegmentedDialog";

describe("<Title/>", () => {
    test("should apply styling", async () => {
        const content = "TestTitle";

        const { getByTestId } = render(
            <SegmentedDialog open>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.SegmentedContent>
                        <SegmentedDialog.Portal.SegmentedContent.Title className="test" data-testid="title">{content}</SegmentedDialog.Portal.SegmentedContent.Title>
                    </SegmentedDialog.Portal.SegmentedContent>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        const element = getByTestId("title");

        expect(element.innerHTML).toBe(content);
        // DesktopView
        expect(element.className).toContain("desktop:text-desktop-2xl");
        // MobileView
        expect(element.className).toContain("mobile:text-mobile-2xl");
        // Overwrite ClassNames
        expect(element.className).toContain("test");
    });

    test("should forward ref", async () => {
        const ref = createRef<HTMLHeadingElement>();

        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.SegmentedContent>
                        <SegmentedDialog.Portal.SegmentedContent.Title ref={ref} data-testid="title"/>
                    </SegmentedDialog.Portal.SegmentedContent>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        const element = getByTestId("title");
        
        expect(ref.current).toBeTruthy();
        expect(ref.current).toBe(element);
    });
});
