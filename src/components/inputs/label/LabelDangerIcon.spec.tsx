import {render} from "@testing-library/react";
import LabelDangerIcon from "./LabelDangerIcon";
import React from "react";

describe("DangerIcon", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
                    <LabelDangerIcon data-testid={"icon"}/>
        );
        const element = await findByTestId("icon") as HTMLSpanElement;
        expect(element.nodeName).toEqual("svg");
        expect(element.outerHTML).toContain("viewBox=\"0 20 256 256\"");
    });
});
