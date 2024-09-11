import { ToastProvider as RadixToastProvider}from "@radix-ui/react-toast";
import Counter from "./Counter";
import Toast from "./Toast";
import Viewport from "./Viewport";
import type {ToastProviderProps as RadixToastProviderProps} from "@radix-ui/react-toast";

export type ToastSegmentedProviderProps = RadixToastProviderProps;

type ComponentType = typeof RadixToastProvider & {
    Toast: typeof Toast;
    Viewport: typeof Viewport;
    Counter: typeof Counter;
}

const SegmentedProvider = RadixToastProvider as ComponentType;

SegmentedProvider.displayName = "ToastSegmentedProvider";
SegmentedProvider.Toast = Toast;
SegmentedProvider.Viewport = Viewport;
SegmentedProvider.Counter = Counter;

export default SegmentedProvider;