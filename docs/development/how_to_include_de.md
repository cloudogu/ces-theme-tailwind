# Die Datei in ein Projekt einbauen

## Einbau unter React & Vite

1. Makefile ggf. um folgendes ergänzen:
```Makefile
NPM_REGISTRY_RELEASE=ecosystem.cloudogu.com/nexus/repository/npm-releases/
NPM_URL_RELEASE=https://${NPM_REGISTRY_RELEASE}
NPM_REGISTRY_RC=ecosystem.cloudogu.com/nexus/repository/npm-releasecandidates/
NPM_URL_RC=https://${NPM_REGISTRY_RC}

.PHONY gen-npmrc-release:
gen-npmrc-release:
	@rm -f .npmrc
	@echo "email=jenkins@cloudogu.com" >> .npmrc
	@echo "always-auth=true" >> .npmrc
	@echo "//${NPM_REGISTRY_RELEASE}:_auth=\"$(shell bash -c 'read -p "Username: " usrname;read -s -p "Password: " pwd;echo -n "$$usrname:$$pwd" | openssl base64')\"" >> .npmrc
	@echo "@cloudogu:registry=${NPM_URL_RELEASE}" >> .npmrc

.PHONY gen-npmrc-prerelease:
gen-npmrc-prerelease:
	@rm -f .npmrc
	@echo "email=jenkins@cloudogu.com" >> .npmrc
	@echo "always-auth=true" >> .npmrc
	@echo "//${NPM_REGISTRY_RC}:_auth= \"$(shell bash -c 'read -p "Username: " usrname;read -s -p "Password: " pwd;echo -n "$$usrname:$$pwd" | openssl base64')\"" >> .npmrc
	@echo "@cloudogu:registry=${NPM_URL_RC}" >> .npmrc
```
2. Den Befehl `gen-npmrc-release` ausführen und die eigenen Credentials für ecosystem.cloudogu.com eingeben
   1. Für Pre-Releases hier ggf. `gen-npmrc-prerelease` durchführen 
3. In dem Projekt tailwind aufsetzen: `yarn add --dev tailwindcss postcss autoprefixer @mertasan/tailwindcss-variables @cloudogu/ces-theme-tailwind tailwindcss-aria-attributes tailwindcss-scoped-groups i18next i18next-browser-languagedetector react-i18next`
4. `yarn install` ausführen
5. `npx tailwindcss init -p` ausführen
6. Die neu erzeugte `tailwind.config.js` mit folgendem Inhalt befüllen:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [ require('@cloudogu/ces-theme-tailwind/tailwind.presets.cjs') ],
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@cloudogu/ces-theme-tailwind/build/**/*.{js,ts,jsx,tsx,mjs}',
    ],
};
```
7. Sicherstellen, dass die generierte `.npmrc` auf der `.gitignore` ist
8. In der Haupt-Css-Datei (in der Regel `index.css` folgendes als erste Zeile hinzufügen: `@import "@cloudogu/ces-theme-tailwind/ces-theme-tailwind-config.css";`
9. Sicherstellen, dass die .dockerignore-Datei die `node_modules` und alle Build-Ergebnis-Ordner wie z.B. `dist` oder `target` ausschließt
10. Sicherstellen, dass die `tailwind.config.js` und die `postcss.config.js` im Dockerfile vor dem Build hinzugefügt werden
11. Jenkinsfile um folgende Funktion ergänzen und vor jedem build-step aufrufen.
   1. Der `file`-Pfad ist ggf. anzupassen
   2. Der Teil Repository-Pfades `npm-releases` ist ggf. durch `npm-releasecandidates` zu ersetzen, um auf release-candidates zugreifen zu können
```groovy
void createNpmrcFile(credentialsId) {
    withCredentials([usernamePassword(credentialsId: "${credentialsId}", usernameVariable: 'TARGET_USER', passwordVariable: 'TARGET_PSW')]) {
        withEnv(["HOME=${env.WORKSPACE}"]) {
            String NPM_TOKEN = """${sh(
                    returnStdout: true,
                    script: 'echo -n "${TARGET_USER}:${TARGET_PSW}" | openssl base64'
            )}""".trim()
            writeFile encoding: 'UTF-8', file: 'ui/.npmrc', text: """
    @cloudogu:registry=https://ecosystem.cloudogu.com/nexus/repository/npm-releases/
    email=jenkins@cloudogu.com
    always-auth=true
    _auth=${NPM_TOKEN}
        """.trim()
        }
    }
}
```
12. Sicherstellen, dass im Build-Prozess (z.B. durch try-catch) die .npmrc immer gelöscht wird

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