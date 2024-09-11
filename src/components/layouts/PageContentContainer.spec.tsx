import {render} from "@testing-library/react";
import React from "react";
import PageContentContainer from './PageContentContainer';

describe('<PageContentContainer />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <PageContentContainer data-testid={"element"} className={"bg-[red] myrandomclass"}>
                Test
            </PageContentContainer>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("bg-[red] myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(PageContentContainer.LargePage).toBeTruthy();
        expect(PageContentContainer.EmptyLargePage).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <PageContentContainer ref={ref} />
        );
        expect(ref.current).toBeTruthy();
    });
});