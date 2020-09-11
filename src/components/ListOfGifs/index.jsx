import React from "react";
//component
import Gif from "../Gif/Gif";
//styles
import './styles.css'

export default function ListOfGifs({ gifs }) {
  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
