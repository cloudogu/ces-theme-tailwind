import React from "react";
import {findByTestId, render} from "@testing-library/react";
import TextInput from "./TextInput";
import Label from "./Label";

describe("<Label/>", () => {
    test("should render text input - primary", async () => {
        return testVariant("secondary");
    });
    test("should render text input - success", async () => {
        return testVariant("success");
    });
    test("should render text input - danger", async () => {
        return testVariant("danger");
    });
});

async function testVariant(variant: "secondary" | "success" | "danger"){
    const {findByTestId} = render(<Label variant={variant} data-testid={"mylabel"} className={"myclass"}>Label1</Label>);
    const element = (await findByTestId("mylabel")) as HTMLLabelElement;
    expect(element.nodeName).toEqual("LABEL");
    expect(element.innerHTML).toEqual("Label1");
    expect(element.className).toContain(`text-label-${variant}-font`);
    expect(element.className).toContain("myclass");
}