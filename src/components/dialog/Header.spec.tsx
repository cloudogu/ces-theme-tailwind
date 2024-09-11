import { render } from "@testing-library/react";
import ConfirmDialog from "./ConfirmDialog";
import { createRef } from "react";
import SegmentedDialog from "./SegmentedDialog";

describe("<Header/>", () => {
    test("should render title when content is string", () => {
        const refTitle = createRef<HTMLHeadingElement>();
        const content = "TestHeader"
        

        render(
            <SegmentedDialog open>
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Header ref={refTitle} data-testid="header">{content}</SegmentedDialog.Content.Header>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        expect(refTitle.current).toBeTruthy();
        expect(refTitle.current!.innerHTML).toBe(content);
    });

    test("should render children when content is no string", () => {
        const refTitle = createRef<HTMLHeadingElement>();
        const refDescription = createRef<HTMLParagraphElement>();

       const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Header data-testid="header">
                        <SegmentedDialog.Content.Header.Title ref={refTitle}>TestHeader</SegmentedDialog.Content.Header.Title>
                        <SegmentedDialog.Content.Header.Description ref={refDescription}>TestDescription</SegmentedDialog.Content.Header.Description>
                    </SegmentedDialog.Content.Header>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("header");
        
        expect(element.children).toContain(refTitle.current);
        expect(element.children).toContain(refDescription.current);
        expect(refTitle.current!.innerHTML).toBe("TestHeader");
        expect(refDescription.current!.innerHTML).toBe("TestDescription");
    });

    test("should apply styling for standard variant", () => {
       const {getByTestId} = render(
            <SegmentedDialog open>
                <SegmentedDialog.Content>
                    <SegmentedDialog.Content.Header className="test" data-testid="header">TestTitle</SegmentedDialog.Content.Header>
                </SegmentedDialog.Content>
            </SegmentedDialog>
        );

        const element = getByTestId("header");

        expect(element.className).toContain("min-h-16");
        expect(element.className).toContain("py-default-2x");
        // desktop
        expect(element.className).toContain("desktop:px-default-2x");
        // mobile
        expect(element.className).toContain("mobile:px-default");
        // overwrite
        expect(element.className).toContain("test");
        // border
        expect(element.className).toContain("border-b-[1px] border-neutral");
    });

    test("should apply styling for danger variant", () => {
        const {getByTestId} = render(
             <SegmentedDialog open variant="danger">
                 <SegmentedDialog.Content>
                     <SegmentedDialog.Content.Header className="test" data-testid="header">TestTitle</SegmentedDialog.Content.Header>
                 </SegmentedDialog.Content>
             </SegmentedDialog>
         );
 
         const element = getByTestId("header");

         // test
         expect(element.className).toContain("text-danger");
         // border
         expect(element.className).toContain("border-danger");
     });    
});