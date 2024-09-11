import {createContext, useRef, useState} from "react";
import {twMerge} from "tailwind-merge";
import useRenderTimeout from "@src/deprecated_hooks/useRenderTimeout";
import type Testid from "../../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export interface SearchbarAutocompleteProps<T> extends Omit<ComponentPropsWithoutRef<"input">, "children" | "placeholder" | "onSelect">, Testid {
    children: string;
    placeholder?: string;
    searchResults?: any[];
    onTrigger: (_searchString: string) => void;
    onSelectItem: (_selectedItem: T, _input: HTMLInputElement) => void;
    onCancelSelection?: (_input: HTMLInputElement) => void;
    triggerDelayMillis?: number;
}

export const SearchbarAutocompleteContext = createContext<{ onSelect: (_: any) => void, highlightedTextParts: string, onCancelSelection: () => void; }>(
    {
        onSelect: () => {
        },
        onCancelSelection: () => {
        },
        highlightedTextParts: "",
    }
);

const SearchbarAutocomplete = <T, >(
    {
        children,
        placeholder,
        searchResults,
        onTrigger,
        onSelectItem,
        onCancelSelection,
        triggerDelayMillis,
        ...props
    }: SearchbarAutocompleteProps<T>
) => {
    const [highlight, setHighlight] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [lastValue, setLastValue] = useState<string>("");
    const cancelSelection = () => onCancelSelection?.call(undefined, inputRef.current as HTMLInputElement);

    const rerender = useRenderTimeout(triggerDelayMillis ?? 300, () => {
        const nextValue = inputRef.current?.value ?? "";
        setLastValue(nextValue);

        if (nextValue === "") {
            cancelSelection();
        } else if (nextValue !== "" && nextValue !== lastValue) {
            onTrigger(nextValue);
        }

        setHighlight(inputRef.current?.value ?? "");
    });


    return (
        <SearchbarAutocompleteContext.Provider value={{
            onSelect: (v) => {
                onSelectItem(v, inputRef.current as HTMLInputElement);
            },
            onCancelSelection: cancelSelection,
            highlightedTextParts: highlight,
        }}>
            <label data-testid={`${props["data-testid"]}-label`} className={"block text-xs font-bold mb-1 text-label-secondary-font"}>{children}</label>
            <input
                {...props}
                data-testid={`${props["data-testid"]}-input`}
                type="text"
                className={twMerge("p-1 w-full placeholder:text-textfield-primary-font text-textfield-primary-font",
                    "focus:outline-none focus:shadow-textfield-primary-shadow",
                    "border border-textfield-primary-border rounded")}
                placeholder={placeholder}
                ref={inputRef}
                onChange={rerender}
                onKeyUp={(ev) => {
                    if (ev.key === "Escape") {
                        cancelSelection();
                    }
                }}
            />
            <ul data-testid={`${props["data-testid"]}-ul`}
                className="absolute z-10 min-w-[200px] bg mt-0.5 px-2 border-none rounded shadow-textfield-search-result-primary-shadow">
                {(searchResults ?? []).map((se, i) => (
                    <li className={"first:rounded-t last:rounded-b"} key={i} data-testid={`${props["data-testid"]}-li-${i}`}>
                        {se}
                    </li>
                ))}
            </ul>
        </SearchbarAutocompleteContext.Provider>
    );
};

export default SearchbarAutocomplete;