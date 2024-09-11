import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Content from "./Content";
import Portal from "./Portal";
import SegmentedContent from "./SegmentedContent";
import Trigger from "./Trigger";
import TriggerButton from "./TriggerButton";
import type Testid from "../../types/Testid";
import type {DropdownMenuProps as RadixDropdownMenuProps} from "@radix-ui/react-dropdown-menu/dist";

export type SegmentedDropdownMenuProps = RadixDropdownMenuProps & Testid;

const SegmentedDropdownMenu = function (props: SegmentedDropdownMenuProps) {
    return (
        <DropdownMenu.Root {...props}/>
    );
};

SegmentedDropdownMenu.displayName = "SegmentedDropdownMenu";
SegmentedDropdownMenu.Trigger = Trigger;
SegmentedDropdownMenu.TriggerButton = TriggerButton;
SegmentedDropdownMenu.SegmentedContent = SegmentedContent;
SegmentedDropdownMenu.Content = Content;
SegmentedDropdownMenu.Portal = Portal;

export default SegmentedDropdownMenu;