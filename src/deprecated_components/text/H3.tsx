import React from "react";
import { twMerge } from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export default function H3(props: ComponentPropsWithoutRef<"h3"> & Testid) {
    return (
        <h3 {...props} className={twMerge("text-heading-font text-2xl mt-5 mb-2.5", props.className)}/>
    );
}