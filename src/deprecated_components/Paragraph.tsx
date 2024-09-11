import {twMerge} from "tailwind-merge";
import type Testid from "../types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export default function Paragraph(props: ComponentPropsWithoutRef<"p"> & Testid) {
    return (
        <p {...props} className={twMerge("desktop:text-desktop-regular mobile:text-mobile-regular", props.className)}/>
    );
}