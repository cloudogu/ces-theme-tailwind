import Href from "./Href";
import type {ComponentPropsWithoutRef} from "react";

export default function MailHref({mail, ...props}: Omit<ComponentPropsWithoutRef<"a">, "href" | "children"> & { mail: string }) {
    return (
        <Href {...props} href={`mailto:${mail}`} children={mail}/>
    );
}