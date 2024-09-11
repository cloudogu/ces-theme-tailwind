import React from "react";
import {render} from "@testing-library/react";
import TextHighlighter, {matches} from "./TextHighlighter";

describe("<TextHighlighter/>", () => {
    test("should render with expected classes, children and tag", async () => {
        const {findByTestId} = render(<TextHighlighter data-testid={"highlighter"} highlight={"Te"}>Text</TextHighlighter>);
        const element = await findByTestId("highlighter-span-0") as HTMLSpanElement;
        expect(element.nodeName).toEqual("SPAN");
        expect(element.innerHTML).toEqual("Te");
        expect(element.className).toEqual("font-bold");
        expect(element.nextSibling).toBeTruthy();
    });
    test("will keep text case", async () => {
        const {findByTestId} = render(<div data-testid={"highlighter"}><TextHighlighter highlight={""}>tExT</TextHighlighter></div>);
        const element = await findByTestId("highlighter") as HTMLSpanElement;
        expect(element.innerHTML).toEqual("tExT");
    });
    test("will highlight even with case differences", async () => {
        const {findByTestId} = render(<TextHighlighter data-testid={"highlighter"} highlight={"Te"}>TextTexttext</TextHighlighter>);
        const firstSpan = await findByTestId("highlighter-span-0") as HTMLSpanElement;
        expect(firstSpan.nodeName).toEqual("SPAN");
        expect(firstSpan.innerHTML).toEqual("Te");
        expect(firstSpan.className).toEqual("font-bold");
        expect(firstSpan.nextSibling).toBeTruthy();
        const secondSpan = await findByTestId("highlighter-span-1") as HTMLSpanElement;
        expect(secondSpan.nodeName).toEqual("SPAN");
        expect(secondSpan.innerHTML).toEqual("Te");
        expect(secondSpan.className).toEqual("font-bold");
        expect(secondSpan.nextSibling).toBeTruthy();
        const thirdSpan = await findByTestId("highlighter-span-2") as HTMLSpanElement;
        expect(thirdSpan.nodeName).toEqual("SPAN");
        expect(thirdSpan.innerHTML).toEqual("te");
        expect(thirdSpan.className).toEqual("font-bold");
        expect(thirdSpan.nextSibling).toBeTruthy();
    });

    describe("matches", () => {
        test("will hightlight test text", async () => {
            const result = matches("teSTTestTEst", "te");
            expect(result.length).toEqual(6);
            expect(result[0].text).toEqual("te");
            expect(result[0].highlighted).toEqual(true);
            expect(result[1].text).toEqual("ST");
            expect(result[1].highlighted).toEqual(false);
            expect(result[2].text).toEqual("Te");
            expect(result[2].highlighted).toEqual(true);
            expect(result[3].text).toEqual("st");
            expect(result[3].highlighted).toEqual(false);
            expect(result[4].text).toEqual("TE");
            expect(result[4].highlighted).toEqual(true);
            expect(result[5].text).toEqual("st");
            expect(result[5].highlighted).toEqual(false);
        });

        test("will highlight cesManager", async () => {
            const result = matches("cesManager", "sma");
            expect(result.length).toEqual(3);
            expect(result[0].text).toEqual("ce");
            expect(result[0].highlighted).toEqual(false);
            expect(result[1].text).toEqual("sMa");
            expect(result[1].highlighted).toEqual(true);
            expect(result[2].text).toEqual("nager");
            expect(result[2].highlighted).toEqual(false);
        });

        test("will highlight with a very long match", async () => {
            const result = matches("qwertzuiopasdfghjklyxcvbnm", "opasdfghjkly");
            expect(result.length).toEqual(3);
            expect(result[0].text).toEqual("qwertzui");
            expect(result[0].highlighted).toEqual(false);
            expect(result[1].text).toEqual("opasdfghjkly");
            expect(result[1].highlighted).toEqual(true);
            expect(result[2].text).toEqual("xcvbnm");
            expect(result[2].highlighted).toEqual(false);
        });

    });
});