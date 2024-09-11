export default interface Testid {
    "data-testid"?: string;
}

export function subTestid(props: any, name: string) {
    const testid = props["data-testid"];
    if (testid === null || testid === undefined){
        return undefined;
    }

    return `${testid}-${name}`;
}