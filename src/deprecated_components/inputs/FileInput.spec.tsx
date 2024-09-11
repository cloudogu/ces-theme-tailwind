import React from "react";
import {render} from "@testing-library/react";
import FileInput from "./FileInput";

describe("<FileInput/>", () => {
    test("should render file input - primary", async () => {
        return testVariant("primary")
    });
    test("should render file input - success", async () => {
        return testVariant("success")
    });
    test("should render file input - danger", async () => {
        return testVariant("danger")
    });
});

async function testVariant(variant: "primary" | "success" | "danger"){
    const {findByTestId} = render(<FileInput variant={variant} data-testid={"myinput"} className={"myclass"}/>);
    const element = (await findByTestId("myinput")) as HTMLInputElement;
    expect(element.nodeName).toEqual("INPUT");
    expect(element.type).toEqual("file");
    expect(element.className).toContain(`text-textfield-${variant}-font`);
    expect(element.className).toContain("myclass");
}