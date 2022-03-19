import { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="filter people"
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      {JSONDATA.filter((curr) => {
        if (searchTerm === "") {
          return curr;
        } else if (
          curr.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return curr.first_name;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
