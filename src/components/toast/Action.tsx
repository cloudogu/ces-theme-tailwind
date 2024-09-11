import { ToastAction as RadixToastAction}from "@radix-ui/react-toast";
import type {ToastActionProps as RadixToastActionProps} from "@radix-ui/react-toast";

export type ToastActionProps = RadixToastActionProps;

const Action = RadixToastAction;

Action.displayName = "ToastAction";

export default Action;