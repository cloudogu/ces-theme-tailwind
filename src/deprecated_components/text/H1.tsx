import React from "react";
import { twMerge } from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export default function H1(props: ComponentPropsWithoutRef<"h1"> & Testid) {
    return (
        <h1 {...props} className={twMerge("text-heading-font text-4xl mt-5 mb-2.5", props.className)}/>
    );
}