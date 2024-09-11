import {render} from "@testing-library/react";
import TextWithOptionalIcon from "./TextWithOptionalIcon";
import {CesIconDownload} from "../index";

describe("<TextWithOptionalIcon/>", () => {
    test("should render correct structure with classes and testids", async () => {
        const {findByTestId} = render(<TextWithOptionalIcon icon={<CesIconDownload aria-hidden={false} />} data-testid={"test"} className={"decoration-none myrandomclass"}>Text</TextWithOptionalIcon>);
        const container = await findByTestId("test") as HTMLSpanElement;
        const iconContainer = await findByTestId("test-icon-container") as HTMLSpanElement;
        const icon = await findByTestId("test-icon") as HTMLElement;
        const textContainer = await findByTestId("test-text-container") as HTMLSpanElement;

        expect(container.tagName).toEqual("SPAN");
        expect(container.className).toEqual("flex flex-row decoration-none myrandomclass");
        expect(iconContainer.tagName).toEqual("SPAN");
        expect(textContainer.tagName).toEqual("SPAN");
        expect(icon.tagName).toEqual("svg");
        expect(icon).toHaveAttribute("aria-hidden", "true"); // This is forced
        expect(container.children.length).toEqual(2);
    });

    describe("transform", () => {
        test("transforms into text only if no icon provided", async () => {
            const {findByTestId} = render(<TextWithOptionalIcon data-testid={"element"}>Text</TextWithOptionalIcon>);
            const element = await findByTestId("element");
            expect(element.innerHTML).toEqual("Text");
        });

        test("transforms into icon only if no text provided", async () => {
            const {findByTestId} = render(<TextWithOptionalIcon data-testid={"element"} icon={<div>MyIcon</div>}/>);
            const element = await findByTestId("element");
            expect(element.innerHTML).toEqual("<div>MyIcon</div>");
        });

        test("transforms into icon only if empty text provided", async () => {
            const {findByTestId} = render(<TextWithOptionalIcon data-testid={"element"} icon={<div>MyIcon</div>} children={""}/>);
            const element = await findByTestId("element");
            expect(element.innerHTML).toEqual("<div>MyIcon</div>");
        });

    });

    test("should render left by old", async () => {
        const {findByTestId} = render(<TextWithOptionalIcon icon={<CesIconDownload aria-hidden={false} />} data-testid={"test"} className={"decoration-none myrandomclass"}>Text</TextWithOptionalIcon>);
        const container = await findByTestId("test") as HTMLSpanElement;
        expect(container.children[0]).toHaveAttribute("data-testid", "test-icon-container");
        expect(container.children[1]).not.toHaveAttribute("data-testid", "test-icon-container");
    });
    test("should render right if confiured", async () => {
        const {findByTestId} = render(<TextWithOptionalIcon align={"RIGHT"} icon={<CesIconDownload aria-hidden={false} />} data-testid={"test"} className={"decoration-none myrandomclass"}>Text</TextWithOptionalIcon>);
        const container = await findByTestId("test") as HTMLSpanElement;
        expect(container.children[0]).not.toHaveAttribute("data-testid", "test-icon-container");
        expect(container.children[1]).toHaveAttribute("data-testid", "test-icon-container");
    });
});