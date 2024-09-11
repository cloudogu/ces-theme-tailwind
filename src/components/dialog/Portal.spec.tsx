import {render} from "@testing-library/react";
import SegmentedDialog from "./SegmentedDialog";
import Portal from "./Portal";

describe("<Portal/>", () => {
    test("should be rendered", async () => {
        render(
            <SegmentedDialog>
                <Portal/>
            </SegmentedDialog>
        );
    });

    test("should have expected encapsulated components", async () => {
        expect(Portal.Overlay).toBeTruthy();
        expect(Portal.SegmentedContent).toBeTruthy();
    });
});
