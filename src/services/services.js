const API_KEY = "28c690f8";

export async function getSearchResults(query, page) {
  const res = await fetch(
    `https://yts.mx/api/v2/list_movies.json?query_term=${query}&limit=4&page=${page}`
  );
  const data = res.json();
  return data;
}

export async function getMovieDetails(id) {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
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
