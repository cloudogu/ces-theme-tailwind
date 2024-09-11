import {render} from "@testing-library/react";
import React from "react";
import NavigationArea from "./NavigationArea";

describe('<NavigationArea />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <NavigationArea data-testid={"element"} className={"flex-col myrandomclass"}>
                Test
            </NavigationArea>
        );
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.className).toEqual("flex items-center mobile:justify-end flex-col myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(NavigationArea.Back).toBeTruthy();
        expect(NavigationArea.Forward).toBeTruthy();
        expect(NavigationArea.RowsDescriptionArea).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <NavigationArea ref={ref}>
                Test
            </NavigationArea>
        );
        expect(ref.current).toBeTruthy();
    });
});
