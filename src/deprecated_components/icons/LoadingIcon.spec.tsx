import React from "react";
import {render} from "@testing-library/react";
import CloudoguLogoWhite from "@components/icons/CloudoguLogoWhite";
import LoadingIcon from "./LoadingIcon";

describe("<LoadingIcon />", () => {
    test("should render loading icon as div", async () => {
        const {findByTestId} = render(<LoadingIcon data-testid={"test"} className={"myrandomclassname w-18"}/>);
        const element = await findByTestId("test") as HTMLElement;
        expect(element.tagName).toEqual("DIV");
        expect(element.className).toEqual("animate-spin border-divider-primary-border border border-l-transparent rounded-full h-16 myrandomclassname w-18");
    });
});