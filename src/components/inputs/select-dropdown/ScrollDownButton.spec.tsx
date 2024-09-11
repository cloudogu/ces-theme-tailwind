import SegmentedSelect from "./SegmentedSelect";

describe("<Select.SegmentedContent.ScrollDownButton/>", () => {
    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.SegmentedContent.ScrollDownButton.Arrow).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent.ScrollDownButton.Arrow).not.toBeUndefined();
    });
});
