import React from "react";
// Routes
import {Link} from 'wouter';
// styles
import './Gif.css';

export default function Gif({ title, id, url }) {
  return (
      <Link to={`/gif/${id}`} className='Gif' key={id}>
        <h4>{title}</h4>
        <small>{id}</small>
        <img loading='lazy' src={url} alt={title} />
      </Link>
  );
}
