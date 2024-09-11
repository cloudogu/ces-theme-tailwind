import {findByTestId, render} from "@testing-library/react";
import H3 from "./H3";

describe("<H3/>", () => {
    test("should render h3 with expected classes, children and tag", async () => {
        const {findByTestId} = render(<H3 data-testid={"myh3"} className={"text-random-value myclass"}>Test</H3>);
        const element = await findByTestId("myh3");
        expect(element.nodeName).toEqual("H3");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toEqual("text-2xl mt-5 mb-2.5 text-random-value myclass");
    });
});