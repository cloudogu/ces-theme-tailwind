import type {ComponentPropsWithoutRef} from "react";
import {twMerge} from "tailwind-merge";
import {CesIconCopy} from "@src/index";


export default function CopyButton({text, ...props}: ComponentPropsWithoutRef<"button"> & {text: string}) {
    return (
        <button
            {...props}
            className={twMerge("ml-2 border active:text-[]", props.className)}
            onClick={() => {
                try {
                    return navigator?.clipboard?.writeText(text);
                } finally {
                    //
                }
            }}
        >
            <CesIconCopy/>
        </button>
    );
}
