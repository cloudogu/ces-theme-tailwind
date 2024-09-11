import React from "react";
import {render} from "@testing-library/react";
import Details from "./Details";
import DefaultStyles from "../../constants/DefaultStyles";

describe("<Details />", () => {
    test("should render with expected className", async () => {
        const {findByTestId} = render(<Details data-testid={"test"} className={"myrandomclassname open:mb-7"}/>);
        const element = await findByTestId("test") as HTMLDetailsElement;
        expect(element.tagName).toEqual("DETAILS");
        expect(element.className).toEqual("group " + DefaultStyles.TextSizeRegular + " myrandomclassname open:mb-7");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDetailsElement>();
        render(
            <Details ref={ref}>
            </Details>);
        expect(ref.current).not.toBeNull();
    });

    test("subcomponents should be present", async () => {
        expect(Details.Content).toBeTruthy();
        expect(Details.Summary).toBeTruthy();
    })
});