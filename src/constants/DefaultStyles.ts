import {twJoin, twMerge} from "tailwind-merge";
import ColorGroupBrand from "./ColorGroupBrand";
import ColorGroupDanger from "./ColorGroupDanger";
import ColorGroupNeutral from "./ColorGroupNeutral";
import ColorGroupSuccess from "./ColorGroupSuccess";

const DefaultStyles = {
    Focus: "focus-visible:ces-focused",
    TextColorDefault: "bg-old-background text-old-text",
    DefaultTextStyling: "", // defined below
    UnstyledAnchor: "no-underline shadow-none",
    TextSizeRegular: "desktop:text-desktop-regular mobile:text-mobile-regular",
    TextSizeSmall: "desktop:text-desktop-small mobile:text-mobile-small",
    TextSizeXl: "desktop:text-desktop-xl mobile:text-mobile-xl",
    TextSize2Xl: "desktop:text-desktop-2xl mobile:text-mobile-2xl",
    TextSize3Xl: "desktop:text-desktop-3xl mobile:text-mobile-3xl",
    TextSize4Xl: "desktop:text-desktop-4xl mobile:text-mobile-4xl",
    TextSize5Xl: "desktop:text-desktop-5xl mobile:text-mobile-5xl",
    TextSize6Xl: "desktop:text-desktop-6xl mobile:text-mobile-6xl",
    ColorGroups: {
        Brand: {
            Primary: twJoin(...Object.values(ColorGroupBrand.Primary)),
            Secondary: twJoin(...Object.values(ColorGroupBrand.Secondary)),
            Tertiary: twJoin(...Object.values(ColorGroupBrand.Tertiary)),
        },
        Danger: {
            Primary: twJoin(...Object.values(ColorGroupDanger.Primary)),
            Secondary: twJoin(...Object.values(ColorGroupDanger.Secondary)),
            Tertiary: twJoin(...Object.values(ColorGroupDanger.Tertiary)),
        },
        Success: {
            Primary: twJoin(...Object.values(ColorGroupSuccess.Primary)),
            Secondary: twJoin(...Object.values(ColorGroupSuccess.Secondary)),
            Tertiary: twJoin(...Object.values(ColorGroupSuccess.Tertiary)),
        },
        Neutral: {
            Primary: twJoin(...Object.values(ColorGroupNeutral.Primary)),
            Secondary: twJoin(...Object.values(ColorGroupNeutral.Secondary)),
            Tertiary: twJoin(...Object.values(ColorGroupNeutral.Tertiary)),
        },
    },
};

DefaultStyles.DefaultTextStyling = twMerge(DefaultStyles.TextColorDefault, DefaultStyles.TextSizeRegular);

export default DefaultStyles;