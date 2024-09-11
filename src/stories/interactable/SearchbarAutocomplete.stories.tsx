import { SearchbarAutocomplete } from "@src/deprecated_components/searchbar/autocomplete";
import React, {useState} from "react";
import H3 from "@deprecated_components/text/H3";

export default {
    title: 'Old CES Theme/Interactable/SearchbarAutocomplete',
    component: SearchbarAutocomplete,
}

const Template = (args: any) => {
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [clicked, setClicked] = useState("");

    return <>
        <SearchbarAutocomplete
            {...args}
            onSelectItem={(t: string, input: HTMLInputElement) => {
                setSearchResults([]);
                setClicked(t);
                input.value = "";
            }}
            onCancelSelection={(input: HTMLInputElement) => {
                setSearchResults([]);
                input.value = "";
                input.select();
            }}
            onTrigger={(v) => {
                setSearchResults(
                    [
                        <SearchbarAutocomplete.SearchResult value={v}/>,
                        <SearchbarAutocomplete.SearchResult value={`${v}my${v}`}/>,
                        <SearchbarAutocomplete.SearchResult value={`${v}${v}yours${v}`}/>,
                        <SearchbarAutocomplete.SearchResult value={`abc${v}def`}/>,
                        <SearchbarAutocomplete.SearchResult value={`Vv${v}vV`}/>,
                    ]
                )
            }}
            searchResults={searchResults}
        >
            Meine Searchbar
        </SearchbarAutocomplete>
        <H3 className={"mt-12"}>Last clicked element: </H3>
        <p>{clicked}</p>
    </>
};

export const Primary = Template.bind({});

// @ts-ignore
Primary.args = {
    triggerDelayMillis: 300,
    placeholder: "Find group..."
};
