import {render} from "@testing-library/react";
import {usePaginationContext} from "@components/pagination/Context";
import PaginationRoot from "./PaginationRoot";

describe('Context (table)', () => {
    test("throws error when no context provided", async () => {
        const Component = () => {
            expect(usePaginationContext).toThrowError("You cannot use this component outside of PaginationRoot.");
            return <></>;
        };

        render(<Component/>)
    });

    test("throws no error when context provided", async () => {
        const Component = () => {
            expect(usePaginationContext).not.toThrow();
            const context = usePaginationContext();
            expect(context).toBeDefined()
            return <></>;
        };

        render(<PaginationRoot>
            <Component/>
        </PaginationRoot>)
    });
});