import {render} from "@testing-library/react";
import React from "react";
import ActionTable from './ActionTable';
import ActionTableRoot from "./ActionTableRoot";

describe('<ActionTable />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <ActionTableRoot>
                <ActionTable data-testid={"element"} className={"text-red myrandomclass"}>
                    <tbody>
                    <tr>
                        <td>Test</td>
                    </tr>
                    </tbody>
                </ActionTable>
            </ActionTableRoot>
        );
        const element = await findByTestId("element") as HTMLDivElement;
        expect(element.nodeName).toEqual("DIV");
        expect(element.textContent).toContain("Test");
        expect(element.className).toContain("text-red myrandomclass");
        expect(element.children.length).toEqual(2);
        expect(element.firstChild?.nodeName).toEqual("TABLE")
        expect(element.firstChild?.textContent).toEqual("Test")
        expect(element.lastChild?.nodeName).toEqual("DIV")
        expect(element.firstChild).toHaveAttribute("data-testid", "element-table")
        expect(element.lastChild).toHaveAttribute("data-testid", "element-pagination")

    });

    test("passes translations to pagination", async () => {
        const {findByTestId} = render(
            <ActionTableRoot>
                <ActionTable
                    data-testid={"element"}
                    className={"text-red myrandomclass"}
                    lineCountText={"asdf"}
                    availableRowsDescription={"fdsa"}
                    forwardButtonAriaLabel={"baaaaaak"}
                    backButtonAriaLabel={"fowaaaaaad"}
                />
            </ActionTableRoot>
        );
        const element = await findByTestId("element-pagination") as HTMLDivElement;
        expect(element.textContent).toContain("asdf");
        expect(element.textContent).toContain("fdsa");
        const back = await findByTestId("element-pagination-back") as HTMLDivElement;
        expect(back).toHaveAttribute("aria-label", "fowaaaaaad")
        const forward = await findByTestId("element-pagination-forward") as HTMLDivElement;
        expect(forward).toHaveAttribute("aria-label", "baaaaaak")
    });

    describe('aria attributes for loading', () => {
        test("isLoading=true", async () => {
            const {findByTestId} = render(
                <ActionTableRoot isLoading={true}>
                    <ActionTable data-testid={"element"} className={"text-red myrandomclass"}/>
                </ActionTableRoot>
            );
            const element = await findByTestId("element") as HTMLDivElement;

            expect(element).toHaveAttribute("aria-live", "polite");
            expect(element).toHaveAttribute("aria-busy", "true");
        });
        test("isLoading=false", async () => {
            const {findByTestId} = render(
                <ActionTableRoot isLoading={false}>
                    <ActionTable data-testid={"element"} className={"text-red myrandomclass"}/>
                </ActionTableRoot>
            );
            const element = await findByTestId("element") as HTMLDivElement;

            expect(element).toHaveAttribute("aria-live", "polite");
            expect(element).toHaveAttribute("aria-busy", "false");
        });
    });

    test("should have expected encapsulated components", async () => {
        expect(ActionTable.HeadWithOneRow).toBeTruthy();
        expect(ActionTable.Head).toBeTruthy();
        expect(ActionTable.Body).toBeTruthy();
        expect(ActionTable.Foot).toBeTruthy();
        expect(ActionTable.SkeletonBody).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLDivElement>();
        render(
            <ActionTableRoot>
                <ActionTable ref={ref}/>
            </ActionTableRoot>
        );
        expect(ref.current).toBeTruthy();
    });
});