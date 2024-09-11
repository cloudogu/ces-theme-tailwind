import React, {useState} from "react";
import mapping from "../../../../config/colormapping.json";
import colorscheme from "../../../../config/colorscheme.json";
import ColorCard from "./ColorCard";
import ColorNamePicker from "./ColorNamePicker";
import type {ThemeColor,Color} from "./ColorCard";
import type {ComponentPropsWithoutRef, ReactNode} from "react";

function extractFullColor(colorName: string): ThemeColor[] {
    return Object
        .entries((mapping as any)[colorName])
        .map(entry =>
            ({
                name: `${colorName}-${entry[0]}`.replace("-DEFAULT", ""),
                color: (colorscheme as any)[colorName][(entry as any)[1]],
                colorName: `${colorName}-${entry[1]}`,
            })
        )
        .reduce((a, b) => [...a, b], [] as ThemeColor[]);
}

function extractColorByName(name: string): string {
    return name
        .split("-")
        .reduce((a: any, b: any) => a[b], colorscheme);
}

function extractOtherColor(name: string): ThemeColor{
    return {
        color: extractColorByName((mapping.other as any)[name]),
        colorName: (mapping.other as any)[name],
        name: name
    };
}

function getAllColors(): { [key: string]: {name: ReactNode, value: ThemeColor[]} }{
    return {
        brand: {
            name: <>Die Farbe<span className={"text-brand-strong"}>&nbsp;&apos;brand&apos;</span></>,
            value: extractFullColor("brand"),
        },
        success: {
            name: <>Die Farbe<span className={"text-success-strong"}>&nbsp;&apos;success&apos;</span></>,
            value: extractFullColor("success"),
        },
        danger: {
            name: <>Die Farbe<span className={"text-danger-strong"}>&nbsp;&apos;danger&apos;</span></>,
            value: extractFullColor("danger"),
        },
        warning: {
            name: <>Die Farbe<span className={"text-warning-strong"}>&nbsp;&apos;warning&apos;</span></>,
            value: extractFullColor("warning"),
        },
        neutral: {
            name: <>Die Farbe<span className={"text-neutral-strong"}>&nbsp;&apos;neutral&apos;</span></>,
            value: extractFullColor("neutral"),
        },
        special: {
            name: <>Farbsonderfälle</>,
            value: [
                extractOtherColor("default-background"),
                extractOtherColor("default-focus-inner"),
                extractOtherColor("default-focus-outer"),
                extractOtherColor("default-text"),
                extractOtherColor("inverted-text"),
            ]
        },
    } as { [key: string]: {name: ReactNode, value: ThemeColor[]} };
}

export default function ThemePalette(props: ComponentPropsWithoutRef<"div">) {
    const [selectedColor, setSelectedColor] = useState<Color | undefined>(undefined);
    const selectColor = function (c: Color) {
        if (c.color === selectedColor?.color) {
            setSelectedColor(undefined);
        } else {
            setSelectedColor(c);
        }
    };

    const colors = getAllColors();

    return (
        <div className={"flex flex-col"}>
            <div {...props} className={"flex flex-row select-none"}>
                {
                    Object.keys(colors).map(k => (
                        <div className={"flex flex-col border border-[black] p-2 mx-5"} key={k}>
                            <h2 className={"text-center text-xl mb-2"}>{colors[k].name}</h2>
                            {colors[k].value.map(c => renderColor(c, selectColor, selectedColor))}
                        </div>
                    ))
                }
            </div>
            <ColorNamePicker selectedColor={selectedColor}/>
        </div>
    );
}

function renderColor(color: ThemeColor, setSelectedColor: (_color: Color) => void, selectedColor: Color | undefined) {
    return (
        <ColorCard
            className={"min-w-[200px]"}
            color={color}
            onSelect={() => setSelectedColor(color)}
            key={color.name}
            selectedColor={selectedColor?.color}
        />
    );
}
