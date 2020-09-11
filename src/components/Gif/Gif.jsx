import React from "react";
// styles
import './Gif.css';

export default function Gif({ title, id, url }) {
  return (
      <a href={`#${id}`} className='Gif' key={id}>
        <h4>{title}</h4>
        <small>{id}</small>
        <img src={url} alt={title} />
      </a>
  );
}
