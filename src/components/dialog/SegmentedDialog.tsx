import * as RadixDialog from "@radix-ui/react-dialog";
import Close from "./Close";
import Content from "./Content";
import { VariantContext} from "./Context";
import Portal from "./Portal";
import Trigger from "./Trigger";
import TriggerButton from "./TriggerButton";
import type {Variant} from "./Context";
import type Testid from "../../types/Testid";

export type DialogProps = RadixDialog.DialogProps &
    Testid & {
    variant?: Variant;
};

const SegmentedDialog = ({variant = "standard", children, ...props}: DialogProps) => (
    <RadixDialog.Root {...props}>
        <VariantContext.Provider value={variant}>
            {children}
        </VariantContext.Provider>
    </RadixDialog.Root>
);

SegmentedDialog.displayName = "SegmentedDialog";
SegmentedDialog.Trigger = Trigger;
SegmentedDialog.TriggerButton = TriggerButton;
SegmentedDialog.Portal = Portal;
SegmentedDialog.Content = Content;
SegmentedDialog.Close = Close;

export default SegmentedDialog;
