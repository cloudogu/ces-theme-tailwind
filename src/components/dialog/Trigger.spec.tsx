import {act, render} from "@testing-library/react";
import {createRef} from "react";
import SegmentedDialog from "./SegmentedDialog";

describe("<Trigger/>", () => {
    test("should render trigger into child", () => {
        const refButton = createRef<HTMLButtonElement>();
        const refTrigger = createRef<HTMLButtonElement>();

        const content = "TestDialog"

        render(
            <SegmentedDialog>
                <SegmentedDialog.Trigger asChild ref={refTrigger}>
                    <button ref={refButton}>{content}</button>
                </SegmentedDialog.Trigger>
            </SegmentedDialog>
        );
        
        expect(refTrigger.current).toBeTruthy();
        expect(refTrigger.current).toBe(refButton.current);

        expect(refTrigger.current!.innerHTML).toBe(content);
        
        expect(refTrigger.current!.getAttribute('data-state')).toBe("closed");

        act(() => {
            refButton.current!.click();
        });
    
        expect(refTrigger.current!.getAttribute('data-state')).toBe("open");
    });
});