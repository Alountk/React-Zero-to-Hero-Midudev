import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params: { keyword } }) {
  const { loading, gifs } = useGifs({ keyword });
  return <>{loading ? <h3>loading...</h3> : <ListOfGifs gifs={gifs} />}</>;
}
