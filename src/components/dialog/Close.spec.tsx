import { createRef } from "react";
import { act, render } from "@testing-library/react";
import SegmentedDialog from "@components/dialog/SegmentedDialog";

describe("<Close/>", () => {
    test("should render close into child", () => {
        const refContent = createRef<HTMLDivElement>();
        const refTrigger = createRef<HTMLButtonElement>();
        const refClose = createRef<HTMLButtonElement>();
        const refButton = createRef<HTMLButtonElement>();

        const content = "TestClose";

        render(
            <SegmentedDialog>
                <SegmentedDialog.Trigger ref={refTrigger}>
                    OpenDialog
                </SegmentedDialog.Trigger>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.SegmentedContent ref={refContent} showDefaultCloseIcon={false}>
                        <SegmentedDialog.Close asChild ref={refClose}>
                            <button ref={refButton}>{content}</button>
                        </SegmentedDialog.Close>
                    </SegmentedDialog.Portal.SegmentedContent>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        act(() => {
            refTrigger.current!.click();
        });

        expect(refClose.current).toBeTruthy();
        expect(refClose.current).toBe(refButton.current);

        expect(refClose.current!.innerHTML).toBe(content);

        expect(refContent.current!.getAttribute("data-state")).toBe("open");
        
        act(() => {
            refButton.current!.click();
        });

        expect(refContent.current).toBeNull();
    });
});
