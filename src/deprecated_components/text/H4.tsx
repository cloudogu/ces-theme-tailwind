import React from "react";
import { twMerge } from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export default function H4(props: ComponentPropsWithoutRef<"h4"> & Testid) {
    return (
        <h4 {...props} className={twMerge("text-heading-font text-lg mt-5 mb-2.5", props.className)}/>
    );
}