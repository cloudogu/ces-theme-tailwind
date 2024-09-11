import {render} from "@testing-library/react";
import React from "react";
import Input from "@components/inputs/input-field/Input";

describe("Input", () => {
    test("should render with expected classes", async () => {
        const {findByTestId} = render(
            <Input type={"text"} data-testid={"input"}/>
        );
        const element = await findByTestId("input") as HTMLSpanElement;
        expect(element.nodeName).toEqual("INPUT");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLInputElement>();
        render(
            <Input type={"text"} ref={ref}/>
        );
        expect(ref.current).not.toBeNull();
    });

    describe("variant styles", () => {
        test("neutral", async () => {
            const ref = React.createRef<HTMLInputElement>();
            render(
                <Input variant={"neutral"} type={"text"} ref={ref}/>
            );
            expect(ref.current?.className).toContain("border-neutral");
        });
        test("success", async () => {
            const ref = React.createRef<HTMLInputElement>();
            render(
                <Input variant={"success"} type={"text"} ref={ref}/>
            );
            expect(ref.current?.className).toContain("border-success");
        });
        test("danger", async () => {
            const ref = React.createRef<HTMLInputElement>();
            render(
                <Input variant={"danger"} type={"text"} ref={ref}/>
            );
            expect(ref.current?.className).toContain("border-danger");
        });
    });
});
