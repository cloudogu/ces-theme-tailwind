import {translate} from "@src/functions/i18n";
import {subTestid} from "@src/types/Testid";
import Button from "../inputs/Button";
import SegmentedDialog from "./SegmentedDialog";
import type {Variant} from "./Context";
import type Testid from "../../types/Testid";
import type {ReactNode} from "react";

export type ConfirmDialogProps = {
    variant: Variant;
    dialogTitle: ReactNode;
    dialogBody: ReactNode;
    children: ReactNode;
    onConfirm?: () => any;
    hasConfirm?: true;
    confirmContent?: ReactNode;
    onCancel?: () => any;
    hasCancel?: true;
    cancelContent?: ReactNode;
    showContentCloseIcon?: boolean;
    disableHeader?: boolean;
    disableFooter?: boolean;
} & Testid;

const ConfirmDialog = ({
    variant = "standard",
    dialogTitle,
    dialogBody,
    children,
    onConfirm,
    hasCancel,
    hasConfirm,
    confirmContent = translate("ces-theme-tailwind-lib-translation.dialog.ok"),
    cancelContent = translate("ces-theme-tailwind-lib-translation.dialog.cancel"),
    onCancel,
    showContentCloseIcon = true,
    disableHeader = false,
    disableFooter = false,
    ...props
}: ConfirmDialogProps) => (
    <SegmentedDialog variant={variant}>
        <SegmentedDialog.Trigger
            data-testid={subTestid(props, "trigger")}
            asChild
        >
            {children}
        </SegmentedDialog.Trigger>
        <SegmentedDialog.Content data-testid={subTestid(props, "content")} showDefaultCloseIcon={showContentCloseIcon}>
            {!disableHeader &&
                <SegmentedDialog.Content.Header data-testid={subTestid(props, "header")}>
                    <SegmentedDialog.Content.Header.Title
                        className="w-[90%]">{dialogTitle}</SegmentedDialog.Content.Header.Title>
                </SegmentedDialog.Content.Header>
            }
            <SegmentedDialog.Content.Body>{dialogBody}</SegmentedDialog.Content.Body>
            {!disableFooter &&
                <SegmentedDialog.Content.Footer data-testid={subTestid(props, "footer")}>
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
);

ConfirmDialog.displayName = "ConfirmDialog";

export default ConfirmDialog;
