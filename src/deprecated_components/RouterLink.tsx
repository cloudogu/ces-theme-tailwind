import {Link} from "react-router-dom";
import { twMerge } from "tailwind-merge";
import type {ComponentPropsWithoutRef} from "react";

export default function RouterLink(props: ComponentPropsWithoutRef<typeof Link>) {
    return (
        <Link
            {...props}
            className={twMerge("hover:underline decoration-solid text-link-primary-font cursor-pointer", props.className)}
        />
    );
}
