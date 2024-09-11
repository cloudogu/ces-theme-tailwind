import {findByTestId, render} from "@testing-library/react";
import Href from "./Href";

describe("<RouterLink/>", () => {
    test("should render 'Link' with expected classes, children and tag", async () => {
        const {findByTestId} = render(<Href data-testid={"myhref"} href={"/myhref"} className={"decoration-none myrandomclass"}>Test</Href>);
        const element = await findByTestId("myhref") as HTMLLinkElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("Test");
        expect(element.href).toEqual("http://localhost/myhref");
        expect(element.className).toEqual("hover:underline text-link-primary-font cursor-pointer decoration-none myrandomclass");
    });
});