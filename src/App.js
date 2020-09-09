import React, {useState, useEffect} from 'react';
import getGifs from './services/getGifs'
import './App.css';

const APIurl = 'https://api.giphy.com/v1/gifs/search?api_key=2eC2kFTVoJNhLXhr7JagZgaq8LyeepQp&q=starship tropper&limit=25&offset=0&rating=g&lang=en';

function App() {
  const [gifs, setGifs] = useState([]);
  const [searchConfig, setSearchConfig] = useState({
    keyword : 'red panda'
  });

  useEffect(()=>{
      getGifs(searchConfig).then(imgs => setGifs(imgs));
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map( (gif , i) => {

          return <div key={i}>
            <h4>{gif.title}</h4>
            <small>{gif.id}</small>
            <img src={gif.url} alt={gif.title} key={gif.id}/>
          </div>
          })
        }
        {/* <button onClick={() => setGifs(GifsPanda)}>Change</button> */}
      </section>
    </div>
  );
}

export default App;
