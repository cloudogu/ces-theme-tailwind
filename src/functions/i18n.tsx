import i18n, { t } from "i18next";
import {Trans} from "react-i18next";
import type {ReactElement} from "react";

export function getLocale(): string {
    return i18n.language;
}

/**
 * Wrapper around the <Trans/> component of i18n to have a simple function to call.
 * i18n can be used to mark English words within a non English translation using the tag <en/>
 * Example: de-Translation has the following key
 *  key: "Der Button wird zum <en>Logout</en> verwendet"
 *  output: "Der Button wird zum <span lang="en">Logout</span> verwendet"
 * @param key within i18n translation
 * @param placeholders object to replace placeholders with real values
 * @returns Translation with embedded html tag as ReactElement (span)
 */
export function translate(key: string, placeholders?: { [key: string]: any | undefined }): ReactElement {
    const timeElement = placeholders?.["datetime"] ? <time dateTime={placeholders["datetime"]} /> : <time/>;

    return (
        <span>
            <Trans
                i18nKey={key}
                values={placeholders}
                components={{en: <span lang="en"/>, time: timeElement}}
            />
        </span>
    );
}

/**
 * Wrapper around the t() function of i18next to have a more meaningful name.
 * @param key within i18n translation
 * @param placeholders object to replace placeholders with real values
 */
export function translateToPlainString(key: string, placeholders?: { [key: string]: string | undefined }): string {
    return t(key, placeholders);
}