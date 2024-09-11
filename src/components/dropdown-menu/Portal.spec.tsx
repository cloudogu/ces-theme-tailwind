import SegmentedDropdownMenu from "./SegmentedDropdownMenu";

describe("<Portal/>", () => {
    test("should have expected encapsulated components", async () => {
        expect(SegmentedDropdownMenu.Portal.Content).not.toBeNull();
        expect(SegmentedDropdownMenu.Portal.Content).not.toBeUndefined();
    });
});
