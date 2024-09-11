import React from "react";
import {findByTestId, render} from "@testing-library/react";
import Form from "./Form";

describe("<Form/>", () => {
    test("should render children", async () => {
        const {findByTestId} = render(<Form data-testid={"cloudogu-form"} handler={{handleSubmit: () => "test"} as any}>Form
            Content</Form>);
        const element = await findByTestId("cloudogu-form");
        expect(element.nodeName).toEqual("FORM");
        expect(element?.innerHTML).toEqual("Form Content")
    });
});