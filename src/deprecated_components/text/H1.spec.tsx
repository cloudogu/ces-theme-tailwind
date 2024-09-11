import {findByTestId, render} from "@testing-library/react";
import H1 from "./H1";

describe("<H1/>", () => {
    test("should render h1 with expected classes, children and tag", async () => {
        const {findByTestId} = render(<H1 data-testid={"myh1"} className={"text-random-value myclass"}>Test</H1>);
        const element = await findByTestId("myh1");
        expect(element.nodeName).toEqual("H1");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toEqual("text-4xl mt-5 mb-2.5 text-random-value myclass");
    });
});