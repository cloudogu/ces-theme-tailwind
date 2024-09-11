import { render, waitFor } from "@testing-library/react";
import Provider from "./Provider";
import { UseToastProps, toast } from "./useToast";
import ActionButton from "./ActionButton";
import { act } from "react-dom/test-utils";

describe("toast", () => {
    let counter = 0;

    test("should add / remove toast", () => {
        counter++;
        const { queryByTestId } = render(<Provider data-testid="provider"/>);

        let removeToast: () => void;

        act(() => {
            const {dismiss} = toast(
                {
                    description: "Test",
                    variant: "success",
                    actionBtn: <ActionButton altText="test" data-testid="actionButton">Test</ActionButton>,
                }
            );

            removeToast = dismiss;
        });
        
        expect(queryByTestId("provider-toast-viewport")).toBeTruthy();
        
        const t1 = queryByTestId(`provider-toast-${counter}`);
        expect(t1).toBeTruthy();
        expect(t1!.innerHTML).toContain("Test");
        expect(t1!.className).toContain("bg-success-weaker");
        expect(queryByTestId("actionButton")).toBeTruthy();

        if (t1) {
            act(() => {
                removeToast();
            });
        }

        expect(queryByTestId(`provider-toast-${counter}`)).toBeFalsy();
    });

    test("should update toast", () => {
        counter++;
        const { getByTestId } = render(<Provider data-testid="provider"/>);

        let tID: string;
        let removeToast: () => void;
        let updateToast: (props: UseToastProps) => void;

        act(() => {
            const {id, dismiss, update} = toast(
                {
                    description: "Test",
                    variant: "success",
                }
            );
            
            removeToast = dismiss;
            updateToast = update;
            tID = id;
        });

        const t1 = getByTestId(`provider-toast-${counter}`);
        expect(t1!.innerHTML).toContain("Test");
        expect(t1!.className).toContain("bg-success-weaker");

        if (t1) {
            act(() => {
                updateToast({
                    id: tID,
                    description: "Test2",
                    variant: "danger",
                });
            });
        }

        expect(t1!.innerHTML).toContain("Test2");
        expect(t1!.className).toContain("bg-danger-weaker");

        if (t1) {
            act(() => {
                removeToast();
            });
        }
    });
});

describe("useToast", () => {
    test("should share global state", async() => {
        let removeToast: () => void;

        const Compontent1 = () => (
            <Provider data-testid="p1"/>
        );

        const Compontent2 = () => (
            <Provider data-testid="p2"/>
        );


        const { queryByTestId, getByTestId } = render(
            <>
                <Compontent1/>
                <Compontent2/>
            </>
        );

        const vp1 = queryByTestId("p1-toast-viewport");
        expect(vp1).toBeTruthy();

        const vp2 = queryByTestId("p2-toast-viewport");
        expect(vp2).toBeTruthy();

        act(() => {
            const { dismiss } = toast(
                {
                    description: "Test",
                    variant: "success",
                }
            );

            removeToast = dismiss;
        });

        await waitFor(() => {
            expect(getByTestId("p1-toast-viewport").children).toHaveLength(1);
            expect(getByTestId("p2-toast-viewport").children).toHaveLength(1);
        }, {timeout: 100});

        

        act(() => {
            removeToast();
        });

        await waitFor(() => {
            expect(getByTestId("p1-toast-viewport").children).toHaveLength(0);
            expect(getByTestId("p2-toast-viewport").children).toHaveLength(0);
        }, {timeout: 100});
    });
});