# Die Datei in ein Projekt einbauen

## Einbau unter React & Vite

1. In dem Projekt tailwind aufsetzen: `yarn add --dev tailwindcss postcss autoprefixer @mertasan/tailwindcss-variables @cloudogu/ces-theme-tailwind tailwindcss-aria-attributes tailwindcss-scoped-groups i18next i18next-browser-languagedetector react-i18next`
2. `yarn install` ausführen
3. `npx tailwindcss init -p` ausführen
4. Die neu erzeugte `tailwind.config.js` mit folgendem Inhalt befüllen:
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
5. In der Haupt-Css-Datei (in der Regel `index.css` folgendes als erste Zeile hinzufügen: `@import "@cloudogu/ces-theme-tailwind/config/ces-theme-tailwind-config.css";`
6. Sicherstellen, dass die .dockerignore-Datei die `node_modules` und alle Build-Ergebnis-Ordner wie z.B. `dist` oder `target` ausschließt
7. Sicherstellen, dass die `tailwind.config.js` und die `postcss.config.js` im Dockerfile vor dem Build hinzugefügt werden

### Troubleshooting
Wenn in der Zielapplikation für Übersetzungen react-i18next verwendet werden soll, dann wird folgendes Template für die Initialisierung empfohlen:

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

Wichtig ist hierbei insbesondere der folgende Teil, da ansonsten die Standard-Übersetzungen nicht funktionieren:
```js
resources: {
   de: {translation: {...de, ...(i18n.getResourceBundle("de", "translation") || {})}},
   en: {translation: {...en, ...(i18n.getResourceBundle("en", "translation") || {})}},
},
```