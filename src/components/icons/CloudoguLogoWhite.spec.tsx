import React from "react";
import {render} from "@testing-library/react";
import CloudoguLogoWhite from "./CloudoguLogoWhite";

describe("<CloudoguLogoWhite />", () => {
    test("should render svg", async () => {
        const {findByTestId} = render(<CloudoguLogoWhite data-testid={"test"} className={"myrandomclassname"}/>);
        const element = await findByTestId("test") as HTMLElement;
        expect(element.tagName).toEqual("svg");
        let checked = false;
        for (const key of Object.keys(element)) {
            if ('className' in (element as any)[key]) {
                checked = true;
                expect((element as any)[key].className).toEqual("myrandomclassname")
            }
        }
        expect(checked).toEqual(true);
    });
});