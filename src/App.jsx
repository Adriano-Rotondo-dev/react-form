import { useState } from "react";

import singles_list from "./data/articles";

function App() {
  const [newSingle, setNewSingle] = useState("");
  const [singles, setSingles] = useState(singles_list);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newSingle);
    setSingles([newSingle, ...singles]);
  }
  return (
    <div className="container flex">
      <ul className="singlesList">
        <h2>This is your to-listen list</h2>
        {singles.map((single, index) => {
          return (
            <li key={index} className="single flex">
              {single}
              <img className="icon" src="/img/sp_logo.ico" alt="sp_logo" />
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit} className="form flex">
        <input
          className="input"
          placeholder="Insert New Single"
          type="text"
          value={newSingle}
          onChange={(e) => setNewSingle(e.target.value)}
        />
        <button type="submit" className="btn flex">
          Save the next Ritual
          <img className="icon" src="/img/sp_logo.ico" alt="sp_logo" />
        </button>
      </form>
    </div>
  );
}

export default App;
