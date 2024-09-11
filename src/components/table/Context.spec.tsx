import {render} from "@testing-library/react";
import {ActionTableContext, useActionTableContext} from "@components/table/Context";
import {ActionTableRoot} from "@components/table/index";

describe('Context (table)', () => {
    test("throws error when no ActionTableContext provided", async () => {
        const Component = () => {
            expect(useActionTableContext).toThrowError("You cannot use this component outside of ActionTableRoot.");
            return <></>;
        };

        render(<Component/>)
    });
    test("throws error when no PaginationContext provided", async () => {
        const Component = () => {
            expect(useActionTableContext).toThrowError("You cannot use this component outside of PaginationRoot.");
            return <></>;
        };

        render(<ActionTableContext.Provider value={{isLoading: true}}><Component/></ActionTableContext.Provider>)
    });

    test("throws no error when context provided", async () => {
        const Component = () => {
            expect(useActionTableContext).not.toThrow();
            const {isLoading, paginationControl} = useActionTableContext();
            expect(isLoading).toBeDefined();
            expect(paginationControl).toBeDefined();
            return <></>;
        };

        render(<ActionTableRoot>
            <Component/>
        </ActionTableRoot>)
    });
});