### Lokales Storybook

Sie können das Theme Storybook lokal über Docker nutzen.  
Benutzen Sie `docker login registry.cloudogu.com`, um sich in unser Docker Repository einzuloggen, falls Sie dies noch nicht getan haben.  
Ziehen Sie das neueste Image mit `docker pull registry.cloudogu.com/internal/storybook-ces-theme-tailwind:latest`.  
Danach können Sie den Container mit `docker run -p 8080:8080 registry.cloudogu.com/internal/storybook-ces-theme-tailwind:latest` starten.  
Nun sollte das Theme Storybook unter http://localhost:8080 erreichbar sein.