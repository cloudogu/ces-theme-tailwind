import {cva} from "class-variance-authority";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../../constants/DefaultStyles";
import type Testid from "../../../types/Testid";
import type {VariantProps} from "class-variance-authority";
import type {ComponentPropsWithoutRef} from "react";


const hintVariants = cva(
    ["block", DefaultStyles.TextSizeSmall],
    {
        variants: {
            variant: {
                neutral: ["text-default-text"],
                danger: ["text-danger"],
            },
        },
        defaultVariants: {
            variant: "neutral",
        },
    }
);

export type HintProps = ComponentPropsWithoutRef<"span"> & Testid & VariantProps<typeof hintVariants>

const Hint = forwardRef<HTMLSpanElement, HintProps>((
    {
        variant,
        ...props
    }, ref) => (
    <span {...props}
        ref={ref}
        className={
            twMerge(hintVariants({variant}), props.className)
        }
    />
));

Hint.displayName = "Hint";

export default Hint;
