import React, {cloneElement} from "react";
import AsyncActionButton from "./AsyncActionButton";
import {render} from "@testing-library/react";
import DefaultStyles from "../../constants/DefaultStyles";
import Button from "@components/inputs/Button";
import {act} from "react-dom/test-utils";

describe("<AsyncActionButton />", () => {
    test("should render with expected children. tag and className", async () => {
        const {findByTestId} = render(<AsyncActionButton
            variant={'primary'}
            type={'button'}
            data-testid={"cloudogu-button"}
            color={"brand"}
            className={"bg-red randomclass"}
        >
            text children
        </AsyncActionButton>);
        const element = await findByTestId("cloudogu-button");
        expect(element.className).toContain("bg-red randomclass")
        expect(element.nodeName).toEqual("BUTTON")
        expect(element.innerHTML).toEqual("text children")
    });

    test("is never actually disabled", async () => {
        const {findByTestId} = render(<AsyncActionButton
            variant={'primary'}
            disabled={true}
            type={'button'}
            data-testid={"cloudogu-button"}
            color={"brand"}>
            text children
        </AsyncActionButton>);
        const element = await findByTestId("cloudogu-button") as HTMLButtonElement;
        expect(element.disabled).toEqual(false);
    });

    test("should accept type submit", async () => {
        const {findByTestId} = render(<AsyncActionButton
            variant={'primary'}
            type={'submit'}
            data-testid={"cloudogu-button"}
            color={"brand"}>
            text children
        </AsyncActionButton>);
        const element = (await findByTestId("cloudogu-button")) as HTMLButtonElement;
        expect(element.type).toContain("submit");
    });

    test("should be type button by default", async () => {
        const {findByTestId} = render(<AsyncActionButton
                variant={'primary'}
                data-testid={"cloudogu-button"}
                color={"brand"}>
                text children
            </AsyncActionButton>
        );
        const element = (await findByTestId("cloudogu-button")) as HTMLButtonElement;
        expect(element.type).toContain("button");
    });

    test("can overwrite classes and add new classes", async () => {
        const {findByTestId} = render(<AsyncActionButton
                variant={'primary'}
                data-testid={"cloudogu-button"}
                color={"brand"}
                className={"bg-red myrandomclassname"}
            >
                text children
            </AsyncActionButton>
        );
        const element = (await findByTestId("cloudogu-button")) as HTMLButtonElement;
        expect(element.className).toContain("bg-red myrandomclassname");
    });

    describe('test variants', () => {
        const colors = ["Brand", "Neutral", "Danger", "Success"];
        const variants = ["Primary", "Secondary", "Tertiary", "Special"];
        const styles = DefaultStyles.ColorGroups as unknown as { [key: string]: { [key: string]: string } };

        test.each([
            [colors[0], variants[0]],
            [colors[0], variants[1]],
            [colors[0], variants[2]],
            [colors[1], variants[0]],
            [colors[1], variants[1]],
            [colors[1], variants[2]],
            [colors[2], variants[0]],
            [colors[2], variants[1]],
            [colors[2], variants[2]],
            [colors[3], variants[0]],
            [colors[3], variants[1]],
            [colors[3], variants[2]],
        ])('Test variant %s-%s', async (color, variant) => {
            const {findByTestId} = render(<AsyncActionButton
                    variant={variant.toLowerCase() as any}
                    data-testid={"cloudogu-button"}
                    color={color.toLowerCase() as any}
                >
                    {color}-{variant}
                </AsyncActionButton>
            );
            const element = (await findByTestId("cloudogu-button")) as HTMLButtonElement;
            expect(element.className).toContain(styles[color][variant]);
        });

        test.each([
            [colors[0], variants[3]],
            [colors[1], variants[3]],
            [colors[2], variants[3]],
            [colors[3], variants[3]],
        ])('Test variant %s-%s', async (color, variant) => {
            const {findByTestId} = render(<AsyncActionButton
                    variant={variant.toLowerCase() as any}
                    data-testid={"cloudogu-button"}
                    color={color.toLowerCase() as any}
                >
                    {color}-{variant}
                </AsyncActionButton>
            );
            const element = (await findByTestId("cloudogu-button")) as HTMLButtonElement;
            expect(element.className).toContain(styles[color]["Primary"].replace(" rounded ", " "));
        });
    });

    describe("should append aria-label", () => {
        test("normal string aria-label", async () => {
            const {queryByTestId} = render(<AsyncActionButton
                    aria-label={"my-aria"}
                    data-testid={"btn"}
                />
            );

            const element = queryByTestId("btn") as HTMLElement;
            expect(element.getAttribute("aria-label")).toEqual("my-aria")
        });
        test("reactNode aria-label", async () => {
            const {queryByTestId} = render(<AsyncActionButton
                    aria-label={<div>my-aria</div>}
                    data-testid={"btn"}
                />
            );

            const element = queryByTestId("btn") as HTMLElement;
            expect(element.getAttribute("aria-label")).toBeFalsy();
            const spn = element.firstChild as HTMLElement;
            expect(spn?.tagName).toEqual("SPAN");
            expect(spn?.textContent).toEqual("my-aria");
            expect(spn?.className).toEqual("sr-only");
        });
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <Button ref={ref} />
        );
        expect(ref.current).toBeTruthy();
    });

    test("should disable", async () => {
        const result: boolean[] = [];
        const {queryByTestId} = render(<AsyncActionButton
                onActionDisableChange={(state) => {
                    result.push(state);
                }}
                onClick={async () => {}}
                data-testid={"btn"}
            />
        );
        const element = queryByTestId("btn") as HTMLButtonElement;

        await act(async () => {
            element.click();
        });

        expect(result?.length).toEqual(2);
        expect(result[0]).toEqual(true);
        expect(result[1]).toEqual(false);
        expect(element).not.toBeDisabled()
    });
});
