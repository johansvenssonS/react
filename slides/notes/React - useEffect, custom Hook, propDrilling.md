# React - useEffect, custom Hook, propDrilling

> Note: this deck is image-flattened (every slide is a single picture, no real text
> runs) — `scripts/extract_pptx.py` returns empty. These notes were produced by manual
> transcription of each slide's embedded image, per the fallback procedure in
> `CLAUDE.md`.

## Slide 1 — Title
**Fördjupning i Hooks: useEffect & Custom Hooks** (Vecka 37 | Måndag 7 september)

Idag tar vi nästa stora steg! Vi lär oss hantera sidoeffekter med `useEffect`, förstår
livscykeln i funktionella komponenter, bygger egna återanvändbara (custom) hooks och
kikar på strategier för komplext state.

## Slide 2 — DEL 1: Vad är en sidoeffekt (Side Effect)?
I en ren funktion ska samma indata alltid ge samma utdata utan att påverka omvärlden.
Men moderna webbappar lever i den verkliga världen!

En **sidoeffekt** är allt som interagerar med omvärlden utanför själva komponenten:
- Hämta data från ett externt API (fetch / axios).
- Manuell DOM-manipulation (t.ex. ändra `document.title`).
- Starta timers eller intervaller (`setTimeout`, `setInterval`).
- Lyssna på webbläsarhändelser eller spara i `localStorage`.

```
// Ren vs O-ren funktion:
Ren: Beräknar summan av 2 + 3 och returnerar 5.
Sidoeffekt: Sparar summan i en databas eller ändrar webbläsarens titel.
```

## Slide 3 — useEffect-hooken
För att köra kod som utför sidoeffekter i React använder vi hooken `useEffect`.

`useEffect` tar emot två argument:
1. **En callback-funktion** som innehåller koden som ska köras (sidoeffekten).
2. **En beroendearray (dependency array)** som styr *när* effekten ska köras.

**När körs den?** Som standard körs effekten *efter varje* rendering av komponenten.

```jsx
import { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    console.log("Körs efter varje reload av sidan!");
  },[]);

  return <div>Hej</div>;
}
```

## Slide 4 — Beroendearrayen (Dependency Array)
Det är sällan vi vill att en effekt körs vid *varje* rendering. Genom att skicka med
en array som andra argument styr vi exakt när den triggas.

| Form | Beteende |
|---|---|
| **Ingen array** — `useEffect(() => { ... })` | Körs vid varje render. Körs efter absolut varje omrendering. Används sparsamt! |
| **Tom array `[]`** — `useEffect(() => { ... }, [])` | Körs enbart vid Mount. Körs exakt en gång när komponenten först dyker upp på skärmen. Perfekt för API-anrop! |
| **Med variabler `[prop]`** — `useEffect(() => { ... }, [id])` | Körs vid förändring. Körs vid start och varje gång värdet på `id` ändras. |

## Slide 5 — Städning: Cleanup-funktioner
Vissa effekter skapar resurser som behöver städas upp när komponenten försvinner
(unmountas) eller innan effekten körs om — t.ex. timers, eventlyssnare eller
WebSocket-anslutningar.

Genom att returnera en funktion från din `useEffect`-callback talar du om för React
vad som ska städas upp!

**Varför?** För att undvika minnesläckor (memory leaks) och buggar där appen försöker
uppdatera state i borttagna komponenter.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  // Cleanup-funktion körs vid unmount:
  return () => {
    clearInterval(timer);
    console.log("Timer rensad!");
  };
}, []);
```

## Slide 6 — Livscykeln: Mount, Update & Unmount
En komponents livscykel delas upp i tre faser. Så här mappar `useEffect` mot dem:

1. **Mount (Födelse)** — När komponenten skapas och visas första gången.
   Hook-motsvarighet: `useEffect(..., [])`
2. **Update (Livstid)** — När state eller props ändras och komponenten ritas om.
   Hook-motsvarighet: `useEffect(..., [dep])`
3. **Unmount (Död)** — När komponenten tas bort från skärmen.
   Hook-motsvarighet: Returnerad cleanup-funktion.

## Slide 7-8 — Praktisk Checkpunkt 1: Bygg en API-hämtningskomponent
Skapa en komponent som hämtar användare från `https://jsonplaceholder.typicode.com/users`
när den laddas in på skärmen!

1. Skapa state för `users` (startvärde tom array `[]`) och `loading` (startvärde `true`).
2. Använd `useEffect` med tom beroendearray `[]` för att köra `fetch` vid mount.
3. Spara datan i state och visa en "Laddar..."-text tills datan har anlänt.

Example solution shown on the slide (revealed behind a "Visa Exempel på Lösning" button):
```jsx
import { useState, useEffect } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar användare...</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

## Slide 9 — DEL 2: Skapa egna Custom Hooks
När du upptäcker att du upprepar samma logik (t.ex. datahämtning, formulärhantering
eller lyssnar på fönsterstorlek) i flera komponenter, kan du bryta ut den till en
**Custom Hook**.

En custom hook är helt enkelt en vanlig JavaScript-funktion vars namn börjar på ordet
`use` och som kan anropa andra hooks (som `useState` och `useEffect`).

**Gyllene regeln:** Dela på *logik*, inte på UI. Komponenter bestämmer hur det ser ut,
custom hooks bestämmer hur det fungerar!

```jsx
// Exempel på konvention:
function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);
  // ... lyssna på resize och uppdatera state
  return size;
}
```

## Slide 10 — Custom hook example: useLocalStorage (part 1)
Låt oss titta på hur en praktisk custom hook ser ut när vi vill synka state med
webbläsarens `localStorage`.

Den här hooken fungerar exakt som vanlig `useState`, men sparar automatiskt värdet i
`localStorage` varje gång det ändras.

Genom att kapsla in detta slipper komponenterna bry sig om webbläsarens lagrings-API.

```jsx
function useLocalStorage(key, initialValue) {
  // 1. Skapa ett state med useState.
  // Istället för att skicka in ett fast värde direkt skickar vi in en funktion.
  // Det kallas "lazy initial state" och gör att koden inuti bara körs EN gång när
  // komponenten laddas (vilket sparar prestanda).
  const [value, setValue] = useState(() => {
    // Hämta det sparade värdet från webbläsarens minne (localStorage) med hjälp av
    // nyckeln (key).
    const saved = localStorage.getItem(key);
    // I localStorage sparas allt som text (strängar).
    // Om 'saved' finns, omvandlar vi texten tillbaka till ett JavaScript-objekt/värde
    // med JSON.parse().
    // Om 'saved' inte finns (t.ex. första gången koden körs) använder vi
    // standardvärdet 'initialValue'.
    return saved ? JSON.parse(saved) : initialValue;
  });

  // 2. Använd useEffect för att automatiskt spara ändringar.
  // Den här koden körs varje gång 'key' eller 'value' ändras.
  useEffect(() => {
    // Eftersom localStorage bara kan spara text, omvandlar vi vårt 'value' till en
    // textsträng med JSON.stringify().
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // 3. Returnera värdet och funktionen för att uppdatera det.
  // Detta gör att hooken kan användas på samma sätt som en vanlig
  // [value, setValue] = useState().
  return [value, setValue];
}
```

## Slide 11 — Custom hook example: useLocalStorage (part 2, usage)
Låt oss titta på hur vi faktiskt använder vår custom hook `useLocalStorage` i en
React-komponent.

Komponenten fungerar precis som om du hade använt vanliga `useState`, men med den
stora fördelen att värdet automatiskt sparats i webbläsaren.

Om du uppdaterar textfältet och laddar om sidan kommer namnet fortfarande att finnas
kvar.

```jsx
import React from 'react';
// Importera din custom hook
import { useLocalStorage } from './useLocalStorage';

function App() {
  // Används på exakt samma sätt som useState!
  // 'name' är nyckeln i localStorage, och 'Anonym' är startvärdet om inget finns sparat.
  const [name, setName] = useLocalStorage('name', 'Anonym');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Hej, {name}! 👋</h1>

      {/* När du skriver i textfältet uppdateras 'name' */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Skriv ditt namn..."
      />

      <p>
        Prova att ladda om sidan (F5) - ditt namn ligger kvar i webbläsaren! 💾
      </p>
    </div>
  );
}

export default App;
```

## Slide 12 — DEL 3: State-strategier i komplexa appar
När en applikation växer räcker det inte alltid med lokal `useState` i varje enskild
komponent. Vi stöter på problem som **Prop Drilling** (att skicka props genom 5 nivåer
av komponenter som inte ens bryr sig om datan).

Vi behöver därför strukturera vårt state:
- **Lokal state:** Formulärfält, öppna/stängda menyer (använd `useState`).
- **Globalt state:** Inloggad användare, tema, kundvagn (använd Context API eller
  externa bibliotek).
- **Server state:** Cachelagrad API-data.

```
// Problemet med Prop Drilling:
App ➡ Layout ➡ Sidebar ➡ UserProfile ➡ Avatar (använder datan)
Alla emellan tvingas skicka props vidare i onödan!
```

## Slide 13 — Lösningen: React Context API
Context API tillåter oss att dela data globalt i hela komponentträdet utan att skicka
props manuellt på varje nivå.

Vi skapar en **Context**, sätter en **Provider** högt upp i komponentträdet, och
plockar ut datan med `useContext` där den behövs.

**När ska man använda det?** Perfekt för globala inställningar som mörkt/ljust läge
(Dark Mode) eller inloggningsstatus.

```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Aktivt tema</div>;
}
```

## Slide 14 — Sammanfattning: Hook-arsenalen
| Hook | Syfte | Exempel på användning |
|---|---|---|
| `useState` | Hantera interaktivt komponentminne. | Räknare, formulärinput, toggles. |
| `useEffect` | Hantera sidoeffekter och livscykel. | API-anrop, timers, prenumerationer. |
| `useContext` | Komma åt globalt state utan prop drilling. | Användarautentisering, tema, språk. |
| `Custom Hooks` | Återanvända stateful logik mellan komponenter. | `useLocalStorage`, `useFetch`. |

## Slide 15 — Vad har vi lärt oss idag?
- 🌍 **Sidoeffekter** — Hur applikationen interagerar med omvärlden via `useEffect`.
- 🛠️ **Custom Hooks** — Bryta ut och återanvända logik med egna use-funktioner.
- 🏛️ **Komplext State** — Strategier mot prop drilling och introduktion till Context API.

## Slide 16 — Frågor & Diskussion?
Fantastiskt jobbat idag! Passa på att ställa frågor om `useEffect`, beroenden eller
hur man bygger egna custom hooks.
