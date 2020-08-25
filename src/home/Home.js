import React, { useState } from 'react';
import MovieCard from './movie-card/MovieCard';
import SearchInput from './search-input/SearchInput';
import styled from 'styled-components';
import useFetchMovies from './useFetchMovies/useFetchMovies';
import useDebounce from '../commonHooks/useDebounce';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color};
`;

const MoviesGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

function Home() {
  const [searchMovieInput, setsearchMovieInput] = useState('');
  const { movies, isLoading } = useFetchMovies(useDebounce(searchMovieInput, 350) || 'black'); //default value for api request. OMDB Api doesn't have a getAll endpoint.
  const handleChange = e => setsearchMovieInput(e.target.value);

  return <HomeContainer>
    <SearchInput value={searchMovieInput} onChange={handleChange}></SearchInput>

    {isLoading && 'Loading...'}
    {!isLoading &&
      <MoviesGrid>
        {movies && movies.map(movie => <MovieCard key={movie.imdbID} movie={movie}></MovieCard>)}
      </MoviesGrid>
    }

  </HomeContainer>
}

export default Home;