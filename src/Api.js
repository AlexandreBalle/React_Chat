const axios = require('axios');
const api   = {
  url: "http://www.omdbapi.com/",
  key: "b502738f"
};

export async function loadMovies () {
  const movies = await axios.get(`${api.url}?apikey=${api.key}&s=matrix`)
  .then((res) => {
    let data = res.data.Search;

    return data.filter(movie => {
      return movie.Year > 2002;
    }).map(({Title, Year}) => {
      return `${Title} - ${Year}`;
    });
  })
  .catch((error) => {
    console.log(error);
  });

  console.log(movies);

  return movies;
}
