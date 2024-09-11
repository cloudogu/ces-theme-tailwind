import {useCallback, useMemo, useState} from "react";

/**
 * Use this hook if you have a component which can have a controlled and an uncontrolled state.
 * This hook will handle the state internally when no "value" or "onValueChange" is passed (uncontrolled)
 * and externally if "value" and "onValueChange" is provided.
 * Apart from that, it works like a normal useState and can be used the same way.
 * @param defaultValue The default value - The same value that would be passed to the useState hook
 * @param value The controlled value
 * @param onValueChange The controlled value setter
 */
export default function usePotentiallyControlledState<T>(defaultValue: T, value?: T, onValueChange?: (_: T) => void) {
    const [innerValue, setInnerValue] = useState<T>(value ?? defaultValue);
    const outerValue = useMemo(
        () => value !== undefined ? value : innerValue,
        [value, innerValue]
    );

    const setOuterValue = useCallback(
        (newValue: T) => {
            if (onValueChange !== undefined) {
                onValueChange(newValue);
            }
            if (value === undefined) {
                setInnerValue(newValue);
            }
        },
        [value, onValueChange, setInnerValue]
    );

    return useMemo(() => [outerValue, setOuterValue] as const, [outerValue, setOuterValue]);
}