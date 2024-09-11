import { createRef } from "react";
import { render } from "@testing-library/react";
import SegmentedDialog from "@components/dialog/SegmentedDialog";

describe("<Body/>", () => {
    test("should render body", () => {
        const refDiv = createRef<HTMLDivElement>();

        const { getByTestId } = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Body data-testid="body">
                        <div ref={refDiv}>sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla</div>
                    </SegmentedDialog.Content.Body>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("body");

        expect(refDiv.current).toBeTruthy();
        expect(element.children).toContain(refDiv.current);
    });

    test("should apply styling", () => {
        const { getByTestId } = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Body className="test" data-testid="body"/>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("body");
        
        // default
        expect(element.className).toContain("py-default-2x");
        // desktop
        expect(element.className).toContain("desktop:px-default-2x");
        // mobile
        expect(element.className).toContain("mobile:px-default");
        // overwrite
        expect(element.className).toContain("test");
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLDivElement>();

        const { getByTestId } = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Body ref={refDiv} data-testid="body"/>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("body");
        
        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });
});
