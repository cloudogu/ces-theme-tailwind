import React, {useState} from "react";
import ListWithSearchbar from "@deprecated_components/listWithSearchbar/ListWithSearchbar";

export default {
    title: 'Old CES Theme/Interactable/ListWithSearchbar',
}

const Template = (args: any) => {
    const [items, setItems] = useState<any[]>(["one", "two", "three"]);

    return <>
        <ListWithSearchbar
            {...args}
            items={items}
            addItem={(newItem: string) => setItems([...items, newItem])}
            removeItem={(toRemove: string) => {
                items.splice(items.indexOf(toRemove), 1)
                setItems([...items])
            }}
            queryItems={async (searchVal: string) => {
                return [searchVal, `some ${searchVal}`, `${searchVal} 123`]
            }}
            removeIcon={args.removeIcon}
        />
    </>;
};

export const Primary = Template.bind({});

// @ts-ignore
Primary.args = {
    pageSize: 5,
    tableTitle: "Items",
    addLable: "Add UnstyledItem",
    removeLable: "Remove UnstyledItem",
    emptyItemsLable: "Nothing here",
    readonly: false,
};
