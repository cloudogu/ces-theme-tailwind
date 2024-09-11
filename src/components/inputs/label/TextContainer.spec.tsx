import {render} from "@testing-library/react";
import TextContainer from "@components/inputs/label/TextContainer";
import React from "react";

describe("TextContainer", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <TextContainer data-testid={"container"}>
                text123
            </TextContainer>
        );
        const element = await findByTestId("container") as HTMLSpanElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.textContent).toEqual("text123");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLSpanElement>();
        render(
            <TextContainer ref={ref}>
            </TextContainer>
        );
        expect(ref.current).not.toBeNull();
    });

    test("subcomponents should be present", async () => {
        expect(TextContainer.SuccessIcon).toBeTruthy();
        expect(TextContainer.DangerIcon).toBeTruthy();
    })
});
