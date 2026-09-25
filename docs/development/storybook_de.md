### Lokales Storybook

Sie können das Theme Storybook lokal über Docker nutzen.  
Benutzen Sie `docker login registry.cloudogu.com`, um sich in unser Docker Repository einzuloggen, falls Sie dies noch nicht getan haben.  
Ziehen Sie das neueste Image mit `docker pull registry.cloudogu.com/internal/storybook-ces-theme-tailwind:latest`.  
Danach können Sie den Container mit `docker run -p 8080:8080 registry.cloudogu.com/internal/storybook-ces-theme-tailwind:latest` starten.  
Nun sollte das Theme Storybook unter http://localhost:8080 erreichbar sein.

### Entwicklung ohne Docker

Voraussetzung: Node.js 20.19+ oder 22.12+ (empfohlen: Node.js 22).
Abhängigkeiten mit `yarn install --frozen-lockfile` installieren und Storybook 10.6
mit `yarn storybook` starten. Mit `yarn build-storybook` wird die statische Ausgabe erzeugt.
