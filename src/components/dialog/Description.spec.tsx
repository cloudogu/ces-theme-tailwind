import { render } from "@testing-library/react";
import ConfirmDialog from "./ConfirmDialog";
import { createRef } from "react";
import SegmentedDialog from "./SegmentedDialog";


describe("<Description/>", () => {
    test("should be rendered", async () => {
        const refDescription = createRef<HTMLParagraphElement>();

        render(
            <SegmentedDialog open>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.SegmentedContent>
                        <SegmentedDialog.Portal.SegmentedContent.Description ref={refDescription}>TestDescription</SegmentedDialog.Portal.SegmentedContent.Description>
                    </SegmentedDialog.Portal.SegmentedContent>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        expect(refDescription.current).toBeTruthy();
        expect(refDescription.current!.innerHTML).toBe("TestDescription");
    });
});

