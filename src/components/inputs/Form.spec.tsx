import React from "react";
import {render} from "@testing-library/react";
import Form from "./Form";

describe("<Form />", () => {
    test("should render with expected children, tag and className", async () => {
        const {findByTestId} = render(<Form
            className={"bg-red randomclass"}
            data-testid={"element"}
        >
            text children
        </Form>);
        const element = await findByTestId("element");
        expect(element.className).toContain("bg-red randomclass")
        expect(element.nodeName).toEqual("FORM")
        expect(element.innerHTML).toEqual("text children")
    });
});
