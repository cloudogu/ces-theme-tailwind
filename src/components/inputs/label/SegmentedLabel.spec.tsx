import {render} from "@testing-library/react";
import SegmentedLabel from "@components/inputs/label/SegmentedLabel";
import React from "react";
import Label from "@components/inputs/label/Label";

describe("Label", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <SegmentedLabel data-testid={"Label"}>
                <SegmentedLabel.TextContainer>
                    Text
                </SegmentedLabel.TextContainer>
            </SegmentedLabel>
        );
        const element = await findByTestId("Label") as HTMLLabelElement;
        expect(element.nodeName).toEqual("LABEL");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLLabelElement>();
        render(
            <SegmentedLabel ref={ref}>
                <SegmentedLabel.TextContainer>
                    Text
                </SegmentedLabel.TextContainer>
            </SegmentedLabel>
        );
        expect(ref.current).not.toBeNull();
    });

    test("subcomponents should be present", async () => {
        expect(SegmentedLabel.TextContainer).toBeTruthy();
        expect(SegmentedLabel.Hint).toBeTruthy();
    })

    describe("variant styles", () => {
        test("neutral", async () => {
            const ref = React.createRef<HTMLLabelElement>();
            render(
                <SegmentedLabel variant={"neutral"} ref={ref}/>
            );
            expect(ref.current?.className).toContain("text-neutral");
        });
        test("success", async () => {
            const ref = React.createRef<HTMLLabelElement>();
            render(
                <SegmentedLabel variant={"success"} ref={ref}/>
            );
            expect(ref.current?.className).toContain("text-success");
        });
        test("danger", async () => {
            const ref = React.createRef<HTMLLabelElement>();
            render(
                <SegmentedLabel variant={"danger"} ref={ref}/>
            );
            expect(ref.current?.className).toContain("text-danger");
        });
    });
});
