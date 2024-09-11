import {act, findByTestId, fireEvent, render} from "@testing-library/react";
import ListWithSearchbar from "./ListWithSearchbar";
import React from "react";

describe("<ListWithSearchbar/>", () => {
    test("should render list with serachbar", async () => {
        let items = ["a", "b", "c"];
        const {findByTestId} = render(
            <ListWithSearchbar
                data-testid={"listWithSearchBar"}
                items={items}
                addItem={(_: string) => {}}
                removeItem={(_: string) => {}}
                queryItems={async (searchVal: string) => [searchVal, `some ${searchVal}`, `${searchVal} 123`]}
                removeIcon={<>R</>}
                pageSize={5}
                tableTitle="Items"
                addLable="Add Item"
                removeLable="Remove Item"
                emptyItemsLable="Nothing here"
            />
        );
        const element = await findByTestId("listWithSearchBar");
        expect(element.nodeName).toEqual("DIV");
        const input = await findByTestId("listWithSearchBar-searchbar-input") as HTMLInputElement;
        expect(input.nodeName).toEqual("INPUT");
        const tableContainer = await findByTestId("listWithSearchBar-table") as HTMLInputElement;
        expect(tableContainer.nodeName).toEqual("DIV");
        const table = await findByTestId("listWithSearchBar-table-table") as HTMLInputElement;
        expect(table.nodeName).toEqual("TABLE");
        const rows = table.querySelectorAll("tbody tr");
        expect(rows.length).toBe(items.length);

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const cells = rows.item(i).querySelectorAll('td');
            expect(cells.length).toBe(2)
            expect(cells[0]).toHaveTextContent(item);
        }
    });

    test("should add item to list on search", async () => {
        const items = ["a", "b", "c"];
        let addedItem: string|undefined = undefined;
        const {findByTestId} = render(
            <ListWithSearchbar
                data-testid={"listWithSearchBar"}
                items={items}
                addItem={(newItem: string) => addedItem = newItem}
                removeItem={(toRemove: string) => {}}
                queryItems={async (searchVal: string) => {
                    return [searchVal, `some ${searchVal}`, `${searchVal} 123`]
                }}
                removeIcon={<>R</>}
                pageSize={5}
                tableTitle="Items"
                addLable="Add Item"
                removeLable="Remove Item"
                emptyItemsLable="Nothing here"
            />
        );
        const input = await findByTestId("listWithSearchBar-searchbar-input") as HTMLInputElement;
        expect(input).toBeVisible();
        let list = await findByTestId("listWithSearchBar-searchbar-ul") as HTMLUListElement;
        expect(list.children.length).toBe(0);

        const itemToAdd = "test123"
        await act(async () => {
            input.value = itemToAdd;
            await new Promise<void>(resolve => setTimeout(() => resolve(), 300));
        });
        expect(list.children.length).toBe(3);

        await act(async () => {
            let listItem = await findByTestId("listWithSearchBar-searchbar-li-0") as HTMLLIElement;
            listItem.querySelector('button')?.click();
        });
        expect(addedItem).toEqual(itemToAdd);
    });

    test("should remove item from list on remove", async () => {
        const items = ["a", "b", "c"];
        let removedItem: string|undefined = undefined;
        const {findByTestId, rerender} = render(
            <ListWithSearchbar
                data-testid={"listWithSearchBar"}
                items={items}
                addItem={(newItem: string) => {}}
                removeItem={(toRemove: string) => removedItem = toRemove}
                queryItems={async (searchVal: string) => {
                    return [searchVal, `some ${searchVal}`, `${searchVal} 123`]
                }}
                removeIcon={<>R</>}
                pageSize={5}
                tableTitle="Items"
                addLable="Add Item"
                removeLable="Remove Item"
                emptyItemsLable="Nothing here"
            />
        );
        const input = await findByTestId("listWithSearchBar-searchbar-input") as HTMLInputElement;
        expect(input).toBeVisible();
        const table = await findByTestId("listWithSearchBar-table") as HTMLInputElement;
        expect(table).toBeVisible();

        const indexToRemove = 1;
        await act(async () => {
            const removeBtn = table.querySelectorAll("tbody tr")[indexToRemove].querySelector('button');
            expect(removeBtn).toBeVisible();
            removeBtn?.click();
        });
        expect(removedItem).toEqual(items[indexToRemove]);
    });

    test("should not render serachbar and delete-icon when readonly", async () => {
        let items = ["a", "b", "c"];
        const {findByTestId, queryByTestId} = render(
            <ListWithSearchbar
                data-testid={"listWithSearchBar"}
                items={items}
                addItem={(newItem: string) => {}}
                removeItem={(toRemove: string) => {}}
                queryItems={async (searchVal: string) => [searchVal, `some ${searchVal}`, `${searchVal} 123`]}
                removeIcon={<>R</>}
                pageSize={5}
                tableTitle="Items"
                addLable="Add Item"
                removeLable="Remove Item"
                emptyItemsLable="Nothing here"
                readonly={true}
            />
        );
        const element = await findByTestId("listWithSearchBar");
        expect(element.nodeName).toEqual("DIV");
        expect(await queryByTestId("listWithSearchBar-searchbar-input")).toBeNull();
        const tableContainer = await findByTestId("listWithSearchBar-table") as HTMLInputElement;
        expect(tableContainer.nodeName).toEqual("DIV");
        const table = await findByTestId("listWithSearchBar-table-table") as HTMLInputElement;
        expect(table.nodeName).toEqual("TABLE");
        const rows = tableContainer.querySelectorAll("tbody tr");
        expect(rows.length).toBe(items.length);

        for (let i = 0; i < items.length; i++) {
            const cells = rows.item(i).querySelectorAll('td');
            expect(cells.length).toBe(1);
        }
    });
});