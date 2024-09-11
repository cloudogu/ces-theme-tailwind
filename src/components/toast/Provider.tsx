"use client";

import { subTestid } from "@src/types/Testid";
import CloseButton from "./CloseButton";
import Description from "./Description";
import SegmentedProvider from "./SegmentedProvider";
import Title from "./Title";
import Toast from "./Toast";
import Viewport from "./Viewport";
import { useToast } from "./useToast";
import type { ToastSegmentedProviderProps } from "./SegmentedProvider";
import type Testid from "@src/types/Testid";

export type ToastProviderProps = ToastSegmentedProviderProps & Testid & {
        maxVisibleToasts?: number;
    };

type ComponentType = React.FC<ToastProviderProps>;

const Provider: ComponentType = ({ maxVisibleToasts = 5, duration, ...props }: ToastProviderProps) => {
    const { toasts } = useToast();
    const providerProps = props;

    if (!duration) {
        duration = Infinity;
    }

    const visibleToast = toasts.slice(0, maxVisibleToasts).reverse();

    const moreToasts: number = toasts.length - visibleToast.length;

    return (
        <>
            <SegmentedProvider duration={duration} {...props}>
                {visibleToast.map(function ({ id, title, description, actionBtn, variant, ...props }) {
                    return (
                        <Toast key={id} variant={variant} className="gap-default" {...props} data-testid={subTestid(providerProps, `toast-${id}`)}>
                            <div className="flex flex-col h-full overflow-y-auto pr-1">
                                {title && <Title className="my-auto">{title}</Title>}
                                {description && (
                                    <Description variant={variant} className="my-auto" data-testid={subTestid(providerProps, "description")}>
                                        {description}
                                    </Description>
                                )}
                            </div>
                            <div className="ml-auto inline-flex items-center gap-default">
                                {actionBtn}
                                <CloseButton data-testid={subTestid(providerProps, "close-button")} />
                            </div>
                        </Toast>
                    );
                })}
                <Viewport key={toasts.length} counter={moreToasts} data-testid={subTestid(providerProps, "toast-viewport")} />
            </SegmentedProvider>
        </>
    );
};

Provider.displayName = "ToastProvider";

export default Provider;
