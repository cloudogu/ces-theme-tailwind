import { act, render } from "@testing-library/react";
import { createRef } from "react";
import SegmentedDialog from "./SegmentedDialog";

describe("<TriggerButton/>", () => {
    test("should render trigger button", () => {
        const refTriggerButton = createRef<HTMLButtonElement>();

        const content = "TestDialog"

        render(
            <SegmentedDialog>
                <SegmentedDialog.TriggerButton ref={refTriggerButton}>
                    {content}
                </SegmentedDialog.TriggerButton>
            </SegmentedDialog>
        );
        
        expect(refTriggerButton.current).toBeTruthy();
        expect(refTriggerButton.current!.innerHTML).toBe(content);
        
        expect(refTriggerButton.current!.getAttribute('data-state')).toBe("closed");

        act(() => {
            refTriggerButton.current!.click();
        });
    
        expect(refTriggerButton.current!.getAttribute('data-state')).toBe("open");
    });
});