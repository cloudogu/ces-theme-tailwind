import {Fragment} from "react";
import type Testid from "../../../types/Testid";

export default function TextHighlighter({children: text, highlight, ...props}: { children: string, highlight: string } & Testid) {
    if ((highlight ?? "") === "") {
        return <>{text}</>;
    }

    const output = matches(text, highlight);

    return (
        <>
            {
                output.map((element, i) =>
                    <Fragment key={i}>
                        {
                            element.highlighted &&
                            <span
                                className={"font-bold"}
                                data-testid={`${props["data-testid"]}-span-${element.highlightNum}`}
                            >
                                {element.text}
                            </span>
                        }
                        {!element.highlighted && element.text}
                    </Fragment>
                )
            }
        </>
    );
}

export function matches(input: string, highlight: string): { text: string, highlighted: boolean, highlightNum?: number }[] {
    const result: ReturnType<typeof matches> = [];
    let remaining = input;
    let highlightNum = 0;
    while (remaining.length > 0) {
        const index = remaining.toLowerCase().indexOf(highlight.toLowerCase());
        if (index !== -1) {
            const before = remaining.substring(0, index);
            if (before.length > 0) {
                result.push(
                    {
                        text: before,
                        highlighted: false,
                    }
                );
            }
            const start = before.length;
            const end = start + highlight.length;
            const match = remaining.substring(start, end);
            result.push(
                {
                    text: match,
                    highlighted: true,
                    highlightNum: highlightNum++,
                }
            );
            remaining = remaining.substring(before.length + highlight.length);
        } else {
            result.push(
                {
                    text: remaining,
                    highlighted: false,
                }
            );
            remaining = "";
        }
    }

    return result;
}