import React from "react";
import { twMerge } from "tailwind-merge";
import type Testid from "../../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export default function H5(props: ComponentPropsWithoutRef<"h5"> & Testid) {
    return (
        <h5 {...props} className={twMerge("text-heading-font text-sm mt-5 mb-2.5", props.className)}/>
    );
}