import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import de from "./i18n/de.json";
import en from "./i18n/en.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        resources: {
            de: {translation:{...(de)}},
            en: {translation:{...(en)}},
        },
        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;