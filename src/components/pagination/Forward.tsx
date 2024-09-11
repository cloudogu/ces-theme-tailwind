import Button from "@components/inputs/Button";
import {subTestid} from "@src/types/Testid";
import {t} from "i18next";
import React, {forwardRef} from "react";
import { CesIconCaretRight } from "../icons";
import type {IconProps} from "@phosphor-icons/react";
import type {ComponentTypeWithRef} from "@src/types/ComponentTypeWithRef";
import type Testid from "@src/types/Testid";
import type {ComponentPropsWithoutRef} from "react";

const Icon = (props: IconProps) => <CesIconCaretRight weight="bold" {...props}/>;

export type PaginationForwardProps = ComponentPropsWithoutRef<"button"> & Testid & {
    "aria-label"?: string;
};

type ComponentType =
    ComponentTypeWithRef<PaginationForwardProps,HTMLButtonElement>
    & {
    Icon: typeof Icon;
};

const Forward = forwardRef<HTMLButtonElement, PaginationForwardProps>(
    (props, ref) => (
        <Button
            {...props}
            aria-label={props["aria-label"] === undefined ? t("ces-theme-tailwind-lib-translation.table.pagination.aria-forward") : props["aria-label"]}
            ref={ref}
            variant={"tertiary"}
            color={"neutral"}
        >
            {props.children ?? <Icon aria-hidden={true} data-testid={subTestid(props, "icon")}/>}
        </Button>
    )) as ComponentType;

Forward.displayName = "Forward";
Forward.Icon = Icon;
export default Forward;