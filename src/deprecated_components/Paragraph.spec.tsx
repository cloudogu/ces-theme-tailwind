import {findByTestId, render} from "@testing-library/react";
import React from "react";
import Paragraph from "./Paragraph";

describe("<Paragraph/>", () => {
    test("should render correct structure with classes and testids", async () => {
        const {findByTestId} = render(<Paragraph data-testid={"test"} className={"test randomclass"}>Text</Paragraph>);
        const p = await findByTestId("test") as HTMLParagraphElement;

        expect(p.tagName).toEqual("P");
        expect(p.className).toEqual("desktop:text-desktop-regular mobile:text-mobile-regular test randomclass");
    });
});