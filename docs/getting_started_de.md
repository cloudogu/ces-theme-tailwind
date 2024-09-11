# Einrichtung für die Entwicklung

## .npmrc erstellen
Damit das Paket released werden kann, muss eine .npmrc erstellt werden. Dafür kann entweder `make gen-npmrc-release`
oder `make gen-npmrc-prerelease` verwendet werden.
In der dann auftauchenden Abfrage müssen die Zugangsdaten zum produktiven EcoSystem eingegeben werden.

Hinweis: Für die Entwicklung bietet es sich an, regelmäßig pre-releases zu erstellen und sie dann in dem Tool, für das 
ggf. gerade Änderungen hier gemacht werden, zu verproben. Dafür muss dann unbedingt `make gen-npmrc-prerelease` verwendet werden.