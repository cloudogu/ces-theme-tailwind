import {render} from "@testing-library/react";
import LabelSuccessIcon from "./LabelSuccessIcon";
import React from "react";

describe("CheckIcon", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <LabelSuccessIcon data-testid={"icon"}/>
        );
        const element = await findByTestId("icon") as HTMLSpanElement;
        expect(element.nodeName).toEqual("svg");
        expect(element.outerHTML).toContain("viewBox=\"0 20 256 256\"");
    });

});
