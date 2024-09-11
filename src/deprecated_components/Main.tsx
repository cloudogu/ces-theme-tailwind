import {twMerge} from "tailwind-merge";
import type {ComponentPropsWithoutRef} from "react";

export default function Main(props: ComponentPropsWithoutRef<"main">) {
    return (
        <main
            {...props}
            className={
                twMerge(
                    "md:m-auto 2xl:w-[1170px] lg:w-[970px] md:w-[750px] px-4 desktop:text-desktop-regular mobile:text-mobile-regular",
                    props.className
                )
            }
        />
    );
}