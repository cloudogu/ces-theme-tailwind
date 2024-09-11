import { render } from "@testing-library/react";
import { createRef } from "react";
import SegmentedDialog from "@components/dialog/SegmentedDialog";
import Content from "./Content";

describe("<Content/>", () => {
    test("should render with children", () => {
        const refDiv = createRef<HTMLDivElement>();

        const {getByTestId, queryByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content data-testid="content">
                    <div ref={refDiv}>TestDiv</div>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("content");

        expect(refDiv.current).toBeTruthy();
        expect(element.children).toContain(refDiv.current);

        const overlay = queryByTestId("content-overlay");
        expect(overlay).toBeTruthy();
        expect(overlay).toBeInTheDocument();
    });

    test("should have expected sub components", async () => {
        expect(Content.Header).toBeTruthy();
        expect(Content.Body).toBeTruthy();
        expect(Content.Footer).toBeTruthy();
        expect(Content.CloseIcon).toBeTruthy();
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLDivElement>();

        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content ref={refDiv} data-testid="content"/>
            </SegmentedDialog>
        );

        const element = getByTestId("content");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });
});