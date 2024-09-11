## Principles of component design in ces-theme-tailwind

## Frequently used libraries

### tailwind-merge
With `tailwind-merge` or the function `twMerge("class1", "class")` class lists are merged.
This function should always be used whenever classes from different sources are to be merged.
are to be merged. It has the special feature that overlapping tailwind classes
are removed (`twMerge("bg-red text-red", "bg-yellow", "bg-blue")` => `"text-red bg-blue"`).
In exceptional cases, `twJoin("class1", "class2")` can also be used. In this case, duplicate classes are not removed.

### class-variance-authority
This library is to be used if a component has different styles (variants) depending on input parameters.
See also here: https://cva.style/docs
And here: https://cva.style/docs/getting-started/installation

### Radix-UI
Radix-UI offers un-styled but accessible components. If a new component is to be created that already has an
implementation in Radix-UI, this should always be preferred.
See here: https://www.radix-ui.com/primitives
Headless-UI is an alternative, but should only be used if a certain component does not exist in Radix-UI.

## Documentation

### Storybook
A storybook of a component should always consist of at least 2 parts:
* A sensibly parameterized story called `Playground`
* A page called `Code`, in which the most detailed possible examples of use are given in the form of copyable code.

If possible, each component created should have a storybook documentation. This should at least correspond to this pattern.

## Component design

### General component design
It is extremely important that the components can be operated "from a single source".
When creating a new component, the naming etc., it is essential to ensure that it can be used and named intuitively in the same
usable and named in the same way as other existing components.
For this reason, the procedure for existing components should be checked for each new implementation

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

The nesting depth is explicitly desired to any depth. A component that could look something like this is therefore explicitly desired:
```tsx
<A.B.C.D.E.F.G.H.I.J.K.L>Child</A.B.C.D.E.F.G.H.I.J.K.L>
```
In addition to a variant of each component that is so small-step, there should ideally always be a simplified version (in addition!)
should always exist.
In the example above, this could look something like this:
```
<Container child1Text={"A"} child2Text={"B"} />
```
This procedure makes it possible to have maximum control over components, as well as to replace individual parts of a component without lib adjustments
as well as maximum convenience and intuitive use thanks to the short variant.

#### Naming of component parts
In order to maintain consistent naming, the following should be used as a guide:

If there is a "short" or summarized version of a component, it always has the short name.
The long version always begins with 'Segmented'.

Example for the long version:
```tsx
<SegmentedYesNoButton>
  <SegmentedYesNoButton.Yes />
  <SegmentedYesNoButton.No />
</SegmentedYesNoButton>
```

Example for the short version:
```tsx
<YesNoButton />
```

### "ref"
If possible, each component must be controllable via a `ref`. To do this, the `forwardRef` function must be used by `react`.

### Props
If there are props for a component, these should always be exported as a type.

### Exporting components
Components must be re-exported in `src/index.ts` so that they can be used when the library is integrated.
In addition, it makes sense to create additional `index.ts` files, especially for components that consist of many individual parts
and then only write `export * from 'myindex.ts'` in the `src/index.ts`.
This prevents the `src/index.ts` file from becoming too large and confusing.

### Styling from outside
All components should be styleable from outside via `className`. All standard styles of the component should be overwritable for this purpose.
This is guaranteed by the fact that all styling is solved via tailwind. With `twMerge()`, classes from outside can then overwrite the classes
from within.

### "data-testid"
If possible, all components should (be able to) be provided with `data-testid`s. This allows them to be tested from outside in a meaningful way.
Ideally, every props type should therefore implement the `testid` interface, which gives users of the library better type security.
If a component consists of several individual parts, it can be useful to automatically provide the individual parts with testids that extend the testid,
which has been passed to the component.
The function `subTestid(props, "sub-name")` can be used for this.
This works in such a way that, if `props` contains the `data-testid`, it returns a string that connects this with `"sub-name"`.
In this case, for example, `originaltestid-sub-name`. If `props` does not contain a testid, undefined is returned.

### DefaultStyles.ts
In this file, styles that are likely to be used in many places and are always the same there can be specified.
This makes subsequent adjustments to styles much easier and should therefore be used as much as possible.

## Other notes

#### Tailwind
Tailwind class names must always be written out in full, otherwise they will not be recognized by tailwind.
So `bg-red` would be valid, while `bg-${color}` would not be recognized by tailwind.

## Tests
To ensure high quality, each `.tsx` file must have a corresponding `.spec.tsx` file with at least one test.
Things that should always be tested if possible:
* Does the component render as what I expected it to?
* Do my `data-testid`s work?
* Can I add new tailwind classes and overwrite existing ones?
* Does the ref work?
* If there are args: Do they create the desired effect?


## Live templates

### Blank Component
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
