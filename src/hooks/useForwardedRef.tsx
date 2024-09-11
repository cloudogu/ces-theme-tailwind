import {Ref, useImperativeHandle, useRef} from "react";

export function useForwardedRef<T>(parentRef: Ref<T>) {
    const ref = useRef<T>(null);
    useImperativeHandle(parentRef, () => ref.current as T);

    return ref;
}