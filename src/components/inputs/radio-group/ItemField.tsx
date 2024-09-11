import { subTestid } from "@src/types/Testid";
import { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import SegmentedLabel from "../label/SegmentedLabel";
import Item from "./Item";
import type { RadioGroupItemProps } from "./Item";
import type { ReactNode} from "react";

export type RadioGroupItemFieldProps = RadioGroupItemProps & {
    children: ReactNode;
    alignLabel?: "LEFT" | "RIGHT";
};

const ItemField = forwardRef<HTMLButtonElement, RadioGroupItemFieldProps>(({ id, children, className, alignLabel = "RIGHT", ...props }, ref) => {
    const elementId = useMemo(() => id || uuidv4(), [id]);
    
    const label = (
        <SegmentedLabel htmlFor={elementId} data-testid={subTestid(props, "label")}>
            {children}
        </SegmentedLabel>
    );

    return (
        <div data-testid={props["data-testid"] || undefined} className={twMerge("flex flex-row items-center gap-2", className)}>
            {alignLabel === "LEFT" && children && label}
            <Item id={elementId} {...props} ref={ref} data-testid={subTestid(props, "item")} />
            {alignLabel === "RIGHT" && children && label}
        </div>
    );
});

ItemField.displayName = "RadioGroupItemField";

export default ItemField;
