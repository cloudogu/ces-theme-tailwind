import React from "react";
import {findByTestId, render} from "@testing-library/react";
import { Form } from "..";

describe("<Form.ValidatedCheckboxLabelRight/>", () => {
    test("should render label and input - no errors", async () => {
        const {findByTestId} = render(<Form.ValidatedCheckboxLabelRight type={"text"} name={"myinput"} data-testid={"test"} className={"myrandomclass"}>Label Content</Form.ValidatedCheckboxLabelRight>);
        const label = await findByTestId("test-label");
        expect(label.nodeName).toEqual("LABEL");
        expect(label?.innerHTML).toEqual("Label Content")
        const checkbox = await findByTestId("test-checkbox");
        expect(checkbox.nodeName).toEqual("INPUT");
        expect(checkbox.className).toContain("myrandomclass");
        const element = await findByTestId("test");
        expect(element.children.length).toEqual(2);
    });
    test("should render label and input - with errors", async () => {
        const {findByTestId} = render(
            <Form handler={{errors: {"myinput": ["error 1", "error 2"]}, isFieldValidated: () => true, touched: {"myinput": true}, values: {"myinput": "a"}, handleChange: () => {}} as any}>
                <Form.ValidatedCheckboxLabelRight type={"text"} name={"myinput"} data-testid={"test"}>Label Content</Form.ValidatedCheckboxLabelRight>
            </Form>
        );
        const label = await findByTestId("test-label");
        expect(label.nodeName).toEqual("LABEL");
        expect(label?.innerHTML).toEqual("Label Content")
        const checkbox = await findByTestId("test-checkbox");
        expect(checkbox.nodeName).toEqual("INPUT");
        const element = await findByTestId("test");
        expect(element.children.length).toEqual(2);

        const errors = (await findByTestId("test")).nextSibling as HTMLElement;
        const firstError = errors.children.item(0) as HTMLElement;
        expect(firstError?.nodeName).toEqual("SPAN");
        expect(firstError?.innerHTML).toEqual("error 1");
        const secondError = errors.children.item(1)  as HTMLElement;
        expect(secondError?.nodeName).toEqual("SPAN");
        expect(secondError?.innerHTML).toEqual("error 2");
    });
});
