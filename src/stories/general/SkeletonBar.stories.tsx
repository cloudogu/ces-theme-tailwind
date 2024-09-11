import React from "react";
import {Meta} from "@storybook/react";
// @ts-ignore
import {SkeletonBar as CesSkeletonBar} from "@src/index";

const meta: Meta<{ color: string }> = {
    title: "CES Theme/General",
    argTypes: {},
};

export const SkeletonBar = (args: any) => {
    return (
        <CesSkeletonBar/>
    );
};
export default meta;
