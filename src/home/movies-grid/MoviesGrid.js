import React from 'react';
import styled from 'styled-components';
import MovieCard from './../movie-card/MovieCard';

const MoviesGridDiv = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

function MoviesGrid({ movies }) {
  return <MoviesGridDiv>
    {movies && movies.length && movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
    {(!movies || !movies.length) && 'There are no results.'}
  </MoviesGridDiv>
}

export default MoviesGrid;