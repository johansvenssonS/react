import { use, useState } from "react";
import "./App.css";
import usePokemon from "./usePokemon.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const pokemon = formData.get("pokemon");
    setSearchTerm(pokemon);
  }

  return (
    <>
      {usePokemon(searchTerm)}
      <form onSubmit={handleSubmit}>
        <input name="pokemon" />
        <button type="submit">Sök</button>
      </form>
    </>
  );
}

export default App;
