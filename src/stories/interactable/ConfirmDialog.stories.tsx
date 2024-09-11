import {Meta, StoryObj} from "@storybook/react";
import {ConfirmDialog, ConfirmDialogProps} from "@src/index";

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
        },
        onCancel: {
            type: "boolean",
            defaultValue: undefined,
            description: "Callback function, triggered when 'cancel' is clicked. Simplified as boolean in this control (true=\"() => {alert('cancel')}\", false=undefined)",
        },
        onConfirm: {
            type: "boolean",
            defaultValue: undefined,
            description: "Callback function, triggered when 'ok' is clicked. Simplified as boolean in this control (true=\"() => {alert('ok')}\", false=undefined)",
        },
    },
    args: {
        confirmContent: undefined,
        cancelContent: undefined,
        dialogTitle: "The dialog title",
        dialogBody: "The dialog body content?",
        hasCancel: undefined,
        hasConfirm: undefined,
        disableHeader: undefined,
        disableFooter: undefined,
        showContentCloseIcon: undefined,
        onConfirm: undefined,
        onCancel: undefined,
        variant: "standard",
    },
};
export const ConfirmationDialogHiddenStory: StoryObj<ConfirmDialogProps> = {
    render: ({onConfirm, onCancel, ...props}) => (
        <ConfirmDialog
            {...props}
            onConfirm={onConfirm ? () => {
                alert("ok");
            } : undefined}
            onCancel={onCancel ? () => {
                alert("cancel");
            } : undefined}
        >
            <button className={"border-2 border-[black] rounded p-2"}>Click me to toggle Dialog</button>
        </ConfirmDialog>
    ),
    args: {},
};
export default meta;
