import { render } from "@testing-library/react";
import Button from "@components/inputs/Button";
import { createRef } from "react";
import SegmentedDialog from "./SegmentedDialog";

describe("<Footer/>", () => {
    test("should render with children", () => {
        const refButton = createRef<HTMLButtonElement>();

        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Footer data-testid="footer">
                        <Button ref={refButton} variant={"primary"} color={"brand"}>Save</Button>
                    </SegmentedDialog.Content.Footer>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("footer");
        
        expect(refButton.current).toBeTruthy();
        expect(element.children).toContain(refButton.current)
    });

    test("should apply styling", () => {
        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Footer className="test" data-testid="footer"/>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("footer");

        // default styling
        ["min-h-16","h-full", "bg-neutral-weaker", "py-default-2x", "gap-default", "overflow-hidden"].forEach((uClass) => expect(element.className).toContain(uClass));
        // Alignment
        ["flex", "flex-row", "flex-wrap", "items-center"].forEach((uClass) => expect(element.className).toContain(uClass));
        // desktop
        ["desktop:rounded-b-lg", "desktop:px-default-2x"].forEach((uClass) => expect(element.className).toContain(uClass));
        // mobile
        ["mobile:px-default", "mobile:justify-end"].forEach((uClass) => expect(element.className).toContain(uClass));
        // overwrite
        expect(element.className).toContain("test");
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLDivElement>();

        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Footer ref={refDiv} data-testid="footer"/>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("footer");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });

    test("should set background to bg-danger-weaker in danger variant", () => {
        const {getByTestId} = render(
            <SegmentedDialog open variant="danger">
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Footer data-testid="footer"/>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("footer");

        expect(element.className).not.toContain("bg-neutral-weaker")
        expect(element.className).toContain("bg-danger-weaker");
    });
});