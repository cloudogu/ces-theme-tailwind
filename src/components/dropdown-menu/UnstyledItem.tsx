import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {forwardRef} from "react";
import type Testid from "../../types/Testid";
import type {DropdownMenuItemProps} from "@radix-ui/react-dropdown-menu/dist";

export type DropdownMenuUnstyledItemProps = DropdownMenuItemProps & Testid;

const UnstyledItem = forwardRef<HTMLDivElement, DropdownMenuUnstyledItemProps>((props, ref) => (
    <DropdownMenu.Item {...props} ref={ref}/>
));

UnstyledItem.displayName = "UnstyledItem";
export default UnstyledItem;