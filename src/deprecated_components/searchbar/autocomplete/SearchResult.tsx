import {useContext} from "react";
import {twMerge} from "tailwind-merge";
import {SearchbarAutocompleteContext} from "./SearchbarAutocomplete";
import TextHighlighter from "./TextHighlighter";
import type Testid from "../../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export interface SearchResultProps<T> extends Omit<ComponentPropsWithoutRef<"button">, "onClick" | "children" | "value" | "displayName">, Testid {
    value: T,
    displayName?: string;
}

export default function SearchResult<T>({value, displayName, ...props}: SearchResultProps<T>) {
    const {onSelect, highlightedTextParts, onCancelSelection} = useContext(SearchbarAutocompleteContext);

    return (
        <button
            {...props}
            type={"button"}
            onClick={() => {
                onSelect(value);
            }}
            onKeyUp={(ev) => {
                if (ev.key === "Escape") {
                    onCancelSelection();
                }
            }}
            className={twMerge("px-4 w-full flex text-search-suggestion-primary-font",
                "hover:text-search-suggestion-primary-font-hover hover:bg-search-suggestion-primary-hover",
                "focus-visible:text-search-suggestion-primary-font-hover focus-visible:bg-search-suggestion-primary-hover",
                "overflow-hidden", props.className)}
        >
            <TextHighlighter data-testid={`${props["data-testid"]}-highlighter`} highlight={highlightedTextParts}>
                {displayName ?? (value as string)}
            </TextHighlighter>
        </button>
    );
}