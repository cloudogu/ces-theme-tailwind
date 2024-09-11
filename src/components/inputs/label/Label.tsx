import Hint from "@components/inputs/label/Hint";
import TextContainer from "@components/inputs/label/TextContainer";
import {subTestid} from "@src/types/Testid";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import LabelDangerIcon from "./LabelDangerIcon";
import LabelSuccessIcon from "./LabelSuccessIcon";
import SegmentedLabel from "./SegmentedLabel";
import type {SegmentedLabelProps} from "./SegmentedLabel";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type { ReactNode} from "react";

export type LabelProps = SegmentedLabelProps & {
    text: ReactNode;
    hint?: ReactNode;
    errorHint?: ReactNode;
};

type ComponentType = ComponentTypeWithRef<LabelProps, HTMLLabelElement>;

const Label = forwardRef<HTMLLabelElement, LabelProps>((
    {
        text,
        variant,
        hint,
        errorHint,
        children,
        ...props
    }, ref) => (
    <SegmentedLabel
        {...props}
        ref={ref}
        variant={variant}
        className={
            twMerge(
                "flex flex-col",
                props.className,
            )
        }
    >
        <TextContainer>
            {variant === "danger" && <LabelDangerIcon data-testid={subTestid(props, "danger")}/>}
            {variant === "success" && <LabelSuccessIcon data-testid={subTestid(props, "success")}/>}
            {text}
        </TextContainer>
        {variant === "danger" && errorHint && <Hint variant={"danger"}>{errorHint}</Hint>}
        {hint && <Hint>{hint}</Hint>}
        {children}
    </SegmentedLabel>
)) as ComponentType;

Label.displayName = "Label";

export default Label;
