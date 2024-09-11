import { DialogClose as RadixDialogClose}from "@radix-ui/react-dialog";
import type {DialogCloseProps as RadixDialogCloseProps} from "@radix-ui/react-dialog";

export type DialogCloseProps = RadixDialogCloseProps;

const Close = RadixDialogClose;

Close.displayName = "DialogClose";

export default Close;