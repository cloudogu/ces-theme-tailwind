import React, {useEffect} from "react";
import {act, fireEvent, render} from "@testing-library/react";
import Form from "../Form";
import useFormHandler, {FormHandler} from "@src/deprecated_hooks/useFormHandler";
import Button from "@components/inputs/Button";
import HandledFileInput from "./HandledFileInput";


function Test({onChange, onClear}: { onChange: (values: any) => Promise<void>, onClear: () => Promise<void> }) {
    const handler: FormHandler<any> = useFormHandler<any>({
        onSubmit: () => {
        },
        enableReinitialize: true,
    });

    useEffect(() => {
        if (handler.values["input"]) {
            onChange(handler.values).then();
        }
    }, [handler.values["input"]]);

    useEffect(() => {
        if (!handler.values["input"]) {
            onClear().then();
        }
    }, [handler.values["input"]]);

    return (
        <Form data-testid={"form"} handler={handler}>
            <HandledFileInput data-testid="input" name={"input"} variant={"primary"}/>
            <Button color={"brand"} onClick={() => {
                handler.resetForm();
            }} variant={"primary"} data-testid={"btn"}/>
        </Form>
    );
}

describe("<Form.HandledFileInput/>", () => {
    test("should update state on click and clear form on reset", async () => {
        let finished = false;
        const waitForFinish = async () => {
            await new Promise<string>((resolve, reject) => {
                let times = 0;
                const maxTimes = 10;
                const interval = setInterval(() => {
                    if (times++ > maxTimes) {
                        clearInterval(interval);
                        reject("Expected function not called.");
                    } else if (finished) {
                        resolve("Success");
                    }
                }, 100)
            });
        };
        let values = undefined as any;
        const onChange = async (v: any) => {
            finished = true;
            values = v;
        }
        const {findByTestId} = render(<Test onChange={onChange} onClear={async () => {
        }}/>);
        const input = await findByTestId("input") as HTMLInputElement;
        const file = new File(['test file content'], 'test.txt', {
            type: 'text/plain',
        });
        const files: FileList = {
            [Symbol.iterator](): IterableIterator<File> {
                return undefined as unknown as any;
            }, item(): File | null {
                return file;
            }, length: 1
        };
        await act(async () => {
            fireEvent.change(input, {target: {files: files}});
            await waitForFinish();
        });

        expect((values?.input?.item(0) as File)?.name).toEqual("test.txt");
    });
    test("should clear form on reset", async () => {
        let finished = false;
        const waitForFinish = async () => {
            await new Promise<string>((resolve, reject) => {
                let times = 0;
                const maxTimes = 10;
                const interval = setInterval(() => {
                    if (times++ > maxTimes) {
                        clearInterval(interval);
                        reject("Task failed successfully");
                    } else if (finished) {
                        resolve("Success");
                    }
                }, 100)
            });
        };
        let values = undefined as any;
        const onChange = async (v: any) => {
            finished = true;
            values = v;
        }
        const onClear = async () => {
            finished = true;
        }
        const {findByTestId} = render(<Test onChange={onChange} onClear={onClear}/>);
        const input = await findByTestId("input") as HTMLInputElement;
        const btn = await findByTestId("btn") as HTMLButtonElement;
        const file = new File(['test file content'], 'test.txt', {
            type: 'text/plain',
        });
        const files: FileList = {
            [Symbol.iterator](): IterableIterator<File> {
                return undefined as unknown as any;
            }, item(): File | null {
                return file;
            }, length: 1
        };
        await act(async () => {
            fireEvent.change(input, {target: {files: files}});
            await waitForFinish();

            btn.click();
            await waitForFinish();
        });
    });
    test("should render file input - primary", async () => {
        return testVariant("primary")
    });
    test("should render file input - success", async () => {
        return testVariant("success")
    });
    test("should render file input - danger", async () => {
        return testVariant("danger")
    });
});

async function testVariant(variant: "primary" | "success" | "danger") {
    const {findByTestId} = render(<HandledFileInput name={"myinput"} variant={variant} data-testid={"myinput"}
                                                    className={"myclass"}/>);
    const element = (await findByTestId("myinput")) as HTMLInputElement;
    expect(element.nodeName).toEqual("INPUT");
    expect(element.type).toEqual("file");
    expect(element.className).toContain(`text-textfield-${variant}-font`);
    expect(element.className).toContain("myclass");
}