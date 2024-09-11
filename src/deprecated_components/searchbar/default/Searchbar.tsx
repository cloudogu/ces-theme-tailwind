import React, {useEffect, useRef} from "react";
import {twMerge} from "tailwind-merge";
import type Testid from "../../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";
import {CesIconMagnifyingGlass, CesIconX } from "@src/components/icons/phosphor";

export interface SearchbarProps extends Omit<ComponentPropsWithoutRef<"form">, "children" | "onSubmit" | "onClick" | "onAbort" | "onAbortCapture">, Testid {
    placeholder?: string;
    clearOnSearch?: boolean;
    onSearch: (_: string) => void;
    onClear?: () => void;
    disabled?: boolean;
    startValueSearch?: string;
}

export default function Searchbar({onSearch, placeholder, clearOnSearch, disabled, startValueSearch, onClear, ...props}: SearchbarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current !== null && startValueSearch !== undefined) {
            inputRef.current.value = startValueSearch;
        }
    }, [inputRef, startValueSearch]);

    return (
        <form
            {...props}
            className={twMerge("flex peer-focus:shadow-textfield-primary-shadow", props.className)}
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <div className={"relative"}>
                <input
                    disabled={disabled}
                    ref={inputRef}
                    name="query"
                    type="text"
                    className={twMerge("peer",
                        "z-2 placeholder:text-textfield-primary-font text-textfield-primary-font disabled:placeholder:text-textfield-primary-font-disabled",
                        "focus:outline-none focus:shadow-textfield-primary-shadow",
                        "border-t border-l border-b border-textfield-primary-border rounded-l disabled:border-textfield-primary-border-disabled",
                        "p-1 h-8"
                    )}
                    placeholder={placeholder ?? ""}
                    data-testid={`${props["data-testid"]}-input`}
                />
                <div className={"absolute right-0 top-0 h-8 w-9 flex items-center flex-row-reverse"}>
                    <button
                        type={"button"}
                        disabled={disabled}
                        className={"h-8 leading-5 p-0 group"}
                        data-testid={`${props["data-testid"]}-clear`}
                        onClick={() => {
                            if (inputRef.current) {
                                inputRef.current.value = "";
                            }
                            onClear?.call(undefined);
                        }}>
                        <CesIconX className={"w-5 h-5 inline mr-1 text-text-secondary group-disabled:text-text-secondary-hover"}/>
                    </button>
                </div>
            </div>
            <button
                disabled={disabled}
                className={twMerge(
                    "h-8 bg-button-secondary text-button-secondary-font hover:bg-button-secondary-hover disabled:hover:bg-button-secondary",
                    "border border-button-primary-border rounded-r disabled:border-button-primary-border-disabled",
                    "p-1 justify-center group"
                )}
                onClick={() => {
                    onSearch(inputRef?.current?.value ?? "");
                    if ((clearOnSearch ?? true) && inputRef && inputRef.current) {
                        inputRef.current.value = "";
                    }
                }}
                data-testid={`${props["data-testid"]}-button`}
            >
                <CesIconMagnifyingGlass className={"w-6 h-6 p-[0.15rem] text-search-icon group-disabled:text-search-icon-disabled"}/>
            </button>
        </form>
    );
}