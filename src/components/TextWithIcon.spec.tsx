import {render} from "@testing-library/react";
import TextWithIcon from "./TextWithIcon";
import {CesIconDownload} from "@components/icons";

describe("<TextWithIcon/>", () => {
    test("should render correct structure with classes and testids", async () => {
        const {findByTestId} = render(<TextWithIcon icon={<CesIconDownload aria-hidden={false} />} data-testid={"test"} className={"decoration-none myrandomclass"}>Text</TextWithIcon>);
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
    test("should render left by old", async () => {
        const {findByTestId} = render(<TextWithIcon icon={<CesIconDownload aria-hidden={false} />} data-testid={"test"} className={"decoration-none myrandomclass"}>Text</TextWithIcon>);
        const container = await findByTestId("test") as HTMLSpanElement;
        expect(container.children[0]).toHaveAttribute("data-testid", "test-icon-container");
        expect(container.children[1]).not.toHaveAttribute("data-testid", "test-icon-container");
    });
    test("should render right if confiured", async () => {
        const {findByTestId} = render(<TextWithIcon align={"RIGHT"} icon={<CesIconDownload aria-hidden={false} />} data-testid={"test"} className={"decoration-none myrandomclass"}>Text</TextWithIcon>);
        const container = await findByTestId("test") as HTMLSpanElement;
        expect(container.children[0]).not.toHaveAttribute("data-testid", "test-icon-container");
        expect(container.children[1]).toHaveAttribute("data-testid", "test-icon-container");
    });
});