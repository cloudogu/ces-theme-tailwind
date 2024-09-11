import {render} from "@testing-library/react";
import React from "react";
import AvailableRowsDescription from "./AvailableRowsDescription";

describe('<AvailableRowsDescription />', () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(
            <AvailableRowsDescription data-testid={"element"} className={"flex-col myrandomclass"}>
                Test
            </AvailableRowsDescription>
        );
        const element = await findByTestId("element") as HTMLElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.innerHTML).toEqual("Test");
        expect(element.className).toEqual("flex items-center flex-col myrandomclass");
    });

    test("should have expected encapsulated components", async () => {
        expect(AvailableRowsDescription.Skeleton).toBeTruthy();
    });

    test("forward ref works", async () => {
        const ref = React.createRef<HTMLElement>();
        render(
            <AvailableRowsDescription
                data-testid={"element"}
                className={"flex-col myrandomclass"}
                ref={ref}
            >
                Test
            </AvailableRowsDescription>
        );
        expect(ref.current).not.toBeNull();
    });
});
