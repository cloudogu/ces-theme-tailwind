import {createValidateSchemaFunction, handleValidationError} from "./useFormHandler";
import {ValidationError} from "yup";

const allErrors: ValidationError = new ValidationError([
    new ValidationError("err1", "a", "a", "a"),
    new ValidationError("err2", "a", "a", "a"),
    new ValidationError("err3", "b", "b", "b"),
    new ValidationError("err4", "c", "c", "c"),
    new ValidationError("err5", "d", "d", "d"),
    new ValidationError([new ValidationError("err1.1", "a", "a", "a"), new ValidationError("err1.2", "a", "a", "a")], "a", "a", "a"),
    new ValidationError(new ValidationError("err1.3", "a", "a", "a"), "a", "a", "a"),
]);

describe("useFormHandler", () => {
    describe("handleValidationError", () => {
        test("handles all errors", async () => {
            const handledError = handleValidationError(allErrors, ["a", "b", "c", "d"]);
            validateAllErrors(handledError)
        });
        test("skips errors which keys are not included", async () => {
            const handledError = handleValidationError(allErrors, ["a", "b"]);
            expect(Object.keys(handledError)).toContain("a");
            expect(Object.keys(handledError)).toContain("b");
            expect(Object.keys(handledError)).not.toContain("c");
            expect(Object.keys(handledError)).not.toContain("d");
        });
    });
    describe("createValidateSchemaFunction", () => {
        test("handles all errors", async () => {
            const handledError = await createValidateSchemaFunction({
                validate: async () => {
                    throw allErrors;
                }
            })({a: "", b: "", c: "", d: ""});
            validateAllErrors(handledError);
        });
        test("skips errors which keys are not included", async () => {
            const handledError = await createValidateSchemaFunction({
                validate: async () => {
                    throw allErrors;
                }
            })({a: "", d: ""});
            expect(Object.keys(handledError)).toContain("a");
            expect(Object.keys(handledError)).not.toContain("b");
            expect(Object.keys(handledError)).not.toContain("c");
            expect(Object.keys(handledError)).toContain("d");
        });
        test("return empty object on success", async () => {
            const handledError = await createValidateSchemaFunction({
                validate: async () => {
                    return Promise.resolve();
                }
            })({a: "", d: ""});
            expect(handledError).toEqual({});
        });
    });
});

function validateAllErrors(handledError: {[key: string]: string[]}){
    expect(handledError["a"].length).toEqual(5);
    expect(handledError["a"][0]).toEqual("err1");
    expect(handledError["a"][1]).toEqual("err2");
    expect(handledError["a"][2]).toEqual("err1.1");
    expect(handledError["a"][3]).toEqual("err1.2");
    expect(handledError["a"][4]).toEqual("err1.3");
    expect(handledError["b"].length).toEqual(1);
    expect(handledError["c"].length).toEqual(1);
    expect(handledError["d"].length).toEqual(1);
}