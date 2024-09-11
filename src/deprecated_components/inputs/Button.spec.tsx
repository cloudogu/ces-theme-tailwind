import React from "react";
import Button from "./Button";
import {render} from "@testing-library/react";

describe("<Button />", () => {
    test("should render children", async () => {
        const {findByTestId} = render(<Button variant={'primary'} type={'button'} data-testid={"cloudogu-button"}>text
            children</Button>);
        const element = await findByTestId("cloudogu-button");
        expect(element.innerHTML).toEqual("text children")
    });

    test("should be disabled", async () => {
        const {findByTestId} = render(<Button variant={'primary'} disabled={true} type={'button'}
                                              data-testid={"cloudogu-button"}>text children</Button>);
        const element = await findByTestId("cloudogu-button");
        expect(element).toHaveAttribute("disabled");
    });

    test("should be primary", async () => {
        const {findByTestId} = render(<Button variant={'primary'} type={'button'} data-testid={"cloudogu-button"}>text
            children</Button>);
        const element = await findByTestId("cloudogu-button");
        expect(element.className).toContain("text-button-primary-font enabled:hover:text-button-primary-font-hover");
    });

    test("should be type submit", async () => {
        const {findByTestId} = render(<Button variant={'primary'} type={'submit'} data-testid={"cloudogu-button"}>text
            children</Button>);
        const element = (await findByTestId("cloudogu-button")) as HTMLButtonElement;
        expect(element.type).toContain("submit");
    });

    test("should be type button", async () => {
        const {findByTestId} = render(<Button variant={'primary'} type={'button'} data-testid={"cloudogu-button"}>text
            children</Button>);
        const element = (await findByTestId("cloudogu-button")) as HTMLButtonElement;
        expect(element.type).toContain("button");
    });


});
