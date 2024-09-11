import type {ReactNode} from "react";

export type NavbarLinkType = {
    text: string | (() => ReactNode);
    url: string;
    icon?: () => ReactNode;
    type?: "a" | "react-router-dom";
    active?: boolean;
    "data-testid"?: string;
};
