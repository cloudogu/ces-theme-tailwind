import { CesIconDotsThreeOutlineVertical } from "@components/icons";
import React from "react";
import type {IconProps} from "@phosphor-icons/react";

function ThreeDotIcon(props: IconProps) {
    return (
        <CesIconDotsThreeOutlineVertical weight={"fill"} {...props} className={"block"}/>
    );
}

const CommonIcons = {
    ThreeDotIcon: ThreeDotIcon
};

export default CommonIcons;