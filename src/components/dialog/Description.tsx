import { DialogDescription as RadixDialogDescription } from "@radix-ui/react-dialog";
import type { DialogDescriptionProps as RadixDialogDescriptionProps} from "@radix-ui/react-dialog";

export type DialogDescriptionProps = RadixDialogDescriptionProps;

const Description = RadixDialogDescription;

Description.displayName = "DialogDescription";

export default Description;