import React, {forwardRef} from "react";
import {subTestid} from "../../../types/Testid";
import Item from "./Item";
import Portal from "./Portal";
import ScrollDownButton from "./ScrollDownButton";
import ScrollUpButton from "./ScrollUpButton";
import SegmentedContent from "./SegmentedContent";
import Viewport from "./Viewport";
import type Testid from "../../../types/Testid";
import type {SelectContentProps as RadixSelectContentProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";


export type SelectContentProps = RadixSelectContentProps & Testid;

type ComponentType = ComponentTypeWithRef<SelectContentProps, HTMLDivElement> &
    {
        Item: typeof Item,
    };

const Content = forwardRef<HTMLDivElement, SelectContentProps>((props, ref) => (
    <Portal>
        <SegmentedContent data-testid={subTestid(props, "content")}>
            <ScrollUpButton data-testid={subTestid(props, "scrollup")}>
                <ScrollUpButton.Arrow data-testid={subTestid(props, "scrollup-arrow")}/>
            </ScrollUpButton>
            <Viewport {...props} ref={ref} data-testid={subTestid(props, "viewport")}/>
            <ScrollDownButton data-testid={subTestid(props, "scrolldown")}>
                <ScrollDownButton.Arrow data-testid={subTestid(props, "scrolldown-arrow")}/>
            </ScrollDownButton>
        </SegmentedContent>
    </Portal>
)) as ComponentType;

Content.displayName = "Content";
Content.Item = Item;

export default Content;