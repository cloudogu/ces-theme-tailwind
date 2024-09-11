import {render} from "@testing-library/react";
import React from "react";
import BodyColumn from './BodyColumn';

describe('<BodyColumn />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <table>
                <tbody>
                <tr>
                    <BodyColumn data-testid={"element"} className={"text-red myrandomclass"}>
                        Test
                    </BodyColumn>
                </tr>
                </tbody>
            </table>
        );
        const element = await findByTestId("element") as HTMLTableCellElement;
        expect(element.nodeName).toEqual("TD");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toContain("text-red myrandomclass");
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLTableCellElement>();
        render(
            <table>
                <tbody>
                <tr>
                    <BodyColumn ref={ref}/>
                </tr>
                </tbody>
            </table>
        );
        expect(ref.current).toBeTruthy();
    });

    test.each([
        [1, 2, '1.00'],
        [1, 5, '1.00000'],
        [1.1, 5, '1.10000'],
        [1.1, 5, '1.10000'],
        [1.0001, 2, '1.00'],
        [1.23456, 4, '1.2345'],
    ])('should render number columns', async (numberInput: number, decimalPlaces: number, expected: string) => {
        {
            const {container} = render(<table>
                <tbody>
                <tr>
                    <BodyColumn variant={"numeric"} decimalPlaces={decimalPlaces}>{numberInput}</BodyColumn>
                </tr>
                </tbody>
            </table>)

            expect(container.textContent).toEqual(expected);
        }
        {
            const {container} = render(<table>
                <tbody>
                <tr>
                    {/* non-numeric should render as it is*/}
                    <BodyColumn>{`${numberInput}`}</BodyColumn>
                </tr>
                </tbody>
            </table>)

            expect(container.textContent).toEqual(`${numberInput}`);
        }
    });
});