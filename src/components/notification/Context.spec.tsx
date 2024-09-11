import {render} from "@testing-library/react";
import { VariantContext, useVariantContext } from "./Context";

describe('Context (notification)', () => {
    test("throws error when no context provided", async () => {
        const Component = () => {
            expect(useVariantContext).toThrow();
            return <></>;
        };

        render(<Component/>)
    });

    test("throws no error when context provided", async () => {
        const Component = () => {
            expect(useVariantContext).not.toThrow();
            const variant = useVariantContext();
            expect(variant).toEqual("danger");
            return <></>;
        };

        render(<VariantContext.Provider value={"danger"}><Component/></VariantContext.Provider>)
    });
});