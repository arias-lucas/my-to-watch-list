import { useEffect, useState } from 'react';

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_APIKEY}`;

function useFetchMovies(movieTitle) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (movieTitle.length > 2) {
      setIsLoading(true);
      fetch(`${API_URL}&s=${movieTitle}&type=movie`)
        .then(response => response.json())
        .then(response => {
          if (response.Response) {
            setMovies(response.Search);
          }
        })
        .finally(() =>
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
        );
    }
  }, [movieTitle])

  return { movies, isLoading };
}

export default useFetchMovies;