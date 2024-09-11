import {useEffect, useRef, useState} from "react";

export default function useElementWidth<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
            if (!ref.current) {
                return;
            }

            const resizeObserver = new ResizeObserver(() => {
                setWidth(ref.current?.offsetWidth ?? 0);
            });

            resizeObserver.observe(ref.current);

            return function cleanup() {
                resizeObserver.disconnect();
            }
        },
        [ref.current]
    );

    return {width, ref} as const;
}