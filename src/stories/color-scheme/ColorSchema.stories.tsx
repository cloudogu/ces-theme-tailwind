import React from 'react';
import ColorPalette from "./components/ColorPalette";
import ThemePalette from "./components/ThemePalette";
import {SSR} from "@phosphor-icons/react";

export default {
    title: 'CES Theme/Color Scheme',
    component: ColorPalette,
};

// @ts-ignore
const Template = (args) => <ThemePalette {...args}/>;
const Template2 = (args: any) => <ColorPalette {...args}/>;


export const Theme = Template.bind({});
export const AvailableColors = Template2.bind({});

// @ts-ignore
Theme.args = {};
