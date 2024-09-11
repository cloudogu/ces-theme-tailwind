import { twMerge } from "tailwind-merge";
import type {ComponentPropsWithoutRef} from "react";

export default function Href(props: ComponentPropsWithoutRef<"a">) {
    return (
        <a {...props} className={twMerge("hover:underline decoration-solid text-link-primary-font cursor-pointer", props.className)}/>
    );
}