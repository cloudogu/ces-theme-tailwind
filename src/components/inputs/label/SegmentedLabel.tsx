import * as RadixLabel from "@radix-ui/react-label";
import {cva} from "class-variance-authority";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import DefaultStyles from "../../../constants/DefaultStyles";
import Hint from "./Hint";
import TextContainer from "./TextContainer";
import type Testid from "../../../types/Testid";
import type {LabelProps as RadixLabelProps} from "@radix-ui/react-label";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type {VariantProps} from "class-variance-authority";

const labelVariants = cva(
    ["block", DefaultStyles.DefaultTextStyling],
    {
        variants: {
            variant: {
                neutral: ["text-neutral"],
                success: [
                    "text-success",
                ],
                danger: [
                    "text-danger",
                ],
            },
        },
        defaultVariants: {
            variant: "neutral",
        },
    }
);

export type SegmentedLabelProps = RadixLabelProps & Testid & VariantProps<typeof labelVariants>;

type ComponentType =
    ComponentTypeWithRef<SegmentedLabelProps, HTMLLabelElement>
    & {
    TextContainer: typeof TextContainer;
    Hint: typeof Hint;
};

const SegmentedLabel = forwardRef<HTMLLabelElement, SegmentedLabelProps>((
    {
        variant,
        ...props
    }, ref) => (
    <RadixLabel.Root
        {...props}
        ref={ref}
        className={
            twMerge(
                labelVariants({variant}),
                props.className,
            )
        }
    />
)) as ComponentType;

SegmentedLabel.displayName = "Label";
SegmentedLabel.TextContainer = TextContainer;
SegmentedLabel.Hint = Hint;

export default SegmentedLabel;
