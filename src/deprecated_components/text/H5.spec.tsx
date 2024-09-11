import {findByTestId, render} from "@testing-library/react";
import H5 from "./H5";

describe("<H5/>", () => {
    test("should render h5 with expected classes, children and tag", async () => {
        const {findByTestId} = render(<H5 data-testid={"myh5"} className={"text-random-value myclass"}>Test</H5>);
        const element = await findByTestId("myh5");
        expect(element.nodeName).toEqual("H5");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toEqual("text-sm mt-5 mb-2.5 text-random-value myclass");
    });
});