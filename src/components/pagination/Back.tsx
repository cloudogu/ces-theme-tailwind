import Button from "@components/inputs/Button";
import {subTestid} from "@src/types/Testid";
import {t} from "i18next";
import React, {forwardRef} from "react";
import { CesIconCaretLeft } from "../icons";
import type {IconProps} from "@phosphor-icons/react";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

const Icon = (props: IconProps) => <CesIconCaretLeft weight="bold" {...props}/>;

export type PaginationBackProps = ComponentPropsWithoutRef<"button"> & Testid;

type ComponentType =
    ComponentTypeWithRef<PaginationBackProps,HTMLButtonElement>
    & {
    Icon: typeof Icon;
};

const Back = forwardRef<HTMLButtonElement, PaginationBackProps>(
    (props, ref) => (
        <Button
            {...props}
            aria-label={props["aria-label"] === undefined ? t("ces-theme-tailwind-lib-translation.table.pagination.aria-back") : props["aria-label"]}
            ref={ref}
            variant={"tertiary"}
            color={"neutral"}
        >
            {props.children ?? <Icon aria-hidden={true} data-testid={subTestid(props, "icon")}/>}
        </Button>
    )
) as ComponentType;

Back.displayName = "Back";
Back.Icon = Icon;
export default Back;