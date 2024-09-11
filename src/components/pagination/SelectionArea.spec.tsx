import {render} from "@testing-library/react";
import React from "react";
import SelectionArea from "./SelectionArea";

describe('<SelectionArea>', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SelectionArea
                data-testid={"element"}
                className={"flex-col myrandomclass"}
            />
        );
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("LABEL");
        expect(element.className).toEqual("flex items-center gap-default mobile:justify-end flex-col myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(SelectionArea.Select).toBeTruthy();
        expect(SelectionArea.Text).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLLabelElement>();
        render(
            <SelectionArea ref={ref}/>
        );
        expect(ref.current).toBeTruthy();
    });
});
