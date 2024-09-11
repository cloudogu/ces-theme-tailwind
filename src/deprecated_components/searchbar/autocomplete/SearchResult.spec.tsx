import React from "react";
import {fireEvent, render} from "@testing-library/react";
import SearchResult from "./SearchResult";
import {SearchbarAutocompleteContext} from "./SearchbarAutocomplete";

describe("<SearchResult/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(<SearchResult value={"VALUE"} data-testid={"my-sr"} className={"pl-2 myrandomclass"}/>);
        const element = await findByTestId("my-sr") as HTMLButtonElement;
        expect(element.nodeName).toEqual("BUTTON");
        expect(element.innerHTML).toEqual("VALUE");
        expect(element.className).not.toContain("pl-4");
        expect(element.className).toContain("pl-2");
        expect(element.className).toContain("myrandomclass");
    });
    test("should use correct display name", async () => {
        const {findByTestId} = render(<SearchResult value={"VALUE"} displayName={"NAME"} data-testid={"my-sr"}/>);
        const element = await findByTestId("my-sr") as HTMLButtonElement;
        expect(element.innerHTML).toEqual("NAME");
    });
    test("should Hightlight text", async () => {
        const {findByTestId} = render(
            <SearchbarAutocompleteContext.Provider value={{
                onSelect: () => {
                },
                highlightedTextParts: "NA",
                onCancelSelection: () => {
                }
            }}>
                <SearchResult value={"VALUE"} displayName={"NAME"} data-testid={"my-sr"}/>
            </SearchbarAutocompleteContext.Provider>
        );
        const element = await findByTestId("my-sr") as HTMLButtonElement;
        expect(element.innerHTML).toEqual("<span class=\"font-bold\" data-testid=\"my-sr-highlighter-span-0\">NA</span>ME");
    });
    test("should trigger onClick and onCancelSelection", async () => {
        let selected = "";
        let canceled = false;
        const {findByTestId} = render(
            <SearchbarAutocompleteContext.Provider value={{
                onSelect: (v) => {
                    selected = v;
                },
                highlightedTextParts: "NA",
                onCancelSelection: () => {
                    canceled = true;
                }
            }}>
                <SearchResult value={"VALUE"} displayName={"NAME"} data-testid={"my-sr"} onKeyUp={() => {}}/>
            </SearchbarAutocompleteContext.Provider>
        );
        const element = await findByTestId("my-sr") as any;

        expect(selected).toEqual("");
        element.click();
        expect(selected).toEqual("VALUE");

        expect(canceled).toBeFalsy();
        fireEvent.keyUp(element, {'key':'Escape'});
        expect(canceled).toBeTruthy();
    });
});