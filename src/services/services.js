export async function getSearchResualts(query) {
  const res = await fetch(
    `https://yts.mx/api/v2/list_movies.json?query_term=${query}&limit=6`
  );
  const data = res.json();
  return data;
}

export async function getMovieDetails(id) {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=28c690f8&plot=full`
  );
  const data = await res.json();
  return data;
}

export async function getMovieTorrents(id) {
  const res = await fetch(
    `https://yts.mx/api/v2/movie_details.json?imdb_id=${id}`
  );
  const data = await res.json();
  return data.data.movie.torrents;
}
