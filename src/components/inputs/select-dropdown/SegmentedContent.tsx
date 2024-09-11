import * as RadixSelect from "@radix-ui/react-select";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import Item from "./Item";
import ScrollDownButton from "./ScrollDownButton";
import ScrollUpButton from "./ScrollUpButton";
import Viewport from "./Viewport";
import type Testid from "../../../types/Testid";
import type {SelectContentProps as RadixSelectContentProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type SelectSegmentedContentProps = RadixSelectContentProps & Testid;

type ComponentType = ComponentTypeWithRef<SelectSegmentedContentProps, HTMLDivElement> &
    {
        Viewport: typeof Viewport,
        Item: typeof Item,
        ScrollUpButton: typeof ScrollUpButton,
        ScrollDownButton: typeof ScrollDownButton,
    };

const SegmentedContent: ComponentType = forwardRef<HTMLDivElement, SelectSegmentedContentProps>(
    ({position = "popper", ...props}, ref) =>
        (
            <RadixSelect.Content
                {...props}
                ref={ref}
                position={position}
                className={
                    twMerge(
                        "bg-default-background border border-brand rounded flex flex-col shadow shadow-brand-weak",
                        "w-[var(--radix-select-trigger-width)]",
                        "max-h-[var(--radix-select-content-available-height)]",
                        "group/select-content",
                        props.className
                    )
                }
            />
        )) as ComponentType;

SegmentedContent.displayName = "SegmentedContent";
SegmentedContent.Viewport = Viewport;
SegmentedContent.Item = Item;
SegmentedContent.ScrollUpButton = ScrollUpButton;
SegmentedContent.ScrollDownButton = ScrollDownButton;

export default SegmentedContent;