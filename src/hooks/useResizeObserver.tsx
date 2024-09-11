import {RefObject, useEffect} from "react";

export default function useResizeObserver<T extends HTMLElement>(ref: RefObject<T>, callback: (value: T) => void, additionalDependencies?: any[]) {
    useEffect(() => {
            if (!ref.current) {
                return;
            }

            const resizeObserver = new ResizeObserver(() => {
                if (ref.current) {
                    callback(ref.current);
                }
            });

            resizeObserver.observe(ref.current as T);

            return function cleanup() {
                resizeObserver.disconnect();
            }
        },
        [ref.current, ...(additionalDependencies ?? [])]
    );
}