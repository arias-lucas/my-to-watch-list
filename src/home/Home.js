import React, { useState } from 'react';
import useFetchMovies from './useFetchMovies/useFetchMovies';
import useDebounce from '../commonHooks/useDebounce';
import HomeContainer from './home-container/HomeContainer';

function Home() {
  const [searchMovieInput, setSearchMovieInput] = useState('');
  const { movies, isLoading } = useFetchMovies(useDebounce(searchMovieInput, 350) || 'black'); //default value for api request. OMDB Api doesn't have a getAll endpoint.
  const handleChange = e => setSearchMovieInput(e.target.value);

  return <HomeContainer searchMovieInput={searchMovieInput} handleChange={handleChange} movies={movies} isLoading={isLoading} />
}

export default Home;