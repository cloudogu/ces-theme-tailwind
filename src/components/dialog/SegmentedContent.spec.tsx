import { render } from "@testing-library/react";
import SegmentedContent from "./SegmentedContent";
import { createRef } from "react";
import SegmentedDialog from "./SegmentedDialog";

describe("<SegmentedContent/>", () => {
    test("should render with children and close button", () => {
        const refDiv = createRef<HTMLDivElement>();

        const {getByTestId, queryByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.SegmentedContent data-testid="content">
                        <div ref={refDiv}>TestDiv</div>
                    </SegmentedDialog.Portal.SegmentedContent>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );
        
        const element = getByTestId("content");

        expect(refDiv.current).toBeTruthy();
        expect(element.children).toContain(refDiv.current);

        expect(SegmentedContent.Title).toBeTruthy();
        expect(SegmentedContent.Description).toBeTruthy();
        expect(SegmentedContent.CloseIcon).toBeTruthy();
        
        // expect to find close button by default
        const closeButton = queryByTestId("content-close-button");
        expect(closeButton).toBeTruthy();
        expect(closeButton).toBeInTheDocument();
    });

    test("should be able to disable close button", () => {
        const {queryByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.SegmentedContent data-testid="content" showDefaultCloseIcon={false}/>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        // expect to find close button by default
        const closeButton = queryByTestId("content-close-button");
        expect(closeButton).toBeNull();
        expect(closeButton).not.toBeInTheDocument(); 
    });

    test("should apply styling", () => {
        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.SegmentedContent className="test" data-testid="content"/>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        const element = getByTestId("content");

        // default
        ["bg-default-background", "border", "border-neutral"].forEach(uClass => expect(element.className).toContain(uClass));
        // position
        ["fixed", "z-50", "left-[50%]", "translate-x-[-50%]", "w-full"].forEach(uClass => expect(element.className).toContain(uClass));
        // desktop
        ["desktop:top-[50%]", "desktop:translate-y-[-50%]", "desktop:max-w-lg", "desktop:rounded-lg"].forEach(uClass => expect(element.className).toContain(uClass));
        // mobile
        ["mobile:bottom-0", "mobile:rounded-t-lg"].forEach(uClass => expect(element.className).toContain(uClass));
        // overwrite
        expect(element.className).toContain("test");
    });

    test("should render border with danger color for danger variant", () => {
        const {getByTestId} = render(
            <SegmentedDialog open variant="danger">
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.SegmentedContent data-testid="content"/>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        const element = getByTestId("content");

        expect(element.className).toContain("border-danger");
        expect(element.className).not.toContain("border-neutral");
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLDivElement>();

        const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Portal>
                    <SegmentedDialog.Portal.SegmentedContent ref={refDiv} data-testid="content"/>
                </SegmentedDialog.Portal>
            </SegmentedDialog>
        );

        const element = getByTestId("content");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });
});