import {render} from "@testing-library/react";
import renderPotentialFunctionChild from "@src/internalFunctions/renderPotentialFunctionChild";

describe("renderPotentialFunctionChild", () => {
    test("works with string", async () => {
        const {container} = render(<>{renderPotentialFunctionChild("i am string")}</>);
        expect(container.innerHTML).toEqual("i am string");
    });
    test("works with react element", async () => {
        const {container} = render(<>{renderPotentialFunctionChild(<>i am react element</>)}</>);
        expect(container.innerHTML).toEqual("i am react element");
    });
    test("works with function to string", async () => {
        const {container} = render(<>{renderPotentialFunctionChild(() => "i am string")}</>);
        expect(container.innerHTML).toEqual("i am string");
    });
    test("works with function to react element", async () => {
        const {container} = render(<>{renderPotentialFunctionChild(() => <>i am react element</>)}</>);
        expect(container.innerHTML).toEqual("i am react element");
    });
});