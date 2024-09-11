import {render} from "@testing-library/react";
import React from "react";
import Hint from "@components/inputs/label/Hint";

describe("Hint", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <Hint data-testid={"Hint"}/>
        );
        const element = await findByTestId("Hint") as HTMLSpanElement;
        expect(element.nodeName).toEqual("SPAN");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLSpanElement>();
        render(
            <Hint ref={ref}/>
        );
        expect(ref.current).not.toBeNull();
    });

    test("variant neutral renders style", async () => {
        const ref = React.createRef<HTMLSpanElement>();
        render(
            <Hint ref={ref}/>
        );
        expect(ref.current).not.toBeNull();
        expect(ref.current?.className).toContain("text-default-text");
    });

    test("variant danger renders style", async () => {
        const ref = React.createRef<HTMLSpanElement>();
        render(
            <Hint variant={"danger"} ref={ref}/>
        );
        expect(ref.current).not.toBeNull();
        expect(ref.current?.className).toContain("text-danger");

    });
});
