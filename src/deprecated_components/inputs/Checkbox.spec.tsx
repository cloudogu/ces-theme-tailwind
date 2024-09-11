import React from "react";
import Button from "./Button";
import {render} from "@testing-library/react";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";

describe("<Checkbox/>", () => {
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
    const {findByTestId} = render(<Checkbox value={true} variant={variant} data-testid={"myinput"} className={"myclass"}/>);
    const element = (await findByTestId("myinput")) as HTMLInputElement;
    expect(element.nodeName).toEqual("INPUT");
    expect(element.type).toEqual("checkbox");
    expect(element.className).toContain(`accent-checkbox-${variant}`);
    expect(element.className).toContain("myclass");
}
