import SegmentedSelect from "./SegmentedSelect";

describe("<Select/>", () => {
    test("should have expected encapsulated components", async () => {
        expect(SegmentedSelect.Trigger).not.toBeNull();
        expect(SegmentedSelect.Trigger).not.toBeUndefined();
        expect(SegmentedSelect.TriggerButton).not.toBeNull();
        expect(SegmentedSelect.TriggerButton).not.toBeUndefined();
        expect(SegmentedSelect.SegmentedTriggerButton).not.toBeNull();
        expect(SegmentedSelect.SegmentedTriggerButton).not.toBeUndefined();
        expect(SegmentedSelect.Portal).not.toBeNull();
        expect(SegmentedSelect.Portal).not.toBeUndefined();
        expect(SegmentedSelect.Content).not.toBeNull();
        expect(SegmentedSelect.Content).not.toBeUndefined();
        expect(SegmentedSelect.SegmentedContent).not.toBeNull();
        expect(SegmentedSelect.SegmentedContent).not.toBeUndefined();
    });
});
