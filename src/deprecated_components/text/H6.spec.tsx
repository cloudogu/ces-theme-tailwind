import {findByTestId, render} from "@testing-library/react";
import H6 from "./H6";

describe("<H6/>", () => {
    test("should render h6 with expected classes, children and tag", async () => {
        const {findByTestId} = render(<H6 data-testid={"myh6"} className={"text-random-value myclass"}>Test</H6>);
        const element = await findByTestId("myh6");
        expect(element.nodeName).toEqual("H6");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toEqual("text-xs mt-5 mb-2.5 text-random-value myclass");
    });
});