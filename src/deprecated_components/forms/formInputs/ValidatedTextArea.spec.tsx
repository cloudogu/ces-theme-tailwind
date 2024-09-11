import React from "react";
import {findByTestId, render} from "@testing-library/react";
import Form from "../Form";
import ValidatedTextArea from "./ValidatedTextArea";

describe("<Form.ValidatedTextArea/>", () => {
    test("should render label and input - no errors", async () => {
        const {findByTestId} = render(<ValidatedTextArea name={"mytextarea"} data-testid={"test"} className={"myrandomclass"}>Label Content</ValidatedTextArea>);
        const label = await findByTestId("test-label");
        expect(label.nodeName).toEqual("LABEL");
        expect(label?.innerHTML).toEqual("Label Content")
        const input = await findByTestId("test-area");
        expect(input.nodeName).toEqual("TEXTAREA");
        expect(input.className).toContain("myrandomclass");
        expect((input as HTMLElement).nextSibling).toBeNull();
    });
    test("should render label and input - with errors", async () => {
        const {findByTestId} = render(
            <Form handler={{errors: {"mytextarea": ["error 1", "error 2"]}, isFieldValidated: () => true, touched: {"mytextarea": true}, values: {"mytextarea": "a"}, handleChange: () => {}} as any}>
                <ValidatedTextArea name={"mytextarea"} data-testid={"test"}>Label Content</ValidatedTextArea>
            </Form>
        );
        const label = await findByTestId("test-label");
        expect(label.nodeName).toEqual("LABEL");
        expect(label?.innerHTML).toEqual("Label Content")
        const input = await findByTestId("test-area");
        expect(input.nodeName).toEqual("TEXTAREA");
        const errors = (input as HTMLElement).nextSibling as HTMLElement;
        const firstError = errors.children.item(0) as HTMLElement;
        expect(firstError?.nodeName).toEqual("SPAN");
        expect(firstError?.innerHTML).toEqual("error 1");
        const secondError = errors.children.item(1)  as HTMLElement;
        expect(secondError?.nodeName).toEqual("SPAN");
        expect(secondError?.innerHTML).toEqual("error 2");
    });
});