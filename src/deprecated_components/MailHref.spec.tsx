import {findByTestId, render} from "@testing-library/react";
import MailHref from "./MailHref";

describe("<MailHref/>", () => {
    test("should render href with expected classes, children and tag", async () => {
        const {findByTestId} = render(<MailHref data-testid={"myhref"} mail={"a@b.de"} className={"decoration-none myrandomclass"}/>);
        const element = await findByTestId("myhref") as HTMLLinkElement;
        expect(element.nodeName).toEqual("A");
        expect(element.innerHTML).toEqual("a@b.de");
        expect(element.href).toEqual("mailto:a@b.de");
        expect(element.className).toEqual("hover:underline text-link-primary-font cursor-pointer decoration-none myrandomclass");
    });
});