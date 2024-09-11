import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {ToastProps, ToastActionButtonElement, useToast, Button, ToastProvider, ToastActionButton, ToastSegmentedProvider} from "../../index";

type ToasterProps = ToastProps & {
    title?: string;
    description?: string;
    actionBtn?: ToastActionButtonElement;
    maxVisibleToasts?: number;
};

const Toaster: React.FC = (args: Story["args"]) => {
    const { toast } = useToast();

    return (
        <div>
            <Button
                variant="primary"
                onClick={() => {
                    toast(args);
                }}
            >
                {args.children}
            </Button>
            <ToastProvider data-testid="TestToastProvider" maxVisibleToasts={args.maxVisibleToasts} />
        </div>
    );
};

const meta: Meta<typeof Toaster> = {
    title: "CES Theme/Interactable/Toast",
    component: Toaster,
    args: {
        children: "Show Toast",
        description: "This is the default toast",
        maxVisibleToasts: 5,
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        description: {
            table: {
                disable: true,
            },
        },
        actionBtn: {
            table: {
                disable: true,
            },
        },
        title: {
            table: {
                disable: true,
            },
        },
        variant: {
            control: "inline-radio",
            options: ["neutral", "brand", "success", "danger"],
            defaultValue: "neutral",
            description: "Defines the variant of the toast.",
        },
    },
};

export default meta;

type Story = Omit<StoryObj<typeof Toaster>, "args"> & {
    args: ToasterProps;
};

export const DefaultToast: Story = {
    args: {},
};

export const TwoLineToast: Story = {
    args: {
        children: "Show Two Lines Toast",
        description: "This is a toast having two lines of text. This is the second line.",
    },
};

export const ActionButtonToast: Story = {
    args: {
        children: "Show Toast with Action Button",
        description: "Please try again later.",
        actionBtn: <ToastActionButton altText="Try again">Try again</ToastActionButton>,
    },
};

export const ScrollBarToast: Story = {
    args: {
        children: "Show Toast with Scroll Bar",
        description: "There is not enough space to display all the content. Please try again later.",
        actionBtn: <ToastActionButton altText="Try again">Try again</ToastActionButton>,
    },
};

export const MobileToast: Story = {
    args: {
        ...DefaultToast.args,
    },
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};

export const SegmentedToast: Story = {
    render: (args: ToasterProps) => {
        const [open, setOpen] = React.useState(false);
        const eventDateRef = React.useRef(new Date());
        const timerRef = React.useRef(0);

        React.useEffect(() => {
            return () => clearTimeout(timerRef.current);
        }, []);

        return (
            <ToastSegmentedProvider swipeDirection="left">
                <button
                    className="inline-flex items-center justify-center rounded text-desktop-regular px-default-2x h-9 bg-neutral-weaker shadow-[0_2px_10px] shadow-neutral-weak focus:shadow-[0_0_0_2px] focus:shadow-neutral"
                    onClick={() => {
                        setOpen(false);
                        window.clearTimeout(timerRef.current);
                        timerRef.current = window.setTimeout(() => {
                            eventDateRef.current = new Date();
                            setOpen(true);
                        }, 100);
                    }}
                >
                    Add to calendar
                </button>

                <ToastSegmentedProvider.Toast
                    className="bg-neutral-weaker rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-default-2x grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-default-2x items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
                    open={open}
                    onOpenChange={setOpen}
                >
                    <ToastSegmentedProvider.Toast.Title className="[grid-area:_title] mb-[5px] text-desktop-regular">Scheduled: Catch up</ToastSegmentedProvider.Toast.Title>
                    <ToastSegmentedProvider.Toast.Description asChild>
                        <time className="[grid-area:_description] m-0 text-desktop-small" dateTime={eventDateRef.current.toISOString()}>
                            {new Intl.DateTimeFormat("en-EN", { dateStyle: "full" }).format(eventDateRef.current)}
                        </time>
                    </ToastSegmentedProvider.Toast.Description>
                    <ToastSegmentedProvider.Toast.Action className="[grid-area:_action]" asChild altText="Goto schedule to undo">
                        <button className="inline-flex items-center justify-center rounded text-xs px-[10px] h-[25px] bg-success-weaker text-success shadow-[inset_0_0_0_1px] shadow-success-weaker hover:shadow-[inset_0_0_0_1px] hover:shadow-success focus:shadow-[0_0_0_2px] focus:shadow-success">
                            Undo
                        </button>
                    </ToastSegmentedProvider.Toast.Action>
                </ToastSegmentedProvider.Toast>
                <ToastSegmentedProvider.Viewport className="[--viewport-padding:_25px] fixed bottom-0 left-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
            </ToastSegmentedProvider>
        );
    },
    args: {
        children: "Show Segmented Toast",
        description: "This is a segmented toast.",
    },
};