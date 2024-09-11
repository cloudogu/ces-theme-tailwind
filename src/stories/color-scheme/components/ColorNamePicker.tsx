import {useState} from "react";
import CopyButton from "./CopyButton";
import type {Color} from "./ColorCard";
import type {ComponentPropsWithoutRef} from "react";

export default function ColorNamePicker({selectedColor, ...props}: ComponentPropsWithoutRef<"div"> & {
    selectedColor: Color | undefined;
}) {
    const [type, setType] = useState("bg");
    const [modificators, setModificators] = useState([] as string[]);
    const modificatorString = `${modificators.join(":")}:`.replace(/^:$/, "");
    const resultClass = `${modificatorString}${type}-${selectedColor?.name}`;

    if (!selectedColor){
        return <></>;
    }

    return (
        <div {...props}>
            <h2 className={"text-center text-3xl mt-6 mb-4"}>Namepicker</h2>
            <div className={"flex flex-row justify-center"}>
                <fieldset className={"flex flex-col mr-20"}>
                    {renderRadio("bg", "Hintergrund", type, setType)}
                    {renderRadio("text", "Text/Schrift", type, setType)}
                    {renderRadio("border", "Rahmen (Border)", type, setType)}
                    {renderRadio("outline", "Rahmen (Outline)", type, setType)}
                </fieldset>

                <fieldset className={"flex flex-col"}>
                    {renderCheckbox("hover", "Hover", modificators, setModificators)}
                    {renderCheckbox("active", "Active", modificators, setModificators)}
                    {renderCheckbox("focus", "Focus", modificators, setModificators)}
                </fieldset>
            </div>
            <h2 className={"text-2xl text-center mt-4"}>
                {resultClass}
                <CopyButton text={resultClass} className={"text-old-text hover:text-brand active:text-brand-stronger"}/>
            </h2>
        </div>
    );
}

function renderCheckbox(name: string, desc: string, currentModificators: string[], setModificators: (_: string[]) => void) {
    return (
        <div>
            <input
                id={name}
                type="checkbox"
                value={name}
                name={"type"}
                className={"mr-1"}
                checked={currentModificators.includes(name)}
                onChange={(e) => {
                    if (e?.target?.checked) {
                        setModificators([...currentModificators, name]);
                    } else {
                        setModificators([...currentModificators.filter(m => m !== name)]);
                    }
                }}
            />
            <label htmlFor={name}>{desc}</label>
        </div>
    );
}

function renderRadio(name: string, desc: string, currentType: string, setType: (_: string) => void) {
    return (
        <div>
            <input
                id={name}
                type="radio"
                value={name}
                name={"type"}
                className={"mr-1"}
                checked={currentType === name}
                onChange={(e) => {
                    setType(e?.target?.value || "bg");
                }}
            />
            <label htmlFor={name}>{desc}</label>
        </div>
    );
}