import React from "react";
import {render} from "@testing-library/react";
import Arrow from "./Arrow";
import SegmentedSelect from "@components/inputs/select-dropdown/SegmentedSelect";

describe("<Arrow />", () => {
    test("should render with expected className", async () => {
        const {findByTestId} = render(<div data-testid={"test"}><Arrow className={"myrandomclassname"}/></div>);
        const element = (await findByTestId("test") as HTMLElement).firstChild as HTMLElement;
        expect(element.tagName).toEqual("svg");
        let checked = false;
        for (const key of Object.keys(element)) {
            if ('className' in (element as any)[key]){
                checked = true;
                expect((element as any)[key].className).toEqual("group-open:hidden align-middle inline mr-[8px] w-[24px] h-[24px] myrandomclassname")
            }
        }
        expect(checked).toEqual(true);
    });

    test("forward ref works", async () => {
        const ref = React.createRef<SVGSVGElement>();
        render(
            <Arrow ref={ref}>
            </Arrow>);
        expect(ref.current).not.toBeNull();
    });
});