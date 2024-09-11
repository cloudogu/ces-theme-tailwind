import * as React from "react";
import { twMerge } from "tailwind-merge";

export default function LoadingIcon({className, "data-testid": dataTestId}: { className?: string, "data-testid"?: string }) {
    return <div data-testid={dataTestId}
        className={twMerge("animate-spin border-divider-primary-border border border-l-transparent rounded-full w-16 h-16", className)} />;
}