declare module "get-contrast" {
    export type Options = {ignoreAlpha: boolean};
    export function ratio(_: string, _1: string, _2?: Options): number;
    export function score(_: string, _1: string, _2?: Options): string;
    export function isAccessible(_: string, _1: string, _2?: Options): boolean;
    export function isNotTransparent(_: string, _1?: Options): boolean;
}