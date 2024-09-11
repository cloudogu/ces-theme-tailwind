import {findByTestId, render} from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("<Searchbar/>", () => {
    test("should render searchbar with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Searchbar
                data-testid={"searchbar"}
                className={"inline-flex randomclass"}
                placeholder={"myplaceholder"}
                onSearch={() => {
                }}/>
        );
        const element = await findByTestId("searchbar");
        expect(element.nodeName).toEqual("FORM");
        const input = await findByTestId("searchbar-input") as HTMLInputElement;
        expect(input.nodeName).toEqual("INPUT");
        expect(input.placeholder).toEqual("myplaceholder");
        const button = element.lastChild as HTMLButtonElement;
        expect(button.nodeName).toEqual("BUTTON");
        expect(button.disabled).toEqual(false);
        expect(input.disabled).toEqual(false);
    });
    test("clear on click (when enabled)", async () => {
        let value = "";
        const {findByTestId} = render(
            <Searchbar
                data-testid={"searchbar"}
                className={"inline-flex randomclass"}
                placeholder={"myplaceholder"}
                clearOnSearch={true}
                onClear={() => {
                    value = "clear";
                }}
                onSearch={(v) => {
                    value = v;
                }}/>
        );
        const button = await findByTestId("searchbar-button");
        const clear = await findByTestId("searchbar-clear");
        const input = await findByTestId("searchbar-input") as HTMLInputElement;
        input.value = "testval";
        expect(value).toEqual("");
        button.click();
        expect(value).toEqual("testval");
        button.click();
        expect(value).toEqual("");
        clear.click();
        expect(value).toEqual("clear");
    });
    test("no clear on click (when disabled)", async () => {
        let value = "";
        const {findByTestId} = render(
            <Searchbar
                disabled={true}
                data-testid={"searchbar"}
                className={"inline-flex randomclass"}
                placeholder={"myplaceholder"}
                clearOnSearch={false}
                onClear={() => {
                    value = "clear"
                }}
                onSearch={(v) => {
                    value = v;
                }}/>
        );
        const button = await findByTestId("searchbar-button");
        const clear = await findByTestId("searchbar-clear");
        const input = await findByTestId("searchbar-input") as HTMLInputElement;
        input.value = "testval";
        expect(value).toEqual("");
        button.click();
        expect(value).toEqual("");
        expect(input.value).toEqual("testval");
        button.click();
        expect(value).toEqual("");
        expect(input.value).toEqual("testval");
        clear.click();
        expect(value).toEqual("");
        expect(input.value).toEqual("testval");
    });
    test("can be disabled", async () => {
        const {findByTestId} = render(
            <Searchbar
                data-testid={"searchbar"}
                className={"inline-flex randomclass"}
                placeholder={"myplaceholder"}
                clearOnSearch={false}
                disabled={true}
                onSearch={(v) => {
                }}/>
        );
        const button = await findByTestId("searchbar-button") as HTMLInputElement;
        const input = await findByTestId("searchbar-input") as HTMLInputElement;
        expect(button.disabled).toEqual(true);
        expect(input.disabled).toEqual(true);
    });
});