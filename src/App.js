import React from "react";
//dependencies
import { Link, Route } from "wouter";
//Context
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from "./context/GifsContext";
// pages
import Home from "./pages/Home"
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
//css
import "./App.css";

function App() {

  return (
    <StaticContext.Provider value={
      {
        name: 'chan',
        subscribedToTheChannel: true
      }
    }>
      <div className="App">
        <section className="App-content">
          <h1>App</h1>
          <Link to="/">Home</Link>
          <GifsContextProvider>
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
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
