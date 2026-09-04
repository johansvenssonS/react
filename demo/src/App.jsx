import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import HelloName from "./Hello.jsx";

function App() {
  let fruits = [
    "äpple",
    "banan",
    "päron",
    "kiwi",
    "apelsin",
    "melon",
    "jordgubbe",
    "hallon",
    "blåbär",
    "citron",
  ];
  const [i, setI] = useState(0);
  return (
    <>
      <h1 className="title">{fruits[i] + "paj"}</h1>
      <button onClick={() => setI((prev) => (prev + 1) % fruits.length)}>
        Next
      </button>
      <HelloName name="Hans" color="red"></HelloName>
      <HelloName name="Johan" color="blue"></HelloName>
      <HelloName name="Martin" color="yellow"></HelloName>
      <HelloName name="Svensson" color="green"></HelloName>
    </>
  );
}

export default App;
