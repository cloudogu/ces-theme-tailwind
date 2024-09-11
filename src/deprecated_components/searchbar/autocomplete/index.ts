import SearchResult from "@src/deprecated_components/searchbar/autocomplete/SearchResult";
import InternalSearchbarAutocomplete from "@src/deprecated_components/searchbar/autocomplete/SearchbarAutocomplete";

const SearchbarAutocomplete = Object.assign(InternalSearchbarAutocomplete, {
    SearchResult: SearchResult,
});

export {SearchbarAutocomplete};

