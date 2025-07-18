// import { useState } from "react";

const singles = [
  "Even in Arcadia",
  "Chokehold",
  "Granite",
  "Gethsemane",
  "The Summoning",
  "Euclid",
];

function App() {
  return (
    <div className="container">
      <ul className="singlesList">
        {singles.map((single, index) => {
          return (
            <li key={index} className="single">
              {single}
            </li>
          );
        })}
      </ul>

      {/* Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog.
 Al submit del form, mostrare la lista degli articoli aggiornati. */}
    </div>
  );
}

export default App;
