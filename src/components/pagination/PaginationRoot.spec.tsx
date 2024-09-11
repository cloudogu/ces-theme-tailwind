import {render} from "@testing-library/react";
import React from "react";
import PaginationRoot from './PaginationRoot';
import { usePaginationContext } from "./Context";

describe('<PaginationRoot />', () => {
    const Testcomponent = () => {
        const {linesPerPage} = usePaginationContext();
        return (<>{linesPerPage}</>);
    }
    test("should provide context", async () => {
        const {container} = render(
            <PaginationRoot data-testid={"element"} config={{defaultLinesPerPage: 33}}>
                <Testcomponent/>
            </PaginationRoot>
        );
        expect(container.textContent).toEqual("33");
    });
});