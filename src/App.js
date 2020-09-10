import React, { useState } from "react";
//dependencies
import { Link, Route } from "wouter";
//components
import ListOfGif from "./components/ListOfGif";
//css
import "./App.css";

function App() {
  // eslint-disable-next-line
  const [searchConfig, setSearchConfig] = useState({
    keyword: "programming",
  });

  return (
    <div className="App">
      <section className="App-content">
      <h1>App</h1>
      <Link to="/gif/panda">Gif panda</Link>
      <Link to="/gif/matrix">Gif matrix</Link>
      <Link to="/gif/watchmen">Gif watchmen</Link>
      <Route path="/gif/:keyword" component={ListOfGif}/>
        {/* <ListOfGif keyword={searchConfig} /> */}
      </section>
    </div>
  );
}

export default App;
