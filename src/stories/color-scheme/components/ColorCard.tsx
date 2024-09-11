import contrast from "get-contrast";
import React, {ComponentPropsWithoutRef, useState} from "react";
import {twMerge} from "tailwind-merge";
import CopyButton from "./CopyButton";
import hexToHsl from "hex-to-hsl";

interface ColorCardProps extends Omit<ComponentPropsWithoutRef<"div">, "color" | "onSelect"> {
    selectedColor?: string;
    onSelect: (_color: string) => void;
    color: Color | ThemeColor;
}

export interface Color {
    name: string;
    color: string;
}

export interface ThemeColor extends Color {
    colorName: string;
}

export default function ColorCard({selectedColor, onSelect, color, ...props}: ColorCardProps) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const isThemeColor = Object.hasOwn(color, "colorName");
    const enoughContrastToSelected = contrast.isAccessible(selectedColor ?? color.color, color.color);
    const isSelected = selectedColor === color.color;
    const hasSelectedColor = !!selectedColor && !isSelected;
    const fontColor = (contrast.isAccessible(color.color, "black") || (hasSelectedColor && !isHover)) ? "text-[black]" : "text-[white]";
    const borderColor = (contrast.isAccessible(color.color, "black") || (hasSelectedColor && !isHover)) ? "border-[black]" : "border-[white]";
    const activeFontColor = (!contrast.isAccessible(color.color, "black") && !(hasSelectedColor && !isHover)) ? "active:text-[black]" : "active:text-[white]";
    const btnClasses = twMerge(fontColor, borderColor, activeFontColor);
    const asHsl = hexToHsl(color.color);
    const hsl = `hsl(${asHsl[0]}, ${asHsl[1]}%, ${asHsl[2]}%)`;
    const name = color.name ?? "???";
    const colorName = (color as ThemeColor).name ?? "";

    return (
        <div
            id={colorName}
            data-testid={colorName}
            {...props}
            className={
                twMerge(
                    (isThemeColor) ? `bg-${colorName}` : "",
                    "flex flex-col border p-2 hover:outline hover:outline-4 hover:outline-[#CC14CC] outline-offset-2 mx-2 my-border-3] min-w-[240px] select-none text-[13px]",
                    (isSelected) ? "outline outline-8 outline-[#CC14CC]" : "",
                    fontColor,
                    borderColor,
                    (enoughContrastToSelected && hasSelectedColor && !isHover) ? "bg-[#1F7A38]" : "",
                    (!enoughContrastToSelected && hasSelectedColor && !isHover) ? "bg-[#A32929]" : "",
                    (isSelected) ? "z-50" : "z-0",
                    "hover:z-50",
                    props.className
                )
            }
            style={((!hasSelectedColor || isHover) && !isThemeColor) ? {backgroundColor: color.color} : {}}
            onClick={
                (e) => {
                    const classNames = (e.target as any)["className"] ?? "";
                    if (typeof classNames !== "string" || classNames.includes("noninteractable")) return;
                    return onSelect(color.color);
                }
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={"flex flex-row justify-center"}>
                <span className={"flex flex-row"}>
                    {name}
                    <span className={"flex items-center noninteractable"}>
                        <CopyButton text={name} className={btnClasses}/>
                    </span>
                </span>
            </span>
            {isThemeColor && (!hasSelectedColor || isHover) &&
                <span className={"flex flex-row justify-center"}>
                    <span className={"flex flex-row"}>
                        {(color as ThemeColor).colorName}
                    </span>
                </span>
            }
            <span className={"flex flex-row justify-center"}>
                <span className={"flex flex-row"}>
                    {(!hasSelectedColor || isHover) &&
                        <>
                            {color.color.toUpperCase()}
                            <span className={"flex items-center noninteractable"}>
                                <CopyButton text={color.color.toUpperCase()} className={btnClasses}/>
                            </span>
                        </>
                    }
                    {(hasSelectedColor && !isHover && selectedColor) &&
                        <>
                            Kontrast:&nbsp;
                            {
                                Math.round(contrast.ratio(selectedColor as string, color.color) * 100) / 100
                            }
                        </>
                    }
                </span>
            </span>
            <span className={"flex flex-row justify-center"}>
                <span className={"flex flex-row"}>
                    {(!isThemeColor && (!hasSelectedColor || isHover)) &&
                        <>
                            {hsl}
                            <span className={"flex items-center noninteractable"}>
                                <CopyButton text={hsl} className={btnClasses}/>
                            </span>
                        </>
                    }
                    {(hasSelectedColor && !isHover) &&
                        <>
                            Score:&nbsp;
                            {
                                contrast.score(selectedColor as string, color.color)
                            }
                        </>
                    }
                </span>
            </span>
        </div>
    );
}