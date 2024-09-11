import { ToastTitle as RadixToastTitle } from "@radix-ui/react-toast";
import type { ToastTitleProps as RadixToastTitleProps} from "@radix-ui/react-toast";

export type ToastTitleProps = RadixToastTitleProps;

const Title = RadixToastTitle;

Title.displayName = "ToastTitle";

export default Title;