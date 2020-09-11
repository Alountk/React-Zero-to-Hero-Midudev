import React, {useContext} from 'react'
import GifsContext from '../../context/GifsContext'
import Gif from '../../components/Gif/Gif';

export default function Detail({params:{id}}) {
    const {gifs} = useContext(GifsContext);
    const gif = gifs.find(singleGif => singleGif.id === id);
    const {title, url} = gif;
    return (
        <div>
           <Gif id={id} title={title} url={url}/> 
        </div>
    )
}
