import React from "react";
import {render} from "@testing-library/react";
import TextArea from "./TextArea";

describe("<TextArea/>", () => {
    test("should render text input - primary", async () => {
        return testVariant("primary")
    });
    test("should render text input - success", async () => {
        return testVariant("success")
    });
    test("should render text input - danger", async () => {
        return testVariant("danger")
    });
});

async function testVariant(variant: "primary" | "success" | "danger"){
    const {findByTestId} = render(<TextArea variant={variant} data-testid={"mytextarea"} className={"myclass"}/>);
    const element = (await findByTestId("mytextarea")) as HTMLInputElement;
    expect(element.nodeName).toEqual("TEXTAREA");
    expect(element.className).toContain(`border-textfield-${variant}-border focus:shadow-textfield-${variant}-shadow text-textfield-${variant}-font disabled:bg-textfield-${variant}-disabled`);
    expect(element.className).toContain("myclass");
}
