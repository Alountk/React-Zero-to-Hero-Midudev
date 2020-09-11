import {useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext';

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const {gifs, setGifs} = useContext(GifsContext);
  //recovery keyword from localstorage
  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || 'random';
  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse }).then(imgGifs => {
      setGifs(imgGifs);
      setLoading(false);
      //save keyword in localstorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, keywordToUse, setGifs]);

  return { loading, gifs };
}
