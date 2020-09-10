import React, { useState } from "react";
import "./App.css";
import ListOfGif from "./components/ListOfGif";

function App() {
  const [searchConfig, setSearchConfig] = useState({
    keyword: "programming",
  });

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGif keyword={searchConfig} />
      </section>
    </div>
  );
}

export default App;
