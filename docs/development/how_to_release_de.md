# Wie ein Release dieser Library erstellt wird

## Vorbedingungen
Um eine möglichst hohe Qualität zu gewährleisten, wurden verschiedene pre-publish-checks eingebaut. Das Paket kann bzw. darf
nicht in die produktive Registry veröffentlicht werden, ohne dass diese checks ausgeführt werden.
Es bietet sich an, schon vor dem Merge des Feature-Branches sicherzustellen, dass alle Checks erfolgreich sind.
Diese checks können ausgeführt werden mit: `yarn prepublishOnly`.
Sollte das nicht im Feature-Branch erfolgt sein, kann es aber auch im Release-Branch noch getan werden.
Schlagen hier einige Checks fehl, müssen die Fehler behoben werden.
Wenn vergessen wird, diese Checks auszuführen, dann werden sie automatisch vor dem npm publish durchgeführt.

## Durchführung des Releases

Voraussetzungen:
* Der Feature-Branch ist bereits in den develop gemerged worden

Es reicht aus, das `make`-Ziel `node-release` zu starten. Anschließend ist den Prozessschritten zu folgen.

Sollte bei der Veröffentlichung des Pakets in die npm-Registry ein Problem auftreten, kann das Paket auch manuell mit
folgenden Schritten aktualisiert werden.

1. `git checkout <tag>`
1. Sicherstellen, dass die `.npmrc` für die Produktive Registry generiert wurde. Ggf.: `make gen-npmrc-release`
1. Paket releasen: `yarn publish --non-interactive`
    1. Das extra Flag `--non-interactive` sorgt dafür, dass die Version aus der `package.json` verwendet wird
