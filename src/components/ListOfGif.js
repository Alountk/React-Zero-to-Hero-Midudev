import React, {useEffect, useState} from 'react'
import getGifs from "../services/getGifs";
import Gif from './Gif'

export default function ListOfGif ({params:{keyword}}) {
    const [gifs, setGifs] = useState([]);
    useEffect(() => {
        getGifs({keyword})
        .then((imgs) => setGifs(imgs));
      }, [keyword]);
    return (
        gifs.map(({id,title,url}) => 
          <Gif 
            id={id} 
            title={title} 
            url={url} 
            />
        )
    )
}
