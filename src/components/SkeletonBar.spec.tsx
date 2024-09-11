import {render} from "@testing-library/react";
import React from "react";
import SkeletonBar from './SkeletonBar';

describe('<SkeletonBar />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <SkeletonBar data-testid={"element"} className={"text-red myrandomclass"}/>
        );
        const element = await findByTestId("element") as HTMLSpanElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.textContent).toEqual("");
        expect(element.className).toContain("animate-pulse motion-reduce:animate-none bg-neutral-weak rounded h-6 text-red myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <SkeletonBar ref={ref}/>
        );
        expect(ref.current).toBeTruthy();
    });
});