import React from 'react'
import useGlobalGifs from '../../hooks/useGlobalGifs'
import Gif from '../../components/Gif/Gif';

export default function Detail({params:{id}}) {
    const gifs = useGlobalGifs();
    const gif = gifs.find(singleGif => singleGif.id === id);
    return (
        <div>
           <Gif {...gif}/> 
        </div>
    )
}
