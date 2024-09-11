import SegmentedDropdownMenu from "./SegmentedDropdownMenu";

describe("<SegmentedDropdownMenu/>", () => {
    test("should have expected children", async () => {
        expect(SegmentedDropdownMenu.Content).not.toBeUndefined()
        expect(SegmentedDropdownMenu.Trigger).not.toBeUndefined()
        expect(SegmentedDropdownMenu.TriggerButton).not.toBeUndefined()
        expect(SegmentedDropdownMenu.Content).not.toBeNull()
        expect(SegmentedDropdownMenu.Trigger).not.toBeNull()
        expect(SegmentedDropdownMenu.TriggerButton).not.toBeNull()
    });
});