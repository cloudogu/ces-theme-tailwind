import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import SegmentedContent from "./SegmentedContent";
import type Testid from "../../types/Testid";
import type {DropdownMenuPortalProps as RadixDropdownMenuPortalProps} from "@radix-ui/react-dropdown-menu/dist";

export type DropdownMenuPortalProps = RadixDropdownMenuPortalProps & Testid;

const Portal = function (props: DropdownMenuPortalProps) {
    return (
        <DropdownMenu.Portal {...props}/>
    );
};

Portal.displayName = "Portal";
Portal.Content = SegmentedContent;
export default Portal;