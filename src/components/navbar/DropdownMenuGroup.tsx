import Group from "@components/dropdown-menu/Group";
import DropdownMenuLink from "@components/navbar/DropdownMenuLink";
import React, { forwardRef} from "react";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

export type NavbarDropdownMenuGroupProps = ComponentPropsWithoutRef<"div"> & Testid;

type ComponentType = ComponentTypeWithRef<NavbarDropdownMenuGroupProps, HTMLDivElement> & {
    Link: typeof DropdownMenuLink;
};

const DropdownMenuGroup = forwardRef<HTMLDivElement, NavbarDropdownMenuGroupProps>((props, ref) => (
    <Group {...props} ref={ref}/>
)) as ComponentType;

DropdownMenuGroup.displayName = "NavbarDropdownMenuGroup";
DropdownMenuGroup.Link = DropdownMenuLink;

export default DropdownMenuGroup;