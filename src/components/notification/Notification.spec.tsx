import {render} from "@testing-library/react";
import Notification from "./Notification";
import {createRef} from "react";

describe("<Notification/>", () => {
    test("should render notification", () => {
        const {queryByTestId} = render(<Notification data-testid="element" notificationTitle={<span>ttl</span>}
                                                     description={<span>desc</span>}/>);

        expect(queryByTestId("element")).toBeTruthy();
        const title = queryByTestId("element-title") as HTMLElement;
        expect(title.textContent).toEqual("ttl")
        expect(title).toBeTruthy();
        const description = queryByTestId("element-description") as HTMLElement;
        expect(description).toBeTruthy();
        expect(description.textContent).toEqual("desc")
    });

    test("should forward ref", () => {
        const refDiv = createRef<HTMLDivElement>();

        const {getByTestId} = render(
            <Notification ref={refDiv} data-testid="notification-test" notificationTitle={""} description={""}/>
        );

        const element = getByTestId("notification-test");

        expect(refDiv.current).toBeTruthy();
        expect(refDiv.current).toBe(element);
    });

    const variants: {
        variant: "neutral" | "brand" | "danger" | undefined;
        expClass: string;
    }[] = [
        {
            variant: "neutral",
            expClass: "border-neutral",
        },
        {
            variant: "brand",
            expClass: "border-brand",
        },
        {
            variant: "danger",
            expClass: "border-danger",
        },
        {
            variant: undefined,
            expClass: "border-neutral",
        },
    ];

    test.each(variants)("should render notification with %s border color", (variants) => {
        const {getByTestId} = render(
            <Notification variant={variants.variant} data-testid="notification-test" notificationTitle={""}
                          description={""}/>
        );

        const element = getByTestId("notification-test");

        expect(element.className).toContain(variants.expClass);
    });

    test("should apply styles", () => {
        const {getByTestId} = render(
            <Notification data-testid="notification-test" className="test" notificationTitle={""} description={""}/>
        );

        const element = getByTestId("notification-test");

        "relative w-full p-default-2x text-default-text bg-default-background".split(" ").forEach((className) => (
            expect(element.className).toContain(className)
        ));

        "desktop:border-[6px] mobile:border-t-[6px] mobile:border-b-[6px]".split(" ").forEach((className) => (
            expect(element.className).toContain(className)
        ));

        expect(element.className).toContain("test");
    });
});
