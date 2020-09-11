const apiKey = "2eC2kFTVoJNhLXhr7JagZgaq8LyeepQp";
export default function getGifs({ keyword } = {}) {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  )
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      const arrayGifs = data.map((image) => {
          const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return {title, id , url}
      });
      return arrayGifs;
    });
}
