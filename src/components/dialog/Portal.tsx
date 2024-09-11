import {Portal as RadixPortal} from "@radix-ui/react-dialog";
import Overlay from "./Overlay";
import SegmentedContent from "./SegmentedContent";
import type {PortalProps as RadixPortalProps} from "@radix-ui/react-dialog";

export type DialogPortalProps = RadixPortalProps;

type ComponentType = typeof RadixPortal & {
    Overlay: typeof Overlay;
    SegmentedContent: typeof SegmentedContent;
}

const Portal = RadixPortal as ComponentType;

Portal.displayName = "DialogPortal";
Portal.Overlay = Overlay;
Portal.SegmentedContent = SegmentedContent;

export default Portal;