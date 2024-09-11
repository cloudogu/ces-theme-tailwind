import {subTestid} from "@src/types/Testid";
import React, {forwardRef} from "react";
import Content from "./Content";
import Item from "./Item";
import SegmentedSelect from "./SegmentedSelect";
import TriggerButton from "./TriggerButton";
import type Testid from "../../../types/Testid";
import type {SelectProps as RadixSelectProps} from "@radix-ui/react-select";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";

export type SelectProps = RadixSelectProps & {
    placeholder: string;
    className?: string;
    id?: string;
} & Testid;

type ComponentType = ComponentTypeWithRef<SelectProps, HTMLButtonElement> &
    {
        Item: typeof Item;
    };

const Select = forwardRef<HTMLButtonElement, SelectProps>((props, ref) => (
    <SegmentedSelect {...props}>
        <TriggerButton
            data-testid={subTestid(props, "trigger")}
            className={props.className}
            id={props.id}
            ref={ref}
        >
            {props.placeholder}
        </TriggerButton>
        <Content data-testid={props["data-testid"]}>
            {props.children}
        </Content>
    </SegmentedSelect>
)) as ComponentType;

Select.displayName = "Select";
Select.Item = Item;

export default Select;