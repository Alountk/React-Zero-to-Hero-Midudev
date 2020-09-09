const apiKey = '2eC2kFTVoJNhLXhr7JagZgaq8LyeepQp';
export default function getGifs({keyword = 'starship tropper'}={}) {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response;
      const arrayGifs = data.map( image => image.images.downsized_medium.url)
      return arrayGifs
    })
}