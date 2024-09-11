import CommonIcons from "./CommonIcons";

describe("<CommonIcons/>", () => {
    test("should have expected children", async () => {
        expect(CommonIcons.ThreeDotIcon).not.toBeUndefined()
        expect(CommonIcons.ThreeDotIcon).not.toBeNull()
    });
});