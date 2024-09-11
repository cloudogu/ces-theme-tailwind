import { act, render, waitFor } from "@testing-library/react";
import { UseToastProps, useToast } from "./useToast";
import { Button } from "@src/index";
import { createRef } from "react";
import i18n from "@src/i18n";
import { I18nextProvider } from "react-i18next";
import Provider from "./Provider";

describe("<Provider/>", () => {

    if(!i18n.isInitialized) {
        i18n.init({
            lng: "en",
            debug: false,
        });
    }

    let testToasts: UseToastProps[] = [];
    let tDismiss: (toastId?: string | undefined) => void;

    afterEach(() => {
        act(() => {
            tDismiss();
        });
    });

    test("should add one toast to viewport", () => {
        const refBtn = createRef<HTMLButtonElement>();

        const ToasterElement = () => {
            const { toasts, toast, dismiss } = useToast();
            testToasts = toasts;
            tDismiss = dismiss;

            return (
                <>
                    <I18nextProvider i18n={i18n}></I18nextProvider>
                    <Button
                        ref={refBtn}
                        onClick={() =>
                            act(() => {
                                toast({
                                    description: "Test",
                                    variant: "success",
                                });
                            })
                        }
                    >
                        Show Toast
                    </Button>
                    <Provider />
                </>
            );
        };

        const { queryByTestId } = render(<ToasterElement />);

        expect(refBtn.current).toBeTruthy();
        expect(refBtn.current!.innerHTML).toBe("Show Toast");

        expect(testToasts.length).toBe(0);

        act(() => {
            refBtn.current!.click();
        });

        expect(testToasts.length).toBe(1);

        const counter = queryByTestId("toast-viewport-counter");
        expect(counter).toBeFalsy();
    });

    test("should render 5 visisble toasts by default with counter", () => {
        const refBtn = createRef<HTMLButtonElement>();

        const ToasterElement = () => {
            const { toasts, toast, dismiss } = useToast();
            testToasts = toasts;
            tDismiss = dismiss;

            return (
                <>
                    <I18nextProvider i18n={i18n}>
                        <Button
                            ref={refBtn}
                            onClick={() =>
                                act(() => {
                                    toast({
                                        description: "Test",
                                        variant: "success",
                                    });
                                })
                            }
                        >
                            Show Toast
                        </Button>
                        <Provider data-testid="provider" />
                    </I18nextProvider>
                </>
            );
        };

        const { queryByTestId } = render(<ToasterElement />);

        expect(refBtn.current).toBeTruthy();
        expect(refBtn.current!.innerHTML).toBe("Show Toast");

        expect(testToasts.length).toBe(0);

        for (let i = 0; i < 10; i++) {
            act(() => {
                refBtn.current!.click();
            });
        }

        expect(testToasts.length).toBe(10);

        const viewport = queryByTestId("provider-toast-viewport");
        expect(viewport).toBeTruthy();
        // default maxVisibleToasts is 5
        expect(viewport!.children).toHaveLength(5);
        // add margin for counter
        expect(viewport!.className).toContain("mb-10");

        const counter = queryByTestId("provider-toast-viewport-counter");
        expect(counter).toBeTruthy();
        // total toasts = 10; visible toasts = 5; counter = 5
        expect(counter!.innerHTML).toContain("5");
    });

    test("should push new toasts if toasts > visible toasts", async () => {
        const refBtn = createRef<HTMLButtonElement>();

        let firstToast: { dismiss: (toastId?: string | undefined) => void; id?: string; update?: (props: UseToastProps) => void };

        const ToasterElement = () => {
            const { toasts, toast, dismiss } = useToast();
            testToasts = toasts;
            tDismiss = dismiss;

            const firstToasAdded = toasts.length === 1;

            return (
                <>
                    <I18nextProvider i18n={i18n}>
                        <Button
                            ref={refBtn}
                            onClick={() =>
                                act(() => {
                                    const t = toast({
                                        description: "Test",
                                        variant: "success",
                                    });

                                    if (!firstToasAdded) {
                                        firstToast = t;
                                    }
                                })
                            }
                        >
                            Show Toast
                        </Button>
                        <Provider maxVisibleToasts={2} data-testid="provider"/>
                    </I18nextProvider>
                </>
            );
        };

        const { queryByTestId, getByTestId } = render(<ToasterElement />);

        expect(refBtn.current).toBeTruthy();
        expect(refBtn.current!.innerHTML).toBe("Show Toast");

        expect(testToasts.length).toBe(0);

        for (let i = 0; i < 5; i++) {
            act(() => {
                refBtn.current!.click();
            });
        }

        expect(testToasts.length).toBe(5);

        const viewport = queryByTestId("provider-toast-viewport");
        expect(viewport).toBeTruthy();

        expect(viewport?.children.length).toBe(2);
        expect(viewport!.className).toContain("mb-10");

        const counter = queryByTestId("provider-toast-viewport-counter");
        expect(counter).toBeTruthy();
        expect(counter!.innerHTML).toContain("3");

        // dimiss first toast
        act(() => {
            firstToast.dismiss();
        });

        await waitFor(() => {
            const updatedViewport = getByTestId("provider-toast-viewport");
            
            // toasts = 4; visible toasts = 2; counter = 2
            expect(testToasts.length).toBe(4);

            expect(updatedViewport!.children.length).toBe(2);
            
            const updatedCounter = getByTestId("provider-toast-viewport-counter");
            // counter decremented
            expect(updatedCounter!.innerHTML).toContain("2");

        }, { timeout: 1000 });
    });
});
