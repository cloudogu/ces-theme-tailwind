import React from "react";
import {findByTestId, render} from "@testing-library/react";
import InputErrors from "./InputErrors";

describe("<InputErrors/>", () => {
    test("should render text input - primary", async () => {
        const {findByTestId} = render(<InputErrors
            errors={["error1", "error2", "error3"]}
            data-testid={"myerror"}/>);
        const error1 = (await findByTestId("myerror-0")) as HTMLSpanElement;
        const error2 = (await findByTestId("myerror-1")) as HTMLSpanElement;
        const error3 = (await findByTestId("myerror-2")) as HTMLSpanElement;
        expect(error1.innerHTML).toEqual("error1")
        expect(error2.innerHTML).toEqual("error2")
        expect(error3.innerHTML).toEqual("error3")
    });
});