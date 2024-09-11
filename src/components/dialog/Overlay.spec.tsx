import {render} from "@testing-library/react";
import {createRef} from "react";
import SegmentedDialog from "./SegmentedDialog";

describe("<Overlay/>", () => {
    test("should render Overlay, when Dialog is open", () => {
        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.Overlay className="test" data-testid="overlay"/>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        const element = getByTestId("overlay");

        // Check Styling
        expect(element.className).toContain("bg-neutral");
        expect(element.className).toContain("opacity-70");
        // Overwrite ClassNames
        expect(element.className).toContain("test");
    });

    test("should forward ref", async () => {
        const refOverlay = createRef<HTMLDivElement>();

        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.Overlay ref={refOverlay} data-testid="overlay"/>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        const element = getByTestId("overlay");

        expect(refOverlay.current).toBeTruthy();
        expect(refOverlay.current).toBe(element);
    });


    test("should not be rendered, when Dialog is closed", () => {
        const refOverlay = createRef<HTMLDivElement>();

        render(
            <SegmentedDialog>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.Overlay ref={refOverlay} data-testid="overlay"/>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        expect(refOverlay.current).toBeNull();
    });
});