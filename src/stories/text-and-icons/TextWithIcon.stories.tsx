import {TextWithIcon} from "@src/index";
import { CesIconTrash } from "@src/index";
import React from "react";

export default {
    title: "Old CES Theme/Text and Icons/TextWithicon",
    component: TextWithIcon,
};

// @ts-ignore
const Template = () => (<div>
    <TextWithIcon icon={<CesIconTrash />} className={"desktop:text-desktop-small mobile:text-desktop-small"}>My text</TextWithIcon>
    <TextWithIcon icon={<CesIconTrash />}>My text</TextWithIcon>
    <TextWithIcon icon={<CesIconTrash />} className={"desktop:text-desktop-xl mobile:text-desktop-xl"}>My text</TextWithIcon>
    <TextWithIcon icon={<CesIconTrash />} className={"desktop:text-desktop-2xl mobile:text-desktop-2xl"}>My text</TextWithIcon>
    <TextWithIcon icon={<CesIconTrash />} className={"desktop:text-desktop-3xl mobile:text-desktop-3xl"}>My text</TextWithIcon>
    <TextWithIcon icon={<CesIconTrash />} className={"desktop:text-desktop-4xl mobile:text-desktop-4xl"}>My text</TextWithIcon>
    <TextWithIcon icon={<CesIconTrash />} className={"desktop:text-desktop-5xl mobile:text-desktop-5xl"}>My text</TextWithIcon>
    <TextWithIcon icon={<CesIconTrash />} className={"desktop:text-desktop-6xl mobile:text-desktop-6xl"}>My text</TextWithIcon>
</div>);

export const Primary = Template.bind({});

// @ts-ignore
Primary.args = {
};
