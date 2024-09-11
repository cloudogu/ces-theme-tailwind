import React from "react";
import {findByTestId, render} from "@testing-library/react";
import TextInput from "./TextInput";

describe("<TextInput/>", () => {
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
    const {findByTestId} = render(<TextInput variant={variant} type={"text"} data-testid={"myinput"} className={"myclass"}/>);
    const element = (await findByTestId("myinput")) as HTMLInputElement;
    expect(element.nodeName).toEqual("INPUT");
    expect(element.type).toEqual("text");
    expect(element.className).toContain(`border-textfield-${variant}-border focus:shadow-textfield-${variant}-shadow text-textfield-${variant}-font disabled:bg-textfield-${variant}-disabled`);
    expect(element.className).toContain("myclass");
}