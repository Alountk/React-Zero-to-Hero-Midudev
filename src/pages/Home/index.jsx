import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/index.jsx";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Matrix", "Panda", "programming", "Fight"];

export default function Home() {
  const [keyword, setKeyword] = useState(); // eslint-disable-next-line
  const [path, pushLocation] = useLocation(); // eslint-disable-next-line
  const { loading, gifs } = useGifs();
  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a gif here..."
          onChange={handleChange}
          value={keyword}
        />
      </form>
      <h3 className="App-title">Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
