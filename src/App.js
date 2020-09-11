import React from "react";
//dependencies
import { Link, Route } from "wouter";
// pages
import Home from "./pages/Home"
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
//css
import "./App.css";

function App() {

  return (
    <div className="App">
      <section className="App-content">
      <h1>App</h1>
      <Link to="/">Home</Link>
      <Route 
        component={Home}
        path="/" 
      />
      <Route 
        component={SearchResults}
        path="/search/:keyword" 
      />
      <Route 
        path="/gif/:id" 
        component={Detail}
        />
      </section>
    </div>
  );
}

export default App;
