import {findByTestId, render} from "@testing-library/react";
import Main from "./Main";

describe("<Main/>", () => {
    test("should render main with expected classes, children and tag", async () => {
        const {findByTestId} = render(<Main data-testid={"mymain"} className={"px-5 myrandomclass"}>Content</Main>);
        const element = await findByTestId("mymain");
        expect(element.nodeName).toEqual("MAIN");
        expect(element.innerHTML).toEqual("Content");
        expect(element.className).toEqual("md:m-auto 2xl:w-[1170px] lg:w-[970px] md:w-[750px] desktop:text-desktop-regular mobile:text-mobile-regular px-5 myrandomclass");
    });
});