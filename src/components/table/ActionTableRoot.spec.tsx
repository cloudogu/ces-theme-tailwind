import {render} from "@testing-library/react";
import React from "react";
import ActionTableRoot from './ActionTableRoot';
import { useActionTableContext } from "./Context";

describe('<ActionTableRoot />', () => {
    const Testcomponent = () => {
        const {paginationControl} = useActionTableContext();
        return (<>{paginationControl.linesPerPage}</>);
    }
    test("should provide context", async () => {
        const {container} = render(
            <ActionTableRoot data-testid={"element"} paginationControl={{defaultLinesPerPage: 33}}>
                <Testcomponent/>
            </ActionTableRoot>
        );
        expect(container.textContent).toEqual("33");
    });
});