import SegmentedSelect from "./SegmentedSelect";

describe("<Select.Portal/>", () => {
    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.Portal.Content).not.toBeNull();
        expect(SegmentedSelect.Portal.Content).not.toBeUndefined();
    });
});
