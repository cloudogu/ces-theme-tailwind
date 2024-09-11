# Prinzipien des Komponentendesigns im ces-theme-tailwind

## Viel verwendete Bibliotheken

### tailwind-merge
Mit `tailwind-merge` bzw. der Funktion `twMerge("class1", "class")` werden Klassen-Listen miteinander verbunden.
Diese Funktion ist immer zu verwenden, wann immer Klassen aus verschiedenen Quellen zusammengefügt 
werden sollen. Sie hat die Besonderheit, dass sich überschneidende Tailwind-Klassen 
entfernt werden (`twMerge("bg-red text-red", "bg-yellow", "bg-blue")` => `"text-red bg-blue"`).
In Außnahmefällen kann auch `twJoin("class1", "class2")` verwendet werden. Dort entfällt die Entfernung doppelter Klassen.

### class-variance-authority
Diese Bibliothek ist zu verwenden, wenn eine Komponente verschiedene Styles (varianten) abhängig von input-Parametern hat.
Siehe dafür auch hier: https://cva.style/docs
Und hier: https://cva.style/docs/getting-started/installation

### Radix-UI
Radix-UI bietet un-gestylte aber barrierefreie Komponenten. Wenn eine neue Komponente erstellt werden soll, die bereits eine
Implementierung in Radix-UI hat, ist immer diese zu bevorzugen.
Siehe hier: https://www.radix-ui.com/primitives
Headless-UI ist eine Alternative, ist aber nur zu verwenden, wenn es eine bestimmte Komponente nicht in Radix-UI gibt.

## Dokumentation

### Storybook
Ein Storybook einer Komponente sollte immer mindestens aus 2 Teilen bestehen:
* Eine sinnvoll parametrisierte Story namens `Playground`
* Eine Seite namens `Code`, in der möglichst ausführliche Beispiele der Verwendung in Form von kopierbarem Code gegeben sind.

Nach Möglichkeit sollte jede angelegte Komponente eine Storybook-Dokumentation haben. Diese sollte mindestens diesem Muster entsprechen.

## Komponenten-Design

### Generelles Komponentendesign
Es ist extrem wichtig, dass die Komponenten "wie aus einem Guss" bedienbar sind.
Beim Erstellen einer neuen Komponente, der Benamung etc. sollte unbedingt darauf geachtet werden, dass sie intuitiv genauso
nutzbar und benannt ist, wie andere bereits vorhandene Komponenten.
Daher sollte bei jeder Neuumsetzung bei vorhandenen Komponenten nach dem Vorgehen geschaut werden

### Kleinschrittigkeit / Komposition
Alle Komponenten müssen maximal flexibel nutzbar sein, damit nicht für jeden Anwendungsfall die Komponente angepasst werden muss.
Gibt es also eine Komponente, die etwa so aussieht
```tsx
<div className="container">
  <span className="parent">
    <span className={"child"}>
      A
    </span>
    <span className={"child"}>
      B
    </span>
  </span>
</div>
```
so müssen daraus 3 Komponenten erstellt werden. Diese 3 Komponenten müssen so definiert sein, dass sie beim Aufruf ineinander Verschachtelt sind.
Der Aufruf könnte dann etwa so aussehen:
```tsx
<Container>
  <Container.Parent>
    <Container.Parent.Child>
      A
    </Container.Parent.Child>
    <Container.Parent.Child>
      B
    </Container.Parent.Child>
  </Container.Parent>
</Container>
```
Jede Komponente sollte nach Möglichkeit immer nur ein einzelnes HTML-Element umfassen.

Dabei ist die Verschachtelungstiefe explizit beliebig tief erwünscht. Eine Komponente, die in etwa so aussehen könnte, ist damit also explizit erwünscht:
```tsx
<A.B.C.D.E.F.G.H.I.J.K.L>Child</A.B.C.D.E.F.G.H.I.J.K.L>
```
Zusätzlich zu einer Variante jeder Komponente, die derart kleinschrittig ausfällt, sollte es idealerweise auch immer eine veranfachte Version (zusätzlich!)
geben.
Diese könnte in dem Beispiel von Oben in etwa so aussehen:
```
<Container child1Text={"A"} child2Text={"B"} />
```
Dieses Vorgehen ermöglicht es, sowohl maximale Kontrolle über Komponenten zu haben, als auch einzelne Stellen einer Komponente ohne Lib-Anpassungen zu ersetzen
als auch durch die kurze Variante eine maximale Bequemlichkeit bzw. intuitive Benutzung zu haben.

#### Benennung von Komponententeilen
Um bei einer einheitlichen Benennung zu bleiben, sollte sich an folgendem orientiert werden:

Wenn es von einer Komponente eine "kurze" bzw. zusammengefasste Version gibt, hat diese immer den kurzen Namen.
Die lange Variante davon beginnt immer mit `Segmented`.

Beispiel für die lange Version:
```tsx
<SegmentedYesNoButton>
  <SegmentedYesNoButton.Yes />
  <SegmentedYesNoButton.No />
</SegmentedYesNoButton>
```

Beispiel für die kurze Version:
```tsx
<YesNoButton />
```

### "ref"
Sofern möglich, muss jede Komponente über eine `ref` ansteuerbar sein. Dafür muss von `react` die `forwardRef`-Funktion benutzt werden.

### Props
Gibt es für eine Komponente props, sollten diese auch immer als typ exportiert werden.

### Exportieren von Komponenten
Damit Komponenten beim Einbinden der Bibliothek auch nutzbar sind, müssen diese in der `src/index.ts` reexportiert werden.
Zusätzlich dazu ist es sinnvoll, gerade bei Komponenten, die aus vielen Einzelteilen bestehen, weitere `index.ts`-Dateien zu erstellen
und in der `src/index.ts` anschließend nur `export * from 'myindex.ts'` zu schreiben.
Das verhindert, dass die `src/index.ts`-Datei zu gro'und unübersichtlich wird.

### Styling von außerhalb
Alle Komponenten sollten von außerhalb über `className` stylebar sein. Alle standard-Styles der Komponente sollten dafür überschreibbar sein.
Dies ist dadurch gewährleistet, dass sämtliches Styling über tailwind gelöst wird. Mit `twMerge()` können dann Klassen von außerhalb die Klassen
von innerhalb überschreiben.

### "data-testid"
Alle Komponenten sollten nach möglichkeit mit `data-testid`s versehen werden (können). Das ermöglicht, dass diese von außerhalb sinnvoll testbar sind.
Idealerweise sollte daher jeder Props-Typ das `Testid`-Interface implementieren, das gibt Nutzern der Bibliothek eine bessere Typsicherheit.
Besteht eine Komponente aus mehreren Einzelteilen, kann es sinnvoll sein, die Einzelteile automatisch mit testids zu versehen, die die testid erweitern,
welche an die Komponente weiter gegeben worden ist.
Dafür kann die Funktion `subTestid(props, "sub-name")` verwendet werden.
Diese funktioniert so, dass sie, sofern `props` die `data-testid` enthält, einen string zurückgibt, der diesen mit `"sub-name"` verbindet.
In diesem Fall zum Beispiel `originaltestid-sub-name`. Enthält `props` keine testid, wird undefined zurückgegeben.

### DefaultStyles.ts
In dieser Datei können styles, die voraussichtlich an sehr vielen Stellen verwendet werden und dort immer gleich sind, angegeben werden.
Dies erleichtert deutlich nachträgliche Anpassungen von Styles und sollte daher auch so viel wie möglich verwendet werden.

## Sonstige Hinweise

#### Tailwind
Tailwind-Klassennamen müssen immer ausgeschrieben sein, da sie ansonsten von tailwind nicht erkannt werden.
Also `bg-red` wäre gültig, während `bg-${color}` von tailwind nicht erkannt werden würde.

## Tests
Um eine hohe Qualität zu gewährleisten, muss jede `.tsx`-Datei muss eine dazugehörige `.spec.tsx`-Datei mit mindestens einem Test besitzen.
Dinge, die möglichst immer zu testen sind:
* Rendert die Komponente als das, was ich sie erwartet habe?
* Funktionieren meine `data-testid`s?
* Kann ich neue tailwind-Klassen hinzufügen und vorhandene überschreiben?
* Funktioniert die ref?
* Wenn es Args gibt: Erzeugen sie den gewünschten Effekt?


## Live-Templates

### Komponenten-Rohling
```xml
<template name="news" value="import React, {ComponentPropsWithoutRef, forwardRef, ForwardRefExoticComponent, RefAttributes} from &quot;react&quot;;&#10;import {twMerge} from &quot;tailwind-merge&quot;;&#10;&#10;export type $NAME$Props = ComponentPropsWithoutRef&lt;&quot;$TYPE$&quot;&gt;;&#10;&#10;type ComponentType =&#10;    ForwardRefExoticComponent&lt;$NAME$Props &amp; RefAttributes&lt;$ELEMENT$&gt;&gt;&#10;    &amp; {&#10;    &#10;};&#10;&#10;const $NAME$ = forwardRef&lt;$ELEMENT$, $NAME$Props&gt;((props, ref) =&gt; {&#10;    return (&#10;        &lt;$TYPE$&#10;            {...props}&#10;            ref={ref}&#10;            className={twMerge(props.className)}&#10;        &gt;&#10;            $END$&#10;        &lt;/$TYPE$&gt;&#10;    );&#10;}) as ComponentType;&#10;&#10;$NAME$.displayName = &quot;$NAME$&quot;;&#10;export default $NAME$;" description="" toReformat="false" toShortenFQNames="true">
  <variable name="TYPE" expression="" defaultValue="&quot;div&quot;" alwaysStopAt="true" />
  <variable name="ELEMENT" expression="" defaultValue="&quot;HTMLDivElement&quot;" alwaysStopAt="true" />
  <variable name="NAME" expression="fileNameWithoutExtension()" defaultValue="" alwaysStopAt="false" />
  <context>
    <option name="JS_TOP_LEVEL_STATEMENT" value="true" />
  </context>
</template>
```
