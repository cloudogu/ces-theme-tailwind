import {Meta, StoryObj} from "@storybook/react";
import {Button, SegmentedDialog, subTestid} from "@src/index";
import {ConfirmDialogProps} from "@src/index";

const meta: Meta<ConfirmDialogProps> = {
    title: "CES Theme/Interactable/Dialog",
    argTypes: {
        variant: {
            control: "inline-radio",
            options: ["standard", "danger"],
            defaultValue: "standard",
            description: "Defines the variant of the dialog (standard / danger).",
        },
        showContentCloseIcon: {
            control: "boolean",
            defaultValue: true,
            description: "Defines whether to show the close icon ('x') in the dialog or not.",
        },
        disableHeader: {
            control: "boolean",
            defaultValue: false,
            description: "Disables the header if it's set to true.",
        },
        disableFooter: {
            control: "boolean",
            defaultValue: false,
            description: "Disables the footer if it's set to true.",
        },
        hasConfirm: {
            control: "boolean",
            defaultValue: undefined,
            description: "If set to true, there will be an 'ok'-button in the footer, if footer is available. When onConfirm is included, the button is shown anyways.",
        },
        hasCancel: {
            control: "boolean",
            defaultValue: undefined,
            description: "If set to true, there will be a 'cancel'-button in the footer, if footer is available. When onConfirm is included, the button is shown anyways.",
        },
        dialogBody: {
            control: "text",
            defaultValue: "The dialog body content?",
            description: "The content of the dialog body.",
        },
        dialogTitle: {
            control: "text",
            defaultValue: "The dialog title",
            description: "The content of the dialog header.",
        },
        cancelContent: {
            control: "text",
            defaultValue: undefined,
            description: "The content of the 'cancel'-button. This value is optional, a default text is shown if not provided.",
        },
        confirmContent: {
            control: "text",
            defaultValue: undefined,
            description: "The content of the 'ok'-button. This value is optional, a default text is shown if not provided.",
        }
    },
    args: {
        confirmContent: "OK",
        cancelContent: "Cancel",
        dialogTitle: "The dialog title",
        dialogBody: "The dialog body content?",
        hasCancel: true,
        hasConfirm: true,
        disableHeader: false,
        disableFooter: false,
        showContentCloseIcon: true,
        variant: "standard",
    },
};

SegmentedDialog.Trigger.displayName = "SegmentedDialog.Trigger";
SegmentedDialog.Content.displayName = "SegmentedDialog.Content";
SegmentedDialog.Content.Header.displayName = "SegmentedDialog.Content.Header";
SegmentedDialog.Content.Header.Title.displayName = "SegmentedDialog.Content.Header.Title";
SegmentedDialog.Content.Body.displayName = "SegmentedDialog.Content.Body";
SegmentedDialog.Content.Footer.displayName = "SegmentedDialog.Content.Footer";
SegmentedDialog.Close.displayName = "SegmentedDialog.Close";
export const SegmentedDialogHiddenStory: StoryObj<ConfirmDialogProps> = {
    render: ({
                 variant,
                 dialogTitle,
                 dialogBody,
                 children,
                 onConfirm,
                 hasCancel,
                 hasConfirm,
                 confirmContent,
                 cancelContent,
                 onCancel,
                 showContentCloseIcon,
                 disableHeader,
                 disableFooter,
                 ...props
             }: ConfirmDialogProps) => (
        <SegmentedDialog variant={variant}>
            <SegmentedDialog.Trigger asChild>
                <button className={"border-2 border-[black] rounded p-2"}>Click me to toggle Dialog</button>
            </SegmentedDialog.Trigger>
            <SegmentedDialog.Content showDefaultCloseIcon={showContentCloseIcon}>
                {!disableHeader &&
                    <SegmentedDialog.Content.Header>
                        <SegmentedDialog.Content.Header.Title className="w-[90%]">
                            {dialogTitle}
                        </SegmentedDialog.Content.Header.Title>
                    </SegmentedDialog.Content.Header>
                }
                <SegmentedDialog.Content.Body>
                    {dialogBody}
                </SegmentedDialog.Content.Body>
                {!disableFooter &&
                    <SegmentedDialog.Content.Footer>
                        {(hasConfirm || onConfirm) &&
                            <SegmentedDialog.Close asChild>
                                <Button
                                    color={(variant === "danger") ? "danger" as const : "brand" as const}
                                    variant={"primary"}
                                    onClick={onConfirm}
                                    data-testid={subTestid(props, "confirm-btn")}
                                >
                                    {confirmContent}
                                </Button>
                            </SegmentedDialog.Close>
                        }
                        {(hasCancel || onCancel) &&
                            <SegmentedDialog.Close asChild>
                                <Button
                                    color={"neutral"}
                                    variant={"tertiary"}
                                    data-testid={subTestid(props, "close-btn")}
                                    onClick={onCancel}
                                >
                                    {cancelContent}
                                </Button>
                            </SegmentedDialog.Close>
                        }
                    </SegmentedDialog.Content.Footer>
                }
            </SegmentedDialog.Content>
        </SegmentedDialog>
    ),
    args: {},
};

export default meta;
