import * as RadixSelect from "@radix-ui/react-select";
import SegmentedContent from "./SegmentedContent";
import type {SelectPortalProps as RadixSelectPortalProps} from "@radix-ui/react-select";

export type SelectPortalProps = RadixSelectPortalProps;
const Portal = (props: SelectPortalProps) => (
    <RadixSelect.Portal {...props}/>
);

Portal.displayName = "Portal";
Portal.Content = SegmentedContent;

export default Portal;