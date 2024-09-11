## Include the file in a project

## Installation under React & Vite

1. add the following to Makefile if necessary:
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
2. run the command `gen-npmrc-release` and enter your own credentials for ecosystem.cloudogu.com.
   1. for pre-releases execute `gen-npmrc-prerelease` here if necessary
3. set up tailwind in the project: `yarn add --dev tailwindcss postcss autoprefixer @mertasan/tailwindcss-variables @cloudogu/ces-theme-tailwind tailwindcss-aria-attributes tailwindcss-scoped-groups i18next i18next-browser-languagedetector react-i18next`
4. run `yarn install
5. run `npx tailwindcss init -p`.
6. fill the newly created `tailwind.config.js` with the following content:
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
7. make sure the generated `.npmrc` is on the `.gitignore`.
8. add the following as the first line in the main css file (usually `index.css`): `@import "@cloudogu/ces-theme-tailwind/ces-theme-tailwind-config.css";`
9. ensure that the .dockerignore file excludes the `node_modules` and any build result folders such as `dist` or `target`.
10. ensure that the `tailwind.config.js` and the `postcss.config.js` are added in the Dockerfile before the build
11. add the following function to Jenkinsfile and call it before each build-step.
    1. the `file` path has to be adjusted if necessary
    2. replace the `npm-releases` part of the repository path with `npm-releasecandidates` if necessary to access release-candidates
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
12. make sure that in the build process (e.g. by try-catch) the .npmrc is always deleted

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