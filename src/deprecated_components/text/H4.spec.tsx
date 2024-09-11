import {findByTestId, render} from "@testing-library/react";
import H4 from "./H4";

describe("<H4/>", () => {
    test("should render h4 with expected classes, children and tag", async () => {
        const {findByTestId} = render(<H4 data-testid={"myh4"} className={"text-random-value myclass"}>Test</H4>);
        const element = await findByTestId("myh4");
        expect(element.nodeName).toEqual("H4");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toEqual("text-lg mt-5 mb-2.5 text-random-value myclass");
    });
});