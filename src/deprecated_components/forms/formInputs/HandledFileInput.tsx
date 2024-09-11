import {useContext, useEffect, useReducer, useRef} from "react";
import FileInput from "../../inputs/FileInput";
import {FormContext} from "../Form";
import type {FileInputProps} from "../../inputs/FileInput";

export interface HandledFileInputProps extends FileInputProps {
    name: string;
}

export default function HandledFileInput(props: HandledFileInputProps) {
    const {formHandler} = useContext(FormContext);
    const inputElement = useRef<HTMLInputElement>(null);
    const [key, toggleKey] = useReducer((v) => !v, false);
    useEffect(() => {
        if (inputElement.current && !formHandler.values[props.name]) {
            toggleKey();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formHandler.values[props.name]]);

    return (
        <FileInput
            {...props}
            onChange={
                (event) => {
                    const eventFiles = event.currentTarget.files;
                    const length = eventFiles?.length || 0;
                    const files: File[] = [];
                    for (let i = 0; i < length; i++) {
                        const file = eventFiles?.item(i);
                        if (file) {
                            files.push(eventFiles?.item(i) as File);
                        }
                    }
                    formHandler.setFieldValue(props.name, Array.from(files));
                    formHandler.setFieldValue(props.name, eventFiles);
                    props.onChange?.call(undefined, event);
                }
            }
            key={`${props.key}-${key}`}
            ref={inputElement}
        />
    );
}