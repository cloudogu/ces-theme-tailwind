import React from "react";
import { twMerge } from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export default function H2(props: ComponentPropsWithoutRef<"h2"> & Testid) {
    return (
        <h2 {...props} className={twMerge("text-heading-font text-3xl mt-5 mb-2.5", props.className)}/>
    );
}