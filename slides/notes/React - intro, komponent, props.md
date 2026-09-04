# React - intro, komponent, props

> Note: this deck's slides are exported as flattened images (no real text layer), so
> `scripts/extract_pptx.py` returned empty. This file was transcribed by reading each
> slide's embedded image directly.

## Slide 1 — Title
Noll koll till React-mästare
Vecka 36 | Måndag 2 september
En heltäckande start från absolut noll. Idag bryter vi ner webben, bygger vår första
miljö, förstår vad magin under huven är och skriver våra första egna komponenter!

## Slide 2 — 1. Varför finns ens React?
Innan vi hoppar på React måste vi förstå problemet det löser. Tidigare byggde man
hemsidor med separata HTML-, CSS- och JavaScript-filer.
När webbsidor blev stora (tänk Facebook, Instagram, Spotify) blev det ohållbart att
uppdatera tusentals små element i ren JavaScript (`document.getElementById...`).

Reacts idé: Låt JavaScript bygga HTML-strukturen åt oss i minnet och automatiskt rita
om skärmen när data ändras!

```js
// Gammal Vanilla JS (Jobbigt vid stora appar):
const header = document.createElement('h1');
header.innerText = "Hej";
document.body.appendChild(header);

// I React (Rent, deklarativt och smidigt):
<h1>Hej</h1>
```

## Slide 3 — Resan den här veckan
Detta block fokuserar uteslutande på moderna tekniker och verktyg inom Frontend-utveckling.
1. Grunderna idag — Node.js, Vite, npm, index.html, root-elementet, JSX-regler och enkla komponenter.
2. Dataflöde & Props — Skicka data mellan komponenter, återanvändning och strukturering av mappar.
3. Interaktivitet (State) — Händelsehantering (klick, formulär) och minne i komponenter med useState.

## Slide 4 — 2. Vad är Node.js och npm?
Innan vi kan köra React måste vi förstå våra verktyg. React körs inte "bara" i
webbläsaren direkt från en fil, utan vi använder en utvecklingsserver.

Node.js (Motorn): En miljö som låter oss köra JavaScript utanför webbläsaren (på vår
dator). Det är grunden för alla moderna verktyg.
npm (Appstore för kod): Node Package Manager. Ett verktyg som laddar ner färdiga
kodpaket (som React!) från internet till vår dator.

Hur vet man att det fungerar? Du kan öppna din terminal och skriva:
```
node -v
npm -v
```

## Slide 5 — 3. Skapa projekt med Vite ⚡
Vi använder Vite för att starta vårt projekt. Det är blixtsnabbt och sätter upp alla
filer åt oss automatiskt.

Kommando-magin: När du kör kommandot skapas en mapp med all färdig konfiguration,
moduler och en startmall.
npm run dev: Startar en lokal webbserver på din dator (t.ex. http://localhost:5173)
som uppdateras direkt när du sparar kod.

```bash
# Skapa ett projekt som heter "min-app"
npm create vite@latest min-app -- --template react

# Gå in i mappen
cd min-app

# Installera beroenden & starta
npm install
npm run dev
```

## Slide 6 — 4. Vad finns i mappen? (Filstrukturen)
När du öppnar din nya Vite-mapp i VS Code ser du en hel del filer. Här är de
viktigaste du behöver bry dig om just nu:
- node_modules/ — Här ligger alla färdiga kodbibliotek som Vite och React behöver.
  Rör helst aldrig denna mapp!
- src/ — Hjärtat i din applikation! Det är här all din egen kod (komponenter, CSS,
  JS) kommer att bo.
- package.json — Receptboken för projektet. Visar vilka paket som används och vilka
  kommandon som finns.

## Slide 7 — 5. Inne i index.html
Vänta nu... om React bygger allt, var finns själva HTML-sidan? Jo, i roten ligger en
enda HTML-fil som fungerar som en tom tavla.

React är en SPA (Single Page Application). Det betyder att webbläsaren bara laddar
index.html en enda gång.
Inuti filen finns ett element med ett id (ofta id="root"). Det är här React
injicerar hela din applikation!

```html
<!doctype html>
<html lang="sv">
  <head></head>
  <body>
    <!-- Här tar React över! -->
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## Slide 8 — 6. Kopplingen: main.jsx
Hur hittar React till id="root" i vår HTML? Det gör filen src/main.jsx!
main.jsx är startpunkten för all JavaScript i React.
Den letar upp elementet med ID root och säger till React: "Ta vår huvudkomponent
(App) och rendera den på skärmen här!"

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Slide 9 — 7. Vad är en Komponent?
En komponent i React är i grunden en JavaScript-funktion som returnerar HTML
(eller snarare JSX).
Tänk på dem som legobitar eller skräddarsydda HTML-taggar. Istället för att skriva
långa listor med samma HTML kan du kapsla in utseende och logik.

Gyllene regeln: Komponentnamn måste alltid börja med stor bokstav (t.ex.
ProductCard), annars tror React att det är en vanlig HTML-tagg!

```jsx
// En egen komponent!
function WelcomeBanner() {
  return (
    <div className="banner">
      <h2>Hej från komponenten!</h2>
    </div>
  );
}

export default WelcomeBanner;
```

## Slide 10 — 8. Vad är JSX? (JavaScript XML)
När vi tittar på kodexempel ser vi HTML-taggar direkt inuti JavaScript-kod. Hur är
det möjligt? Det är JSX!

Magin bakom kulisserna: Webbläsaren förstår egentligen inte JSX. Innan koden körs
omvandlar Vite/Babel din JSX till ren JavaScript (anrop som React.createElement).
Det ger oss fördelen att kunna skriva intuitiv HTML samtidigt som vi har hela
JavaScripts kraft till hands.

```jsx
// Skrivs så här i din fil:
const element = <h1>Hej Världen!</h1>;

// Omvandlas under huven till:
const element = React.createElement(
  'h1',
  null,
  'Hej Världen!'
);
```

## Slide 11 — 9. JSX: 3 Gyllene Regler
Eftersom JSX inte är exakt samma sak som vanlig HTML finns det tre viktiga
syntaxregler du måste lära känna utantill:
01 En enda förälder — Du kan inte returnera flera syskon-taggar bredvid varandra.
   Omslut allt i en <div> eller ett tomt fragment <>...</>.
02 className — Använd className istället för HTML:s class, eftersom class är ett
   reserverat ord i JavaScript.
03 Måsvingar {} — Allt som står innanför måsvingar { } tolkas som vanlig JavaScript
   direkt i din HTML-struktur!

## Slide 12 — 10. JavaScript i HTML med {}
Måsvingarna är porten mellan JavaScript och HTML. Du kan stoppa in variabler,
beräkningar eller arrayer direkt!
Du behöver inte längre krångla med innerHTML eller textinterpellation på det gamla
sättet.
Skriv bara din variabel i JavaScript-delen av komponenten och skjut in den i JSX
med {variabelNamn}.

```jsx
function UserGreeting() {
  const namn = "Sara";
  const poäng = 42;

  return (
    <div className="card">
      <h3>Välkommen tillbaka, {namn}!</h3>
      <p>Dina poäng: {poäng * 2}</p>
    </div>
  );
}
```

## Slide 13 — Praktisk Checkpunkt 1: Skapa din första egna komponent
Dags att testa! Följ dessa steg i ditt Vite-projekt:
1. Öppna mappen src och skapa en ny fil som heter Hello.jsx.
2. Skriv en funktion som heter Hello och returnerar en <div> med ditt namn i en <h1>.
3. Glöm inte att skriva export default Hello; längst ner!
4. Importera och rendera din komponent i App.jsx.

Lösning (shown behind a "Dölj Lösning" toggle, so it's given away in the deck itself):
```jsx
// Hello.jsx
export default function Hello() {
  return (
    <div>
      <h1>Hej, jag heter Alexander!</h1>
    </div>
  );
}
```

## Slide 14 — 11. Vad är Props (Properties)?
Om komponenter vore statiska skulle vi inte komma långt. Vi vill kunna återanvända
samma komponent (t.ex. en produktbox eller ett användarkort) med olika data.
Det är här props kommer in! De fungerar precis som HTML-attribut (t.ex.
<Kort namn="Ali" />).

Flödesriktning: Props flödar alltid åt ett håll: uppifrån och ned (Från förälder
till barn).

```jsx
// Föräldern skickar:
<ProductCard title="Skor" price={500} />

// Barnet tar emot i objektet props:
function ProductCard(props) {
  return <h3>{props.title}</h3>;
}
```

## Slide 15 — 12. Att skicka och ta emot Props
Låt oss titta på hur en förälder-komponent och en barn-komponent pratar med
varandra i ett komplett exempel.

```jsx
// App.jsx (Förälder)
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Fatima" role="Utvecklare" />
      <Greeting name="Marcus" role="Designer" />
    </div>
  );
}
export default App;
```
```jsx
// Greeting.jsx (Barn)
export default function Greeting(props) {
  return (
    <div className="card">
      <h3>Namn: {props.name}</h3>
      <p>Roll: {props.role}</p>
    </div>
  );
}
```

## Slide 16 — 13. Proffstips: Destructuring av Props
Att skriva props.name och props.role varje gång kan bli tjatigt. JavaScript låter
oss "packa upp" objektet direkt i funktionsargumentet!
Genom att sätta måsvingar kring variablerna direkt i parameterlistan slipper du
skriva ordet props överhuvudtaget.
Detta är standardpraxis som nästan alla React-utvecklare använder dagligen.

```jsx
// Istället för function Greeting(props) { ... }
export default function Greeting({ name, role }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
```

## Slide 17 — 14. Viktig regel: Props är Read-Only
En grundläggande princip i React är att props är skrivskyddade (immutable).
Ett barn får aldrig någonsin försöka ändra värdet på en prop som den har fått från
sin förälder. Om data behöver ändras, är det föräldern som styr det via state
(som vi tittar på nästa lektion).

⚠ Tänk på props som postorder-paket: Du får öppna och titta på innehållet, men inte
packa om eller ändra det du fått!

```jsx
// FÖRBJUDET (Gör aldrig så här!):
function Child(props) {
  props.name = "Nytt namn"; // CRASH / BUGG!
}
```

## Slide 18 — Praktisk Checkpunkt 2: Bygg dynamiska visitkort med Props
Nu sätter vi ihop allt vi lärt oss om komponenter och props:
1. Skapa en komponent som heter ProfileCard.jsx.
2. Låt den ta emot name, title och city via props (använd gärna destructuring).
3. Styla kortet med snygga klasser (eller Tailwind).
4. Rendera ProfileCard minst tre gånger i din App.jsx med olika personer!

Lösning (given away in the deck itself):
```jsx
// ProfileCard.jsx
export default function ProfileCard({ name, title, city }) {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-sky-600">{title}</p>
      <p className="text-slate-400 text-sm">Stad: {city}</p>
    </div>
  );
}
```

## Slide 19 — 15. Bonus: Rendera listor med .map()
Vad händer om vi har en array med 100 användare? Skall vi skriva <ProfileCard />
100 gånger? Nej, vi använder JavaScripts .map()!
Metoden .map() förvandlar en array av data till en array av React-komponenter.
React kräver att varje element i en list-rendering får en unik key-prop så att den
kan hålla ordning på elementen effektivt.

```jsx
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Eva" }
];

return (
  <div>
    {users.map(u => (
      <ProfileCard key={u.id} name={u.name} />
    ))}
  </div>
);
```

## Slide 20 — 16. Vanliga nybörjarmissar & Felsökning
Alla gör fel i början! Här är de vanligaste sakerna som brukar ställa till det:
- ❌ "Component is not defined" — Du glömde att importera komponenten längst upp i
  filen (eller glömde export default i barnfilen).
- ❌ "Adjacent JSX elements must be wrapped" — Du försökte returnera två
  syskon-taggar direkt utan en omslutande <>...</> eller <div>.
- ❌ Små bokstäver på komponenter — Du döpte komponenten till userCard istället för
  UserCard, vilket gör att React ignorerar den.
- ❌ Glömda måsvingar i props — När du skickar siffror eller booleans som props
  måste du använda måsvingar, t.ex. age={25} istället för age="25".

## Slide 21 — 17. Vad har vi lärt oss idag? 🚀
⚙️ Miljö & Vite — Hur Node, npm och Vite fungerar för att starta ett projekt på
millisekunder.
🧩 Komponenter & JSX — Att bygga återanvändbara funktioner med HTML-syntax inuti
JavaScript.
📦 Props & Dataflöde — Att skicka dynamisk data uppifrån och ned till våra
komponenter.

## Slide 22 — 18. Nästa lektion: Interaktivitet!
Nu kan vi bygga snygga vyer och skicka data mellan komponenter. Men vad händer när
användaren klickar på en knapp eller fyller i ett formulär?
På onsdag tar vi nästa stora steg och introducerar State (useState) och
händelsehantering (Events) för att göra våra appar levande!

Förebud inför onsdag:
- Vad är "State" i React?
- Hur lyssnar man på klick (`onClick`)?
- Bygga en interaktiv räknare eller gillande-knapp.

## Slide 23 — Frågor? 🙋‍♂️🙋‍♀️
Ta en stund att ställa frågor, experimentera med koden och testa övningarna.
Bra jobbat med din första dag i React!
