import { render } from "@testing-library/react";
import Counter from "./Counter";
import { I18nextProvider } from "react-i18next";
import { t } from "i18next";
import i18n from "@src/i18n";
import { createRef } from "react";

describe("<Counter/>", () => {
    if (!i18n.isInitialized) {
        i18n.init({
            lng: "en",
        });
    }

    test.each([1, 2, 3])("should render counter with value %i", (counter) => {
        const { queryByTestId } = render(
            <I18nextProvider i18n={i18n}>
                <Counter counter={counter} data-testid="counter" />
            </I18nextProvider>
        );

        const element = queryByTestId("counter");
        expect(element).toBeTruthy();

        expect(element!.innerHTML).toContain(counter.toString());
        expect(element!.innerHTML).toContain(counter > 1 ? t("ces-theme-tailwind-lib-translation.toast.counter.plural") : t("ces-theme-tailwind-lib-translation.toast.counter.singular"));
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLDivElement>();

        const { getByTestId } = render(
            <I18nextProvider i18n={i18n}>
                <Counter counter={1} ref={refDiv} data-testid="counter" />
            </I18nextProvider>
        );

        const element = getByTestId("counter");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });

    test("should apply styling", () => {
        const { getByTestId } = render(
            <I18nextProvider i18n={i18n}>
                <Counter className="test" counter={1} data-testid="counter" />
            </I18nextProvider>
        );

        const element = getByTestId("counter");

        // padding
        "px-default py-[7px]".split(" ").forEach((uClass) => {
            expect(element.className).toContain(uClass);
        });

        // background, border and border radius
        "bg-neutral-weaker border-neutral border-b-0 border-x border-t rounded-t-md".split(" ").forEach((uClass) => {
            expect(element.className).toContain(uClass);
        });

        // font size
        "desktop:text-desktop-small mobile:text-mobile-small".split(" ").forEach((uClass) => {
            expect(element.className).toContain(uClass);
        });

        // height
        "h-8".split(" ").forEach((uClass) => {
            expect(element.className).toContain(uClass);
        });

        // override
        expect(element.className).toContain("test");
    });
});
