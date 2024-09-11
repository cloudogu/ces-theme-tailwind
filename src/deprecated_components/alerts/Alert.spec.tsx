import React from "react";
import Alert from "./Alert";
import {render} from "@testing-library/react";

describe("<Alert />", () => {
    describe("test variants", () => {
        test("primary", async () => {
            await testVariant('primary');
        });
        test("warning", async () => {
            await testVariant('warning');
        });
        test("success", async () => {
            await testVariant('success');
        });
        test("danger", async () => {
            await testVariant('danger');
        });
    });
    test("should render children", async () => {
        const {findByTestId} = render(<Alert variant={'primary'} data-testid={"cloudogu-alert"} onClose={() => {
        }}>text children</Alert>);
        const element = await findByTestId("cloudogu-alert");
        expect(element?.querySelector("div")?.innerHTML).toEqual("text children")
    });

    test("should call onCloseFunction", async () => {
        const mockCallBack = jest.fn();

        const {findByTestId} = render(<Alert variant={'danger'} data-testid={"cloudogu-alert"} onClose={mockCallBack}>text
            children</Alert>);
        const button = await findByTestId("cloudogu-alert-button");
        button.click();
        expect(mockCallBack.mock.calls.length).toEqual(1);

    });
});

async function testVariant(variant: "primary" | "secondary" | "warning" | "success" | "danger") {
    const {findByTestId} = render(<Alert variant={variant} data-testid={"cloudogu-alert"} onClose={() => {
    }}>text children</Alert>);
    const element = await findByTestId("cloudogu-alert");
    expect(element.className).toContain(
        `border-alert-${variant}-inverse-border bg-alert-${variant}-inverse text-alert-${variant}-inverse-font`
    );

}