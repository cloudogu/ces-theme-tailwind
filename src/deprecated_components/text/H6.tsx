import React from "react";
import {twMerge} from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export default function H6(props: ComponentPropsWithoutRef<"h6"> & Testid) {
    return (
        <h6 {...props} className={twMerge("text-heading-font text-xs mt-5 mb-2.5", props.className)}/>
    );
}