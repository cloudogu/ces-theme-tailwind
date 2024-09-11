import {forwardRef} from "react";
import Item from "./Item";
import type {DropdownMenuItemProps} from "./Item";
import type {ComponentPropsWithoutRef} from "react";

export type DropdownMenuButtonItemProps = Omit<ComponentPropsWithoutRef<"button">, "color"> & Omit<DropdownMenuItemProps, "asChild">;

const ButtonItem = forwardRef<HTMLButtonElement, DropdownMenuButtonItemProps>((props, ref) => (
    <Item {...props} asChild={true}>
        <button
            {...props}
            ref={ref}
        />
    </Item>
));

ButtonItem.displayName = "ButtonItem";

export default ButtonItem;
