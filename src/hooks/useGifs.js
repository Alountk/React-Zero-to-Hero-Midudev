import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    //recovery keyword from localstorage
    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || 'random';
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      //save keyword in localstorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword]);

  return { loading, gifs };
}
