import {render} from "@testing-library/react";
import React from "react";
import PreconfiguredBarLinkHelp from './PreconfiguredBarLinkHelp';
import i18n from "@src/i18n";

i18n.init({
    lng: "de",
});
describe('<PreconfiguredBarLinkHelp />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <PreconfiguredBarLinkHelp data-testid={"element"} className={"bg-[red] myrandomclass"}/>
        );
        const element = await findByTestId("element-normal") as HTMLAnchorElement;
        expect(element.nodeName).toEqual("A");
        expect(element.textContent).toEqual("Hilfe");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLAnchorElement>();
        render(
            <PreconfiguredBarLinkHelp ref={ref}/>
        );
        expect(ref.current).toBeTruthy();
    });
});