import {subTestid} from "./Testid";

describe('Testid', () => {
    describe('subTestid', () => {
        test("will join when testid is set", async () => {
            expect(subTestid({"data-testid": "id"}, "name")).toEqual("id-name");
        });
        test("will return undefined when not set", async () => {
            expect(subTestid({}, "name")).toEqual(undefined);
        });
        test("will return undefined when explicitly set to undefined", async () => {
            expect(subTestid({"data-testid": undefined}, "name")).toEqual(undefined);
        });
        test("will join when testid is set with string interpolation", async () => {
            expect(subTestid({"data-testid": "id"}, `name-${1}`)).toEqual("id-name-1");
        });
    });
});