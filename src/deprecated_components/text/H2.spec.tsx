import {findByTestId, render} from "@testing-library/react";
import H2 from "./H2";

describe("<H2/>", () => {
    test("should render h2 with expected classes, children and tag", async () => {
        const {findByTestId} = render(<H2 data-testid={"myh2"} className={"text-random-value myclass"}>Test</H2>);
        const element = await findByTestId("myh2");
        expect(element.nodeName).toEqual("H2");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toEqual("text-3xl mt-5 mb-2.5 text-random-value myclass");
    });
});