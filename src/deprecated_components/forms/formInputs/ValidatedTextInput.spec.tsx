import React from "react";
import {render} from "@testing-library/react";
import Form from "../Form";
import ValidatedTextInput from "@src/deprecated_components/forms/formInputs/ValidatedTextInput";

describe("<Form.ValidatedTextInput/>", () => {
    test("should render label and input - no errors", async () => {
        const {findByTestId} = render(<ValidatedTextInput type={"text"} name={"myinput"} data-testid={"test"} className={"myrandomclass"}>Label Content</ValidatedTextInput>);
        const label = await findByTestId("test-label");
        expect(label.nodeName).toEqual("LABEL");
        expect(label?.innerHTML).toEqual("Label Content")
        const input = await findByTestId("test-input");
        expect(input.nodeName).toEqual("INPUT");
        expect(input.className).toContain("myrandomclass");
        expect((input as HTMLElement).nextSibling).toBeNull();
    });
    test("should render label and input - with errors", async () => {
        const {findByTestId} = render(
            <Form handler={{errors: {"myinput": ["error 1", "error 2"]}, isFieldValidated: () => true, touched: {"myinput": true}, values: {"myinput": "a"}, handleChange: () => {}} as any}>
                <ValidatedTextInput type={"text"} name={"myinput"} data-testid={"test"}>Label Content</ValidatedTextInput>
            </Form>
        );
        const label = await findByTestId("test-label");
        expect(label.nodeName).toEqual("LABEL");
        expect(label?.innerHTML).toEqual("Label Content")
        const input = await findByTestId("test-input");
        expect(input.nodeName).toEqual("INPUT");
        const errors = (input as HTMLElement).nextSibling as HTMLElement;
        const firstError = errors.children.item(0) as HTMLElement;
        expect(firstError?.nodeName).toEqual("SPAN");
        expect(firstError?.innerHTML).toEqual("error 1");
        const secondError = errors.children.item(1)  as HTMLElement;
        expect(secondError?.nodeName).toEqual("SPAN");
        expect(secondError?.innerHTML).toEqual("error 2");
    });
});