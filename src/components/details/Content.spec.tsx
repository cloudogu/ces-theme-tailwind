import React from "react";
import {render} from "@testing-library/react";
import Content from "./Content";

describe("<Content />", () => {
    test("should render with expected className", async () => {
        const {findByTestId} = render(<Content data-testid={"test"} className={"myrandomclassname"}/>);
        const element = await findByTestId("test") as HTMLDivElement;
        expect(element.tagName).toEqual("DIV");
        expect(element.className).toEqual("border-l-[3px] pl-[29px] myrandomclassname");
    });

    test("should render with expected className without border", async () => {
        const {findByTestId} = render(<Content data-testid={"test"} className={"myrandomclassname"} renderBorder={false}/>);
        const element = await findByTestId("test") as HTMLDivElement;
        expect(element.tagName).toEqual("DIV");
        expect(element.className).toEqual("border-l-0 pl-8 myrandomclassname");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <Content ref={ref}>
            </Content>);
        expect(ref.current).not.toBeNull();
    });
});