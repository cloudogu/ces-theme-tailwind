import {ReactNode} from "react";

export default function renderPotentialFunctionChild(input: ReactNode | (() => ReactNode)): ReactNode {
    if (typeof input === "function") {
        return input();
    }

    return input;
}