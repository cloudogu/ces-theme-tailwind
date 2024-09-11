import SegmentedSelect from "./SegmentedSelect";

describe("<Select.SegmentedContent.ScrollUpButton/>", () => {
    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.SegmentedContent.ScrollUpButton.Arrow).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent.ScrollUpButton.Arrow).not.toBeUndefined();
    });
});
