import {render} from "@testing-library/react";
import {ToastProvider, useDefaultToasts} from ".";
import {useEffect} from "react";

describe("useDefaultToasts", () => {
    test("can add toasts", async () => {
        const Comp = () => {
            const {showError, showSuccess, showNeutral, showBrand} = useDefaultToasts();
            useEffect(() => {
                showError(<div>err</div>);
                showSuccess(<div>suc</div>);
                showNeutral(<div>neu</div>);
                showBrand(<div>bra</div>);
            }, []);
            return <ToastProvider data-testid={"test"}/>
        }

        const {queryByTestId} = render(<Comp/>);

        const errorToast = queryByTestId("test-toast-1") as HTMLElement;
        expect(errorToast.className).toContain("danger");
        expect(errorToast.textContent).toContain("err");
        const successToast = queryByTestId("test-toast-2") as HTMLElement;
        expect(successToast.className).toContain("success");
        expect(successToast.textContent).toContain("suc");
        const neutralToast = queryByTestId("test-toast-3") as HTMLElement;
        expect(neutralToast.className).toContain("neutral");
        expect(neutralToast.textContent).toContain("neu");
        const brandToast = queryByTestId("test-toast-4") as HTMLElement;
        expect(brandToast.className).toContain("brand");
        expect(brandToast.textContent).toContain("bra");
    });
});