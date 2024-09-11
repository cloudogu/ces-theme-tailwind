import { ToastClose as RadixToastClose}from "@radix-ui/react-toast";
import type {ToastCloseProps as RadixToastCloseProps} from "@radix-ui/react-toast";

export type ToastCloseProps = RadixToastCloseProps;

const Close = RadixToastClose;

Close.displayName = "ToastClose";

export default Close;