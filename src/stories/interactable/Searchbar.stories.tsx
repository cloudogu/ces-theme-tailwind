import React from "react";
import Searchbar from "@deprecated_components/searchbar/default/Searchbar";

export default {
    title: 'Old CES Theme/Interactable/Searchbar',
    component: Searchbar,
}

const Template = (args: any) => {
    return <Searchbar {...args}/>
}
export const Primary = Template.bind({});

// @ts-ignore
Primary.args = {
    clearOnSearch: true,
    placeholder: "Search",
    onSearch: (value: any) => alert(`Value: '${value}'`),
    onClear: (value: any) => alert("clear"),
    disabled: false,
    startValueSearch: "",
}
