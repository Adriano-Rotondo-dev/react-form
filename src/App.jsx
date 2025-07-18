import { useState } from "react";
import singles_list from "./data/articles";

function App() {
  const [newSingle, setNewSingle] = useState("");
  const [singles, setSingles] = useState(singles_list);

  function handleSubmit(e) {
    e.preventDefault();
    setSingles([newSingle, ...singles]);
  }
  function handleDelete(singleToRemove) {
    setSingles(singles.filter((single, index) => index !== singleToRemove));
  }
  return (
    <div className="container flex">
      <ul className="singlesList">
        <h2>This is your to-listen list</h2>
        {singles.map((single, index) => {
          return (
            <li key={index} className="single flex">
              {single}
              <button
                className="delete btn"
                onClick={() => handleDelete(index)}
              >
                <i class="fa-solid fa-trash"></i>
              </button>
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
        <button type="submit" className="save btn flex">
          Save the next Ritual
          <img className="icon" src="/img/sp_logo.ico" alt="sp_logo" />
        </button>
      </form>
    </div>
  );
}

export default App;
