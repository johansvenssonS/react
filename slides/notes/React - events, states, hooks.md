# React - events, states, hooks

> Note: `scripts/extract_pptx.py` returned only empty `## Slide N` headers for this deck —
> every slide is a single image-backed FREEFORM shape (image-flattened export), same as
> "React - intro, komponent, props.pptx". Transcribed manually from the embedded slide
> images instead (see fallback procedure in CLAUDE.md).

## Slide 1 — Title

**VECKA 36 | ONSDAG 2 SEPTEMBER**

# State, Events & Magin Under The Hood ⚡

Idag tar vi steget till levande appar! Vi lär oss hantera klick och formulär med
eventhantering, ger våra komponenter eget minne med `useState`, och kikar djupt under
huven på hur React och Virtuell DOM faktiskt fungerar.

## Slide 2 — 1. Eventhantering i React 🎯

Precis som i vanlig HTML vill vi kunna lyssna på användarens interaktioner: klick på
knappar, inskrivning i formulärfält, eller musrörelser.

I React skiljer sig syntaxen en aning från klassisk HTML. Vi använder camelCase för
eventnamn (t.ex. `onClick` istället för `onclick`) och skickar in en funktion.

> **Viktig skillnad:** Skicka med själva funktionsreferensen, anropa den inte direkt med
> parenteser `onClick={handleToggle}`!

```jsx
// Exempel på klick-händelse
function ActionButton() {
  const handleClick = () => {
    console.log("Knappen klickades!");
  };

  return (
    <button onClick={handleClick}>
      Klicka på mig
    </button>
  );
}
```

## Slide 3 — 2. Formulär och Input-events 📝

När användare skriver i ett textfält vill vi fånga upp texten i realtid via `onChange`.

Varje händelse i React genererar ett syntetiskt event-objekt (`event`). Via
`event.target.value` kan vi läsa av exakt vad användaren har skrivit i fältet.

Detta är grunden för all validering och formulärhantering i moderna webbapplikationer.

```jsx
function SearchInput() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Sök här..."
      onChange={handleChange}
    />
  );
}
```

## Slide 4 — Vad är React Hooks? 🪝

**REACT 16.8 | FEBRUARI 2019**

**Hooks** är specialfunktioner som låter dig "kroka i" Reacts state- och livscykelmetoder
direkt från *funktionella komponenter*.

De lanserades i **februari 2019** i samband med **React 16.8**. Innan dess var
funktionella komponenter helt "stateless" (dumma och enbart till för att visa upp props).

> **Namngivningsregel:** Alla Hooks börjar alltid på ordet `use` (t.ex. `useState`,
> `useEffect`, `useContext`) så att React direkt förstår att det är en Hook.

```
// Paradigm-skiftet:
Innan 2019: State krävde tunga JS-klasser (class App extends React.Component).
Efter 2019: Rena funktioner med fullt minne och modularitet!
```

## Slide 5 — Vilka problem löste Hooks? 🔧

Innan Hooks fanns tvingades utvecklare använda klasskomponenter, vilket förde med sig
tre stora problem:

1. **Förvirrande `this`** — JavaScript-klassens `this`-nyckelord betedde sig olika
   beroende på hur metoder anropades, vilket krävde krånglig bindning (`this.bind`) i
   konstruktorer.
2. **Spridd livscykellogik** — Samma typ av logik (t.ex. prenumerationer eller
   API-anrop) behövde splittras upp i flera olika metoder som `componentDidMount` och
   `componentWillUnmount`.
3. **"Wrapper Hell"** — Att dela state-logik mellan komponenter krävde invecklade
   mönster som Higher-Order Components (HOCs) och Render Props, vilket skapade djupt
   nästlade komponentträd.

## Slide 6 — 3. Vad är State (Tillstånd)? 🧠

Hittills har våra komponenter varit statiska. De visar det de får via props, men de kan
inte "komma ihåg" eller ändra någonting över tid.

**State** är komponentens egna interna minne. När state ändras känner React av det och
ritar automatiskt om (re-renderar) komponenten så att skärmen uppdateras!

> **Skillnaden mot Props:** Props skickas utifrån och är skrivskyddade. State ägs av
> komponenten själv och kan förändras.

```
// Jämförelse:
Props: Som en boksidor du läser (kan ej ändras).
State: Som en whiteboardtavla i rummet (kan suddas ut och skrivas om).
```

## Slide 7 — 4. useState-hooken 🪝

För att använda state i en funktionell komponent importerar och använder vi Reacts
inbyggda hook `useState`.

`useState` returnerar en array med exakt två värden som vi destrukturerar:

1. **Aktuellt värde** (variabeln som håller state).
2. **Uppdateringsfunktion** (funktionen vi ropar på när vi vill ändra värdet).

Vi skickar startvärdet som argument till `useState(startVärde)`.

```jsx
import { useState } from 'react';

function Counter() {
  // count = värdet, setCount = uppdaterar
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Antal klick: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Öka
      </button>
    </div>
  );
}
```

## Slide 8 — Praktisk checkpunkt 1: Bygg en interaktiv räknare

Dags att testa `useState` i praktiken! Följ stegen nedan:

1. Skapa en ny komponent som heter `Counter.jsx`.
2. Importera `useState` från `'react'`.
3. Skapa ett state med startvärde 0 för antal klick.
4. Lägg till två knappar: en för att öka med 1 och en för att minska med 1.

Slide includes a shown solution (button labeled "Dölj Lösning", i.e. it's revealed by default):

```jsx
// Counter.jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-white rounded-xl border shadow-sm">
      <h3 className="text-xl font-bold mb-4">Räknare: {count}</h3>
      <div className="space-x-2">
        <button onClick={() => setCount(count + 1)} className="bg-sky-500 text-px px-4 py-2 rounded">+</button>
        <button onClick={() => setCount(count - 1)} className="bg-slate-300 px-4 py-2 rounded">-</button>
      </div>
    </div>
  );
}
```

## Slide 9 — 5. State med olika datatyper 💡

State är inte begränsat till siffror. Du kan lagra booleans, strängar, objekt eller
hela arrayer!

**Booleskt state (Toggle)** — Perfekt för modaler, dropdown-menyer eller
"Visa mer"-knappar.

```jsx
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? "Dölj" : "Visa"}
</button>
```

**Sträng-state (Textfält)** — Sparar vad användaren skriver i ett inputfält i realtid.

```jsx
const [text, setText] = useState("");
<input onChange={(e) => setText(e.target.value)} />
```

## Slide 10 — 6. Under huven: Hur exekveras React? ⚙️

**AVANCERAT BLOCK**

När du anropar `setCount` eller ändrar state händer mycket mer än vad som syns på
ytan. React uppdaterar inte webbläsarens faktiska DOM omedelbart, eftersom det är
långsamt.

Istället bygger React på koncepten **Virtuell DOM** och **Reconciliation**. Låt oss
bryta ner vad som faktiskt sker i maskineriet!

```
// Exekveringscykeln:
1. Användaren klickar -> State ändras
2. React kör om komponenten (Re-render)
3. Ny Virtuell DOM skapas i minnet
4. Diffing & Reconciliation sker
5. Endast nödvändiga ändringar patchas i riktiga DOM
```

## Slide 11 — 7. Den Virtuella DOM:en 🌐

Den riktiga DOM:en (Document Object Model) i webbläsaren är trög att manipulera när
element uppdateras i stora mängder.

**Vad är Virtuell DOM?** Den virtuella DOM:en är en lättviktskopia (ett JavaScript-
objekt) av den riktiga DOM-strukturen som enbart bor i webbläsarens minne. Eftersom
det bara är vanliga JS-objekt går det blixtsnabbt för React att skapa uppdaterade
kopior av hela gränssnittet i bakgrunden.

```js
// Förenklad bild av Virtuellt element:
const vNode = {
  type: 'div',
  props: {
    className: 'card',
    children: [
      { type: 'h1', children: 'Hej Världen' }
    ]
  }
};
```

## Slide 12 — 8. Reconciliation & Diffing-algoritmen 🔍

När state ändras har React två virtuella DOM-träd: *det gamla* och *det nya*.
Processen att jämföra dem kallas **Reconciliation**.

1. **Trädjämförelse (Diffing)** — React jämför det gamla virtuella trädet med det nya
   trädet nod för nod för att se exakt vad som har förändrats.
2. **Effektivitet** — Tack vare smarta heuristiska algoritmer görs detta på
   millisekunder utan att hela sidans struktur ritas om i onödan.
3. **Minimal uppdatering** — Endast det exakta HTML-elementet som ändrats (t.ex. en
   siffra i en text) uppdateras i den riktiga webbläsaren.

## Slide 13 — 9. Vad orsakar en Re-render? 🔄

Att förstå när en komponent ritas om är avgörande för att skriva snabba och buggfria
React-applikationer.

En komponent i React triggar en re-rendering i två specifika fall:

1. När dess interna **state** uppdateras via dess setter-funktion.
2. När dess **props** förändras från förälder-komponenten.

> **Bra att veta:** När en förälder-komponent re-renderas, triggar det som standard
> även en re-rendering av alla dess barnkomponenter!

```jsx
// Exempel på när omrendering sker:
function Parent() {
  const [val, setVal] = useState("hej");

  return (
    <div>
      {/* Ändras val triggas omrendering här & i barnet */}
      <button onClick={() => setVal("hopp")}>Ändra</button>
      <Child text={val} />
    </div>
  );
}
```

## Slide 14 — 10. Sammanfattning: State vs Props 📊

Låt oss ställa upp skillnaderna i en tydlig översikt för att undvika vanliga
missförstånd:

| Egenskap    | Props                      | State                          |
|-------------|-----------------------------|---------------------------------|
| Ursprung    | Skickas utifrån av en förälder. | Skapas internt i komponenten. |
| Förändring  | Skrivskyddade (Read-only).  | Kan uppdateras via setter-funktion. |
| Syfte       | Konfigurera barnet med data. | Hantera komponentens egna data över tid. |

## Slide 15 — 11. Vanliga fallgropar & misstag ⚠️

När man börjar jobba med state och händelser är det lätt att stöta på dessa klassiska
problem:

- ❌ **Direkt modifiering av state** — Att skriva `count = 5` istället för
  `setCount(5)`. React känner då inte till att värdet ändrats och uppdaterar inte
  skärmen.
- ❌ **Oändlig loop (Infinite render)** — Att anropa `setCount` direkt i
  funktionskroppen utanför ett event eller en hook, vilket gör att komponenten
  kraschar webbläsaren.

## Slide 16 — 12. Vad har vi lärt oss idag? 🚀

- 🎯 **Eventhantering** — Lyssna på klick och formulärhändelser på ett säkert sätt.
- 🧠 **useState** — Skapa interaktivt minne i komponenter som uppdaterar skärmen.
- ⚙️ **Under Huven** — Virtuell DOM, reconciliation, diffing och re-rendering.

## Slide 17 — Frågor? 🙋‍♂️🙋‍♀️

Ta en stund att ställa frågor, experimentera med koden och testa räknarövningen.
Fantastiskt jobbat idag!
