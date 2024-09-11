import {useState} from "react";
import colorscheme from "../../../../config/colorscheme.json";
import ColorCard from "./ColorCard";
import type {Color} from "./ColorCard";
import type {ComponentPropsWithoutRef} from "react";
import {twMerge} from "tailwind-merge";

export default function ColorPalette(props: ComponentPropsWithoutRef<"div"> & { allColors?: boolean }) {
    const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
    const selectColor = function (c: string) {
        if (c === selectedColor) {
            setSelectedColor(undefined);
        } else {
            setSelectedColor(c);
        }
    };

    const colors = {
        brand: extractColor("brand"),
        success: extractColor("success"),
        danger: extractColor("danger"),
        warning: extractColor("warning"),
        neutral: extractColor("neutral"),
        special: [
            {color: colorscheme.focus, name: "focus"},
            {color: colorscheme.base.text, name: "base-text"},
            {color: colorscheme.inverted.text, name: "inverted-text"} as Color
        ] as Color[],
    } as { [key: string]: Color[] };


    return (
        <div {...props} className={"flex flex-row"}>
            {
                Object.keys(colors).map(k => (
                    <div className={"flex flex-col"} key={k}>
                        <h2 className={twMerge("text-center text-xl", `text-${k}-strong`)}>{k}</h2>
                        {colors[k].map(c => renderColor(c, selectColor, selectedColor))}
                    </div>
                ))
            }
        </div>
    );
}

function extractColor(name: string): Color[] {
    return Object.keys((colorscheme as any)[name])
        .sort((a, b) => Number(b) - Number(a))
        .map(k => ({
            name: `${name}-${k}`,
            color: ((colorscheme as any)[name] as { [key: string]: string })[k],
        })) as Color[];
}

function renderColor(color: Color, setSelectedColor: (_color: string) => void, selectedColor: string | undefined) {
    return (
        <ColorCard
            color={color}
            onSelect={setSelectedColor}
            key={color.color}
            selectedColor={selectedColor}
        />
    );
}