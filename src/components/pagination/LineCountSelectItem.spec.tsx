import {render} from "@testing-library/react";
import React from "react";
import LineCountSelectItem from "./LineCountSelectItem";
import Select from "@components/inputs/select-dropdown/Select";

describe('<LineCountSelectItem />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <Select placeholder={""} open={true}>
                <LineCountSelectItem value={1} data-testid={"element"} className={"text-red myrandomclass"}/>
            </Select>
        );
        const element = await findByTestId("element") as HTMLElement;
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <Select placeholder={""} open={true}>
                <LineCountSelectItem ref={ref} value={1} data-testid={"element"} className={"text-red myrandomclass"}/>
            </Select>
        );
        expect(ref.current).toBeTruthy();
    });
});