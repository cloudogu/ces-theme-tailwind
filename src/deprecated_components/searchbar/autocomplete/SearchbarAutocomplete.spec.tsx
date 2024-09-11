import React from "react";
import {act, fireEvent, render} from "@testing-library/react";
import SearchbarAutocomplete from "./SearchbarAutocomplete";
import SearchResult from "./SearchResult";

describe("<SearchbarAutocomplete/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SearchbarAutocomplete
                placeholder={"PLACEHOLDER"}
                data-testid={"mysearchbar"}
                onTrigger={() => {
                }}
                onSelectItem={() => {
                }}
                searchResults={[
                    <SearchResult value={"test"} data-testid={"result"}/>
                ]}
            >
                Content
            </SearchbarAutocomplete>
        );
        const label = await findByTestId("mysearchbar-label") as HTMLLabelElement;
        expect(label.nodeName).toEqual("LABEL");
        expect(label.innerHTML).toEqual("Content");
        const input = await findByTestId("mysearchbar-input") as HTMLInputElement;
        expect(input.nodeName).toEqual("INPUT");
        expect(input.placeholder).toEqual("PLACEHOLDER");
        const list = await findByTestId("mysearchbar-ul") as HTMLUListElement;
        expect(list.nodeName).toEqual("UL");
        const li1 = await findByTestId("mysearchbar-li-0") as HTMLLIElement;
        expect(li1.nodeName).toEqual("LI");
        const btn = await findByTestId("result") as HTMLButtonElement;
        expect(btn.nodeName).toEqual("BUTTON");
    });

    test("will cancel, trigger and select", async () => {
        let search = "";
        let selected = "";
        let canceled = false;
        const {findByTestId} = render(
            <SearchbarAutocomplete
                data-testid={"mysearchbar"}
                onTrigger={(searchString: string) => {
                    search = searchString;
                }}
                onSelectItem={(item: string) => {
                    selected = item;
                }}
                onCancelSelection={() => {
                    canceled = true;
                }}
                triggerDelayMillis={200}
                searchResults={[
                    <SearchResult value={"test"} data-testid={"result"}/>
                ]}
            >
                Content
            </SearchbarAutocomplete>
        );

        const input = await findByTestId("mysearchbar-input") as HTMLInputElement;
        const btn = await findByTestId("result") as HTMLButtonElement;
        expect(btn.nodeName).toEqual("BUTTON");
        btn.click();
        expect(selected).toEqual("test");

        expect(canceled).toBeFalsy();
        fireEvent.keyUp(btn, {'key':'Escape'});
        expect(canceled).toBeTruthy();
        canceled = false;
        fireEvent.keyUp(input, {'key':'Escape'});
        expect(canceled).toBeTruthy();

        await act(async () => {
            input.value = "testvalue";
            expect(search).toEqual("");
            await new Promise<void>(resolve => setTimeout(() => {resolve()}, 300));
            expect(search).toEqual("testvalue");
        })
    });

});