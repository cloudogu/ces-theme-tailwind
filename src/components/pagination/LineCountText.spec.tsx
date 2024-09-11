import {render} from "@testing-library/react";
import React from "react";
import LineCountText from "./LineCountText";

describe('<LineCountText />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {container} = render(
            <LineCountText>
                Test
            </LineCountText>
        );
        expect(container.innerHTML).toEqual("Test");
    });
});