## Include the file in a project

## Installation under React & Vite

1. set up tailwind in the project: `yarn add --dev tailwindcss postcss autoprefixer @mertasan/tailwindcss-variables @cloudogu/ces-theme-tailwind tailwindcss-aria-attributes tailwindcss-scoped-groups i18next i18next-browser-languagedetector react-i18next`.
2. run `yarn install
3. run `npx tailwindcss init -p`.
4. fill the newly created `tailwind.config.js` with the following content:
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
       presets: [ require('@cloudogu/ces-theme-tailwind/config/tailwind.presets.cjs') ],
       content: [
           './index.html',
           './src/**/*.{js,ts,jsx,tsx}',
           './node_modules/@cloudogu/ces-theme-tailwind/build/**/*.{js,ts,jsx,tsx,mjs}',
       ],
   };
   ```
5. in the main css file (usually `index.css` add the following as the first line: `@import “@cloudogu/ces-theme-tailwind/config/ces-theme-tailwind-config.css”;`
6. make sure that the .dockerignore file excludes the `node_modules` and any build result folders such as `dist` or `target
7. ensure that the `tailwind.config.js` and `postcss.config.js` are added in the dockerfile before the build

### Troubleshooting
If react-i18next is to be used for translations in the target application, the following template is recommended for initialization:

```js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
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
            de: {translation: {...de, ...(i18n.getResourceBundle("de", "translation") || {})}},
            en: {translation: {...en, ...(i18n.getResourceBundle("en", "translation") || {})}},
        },
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
```

The following part is particularly important here, as otherwise the standard translations will not work:
```js
resources: {
   de: {translation: {...de, ...(i18n.getResourceBundle("de", "translation") || {})}},
   en: {translation: {...en, ...(i18n.getResourceBundle("en", "translation") || {})}},
},
```