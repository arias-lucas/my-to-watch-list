import React from 'react';
import { MovieCardContainer, MovieTitle, MovieYear, MoviePoster } from "./MovieCard.styles";

function MovieCard({ movie }) {
  return <MovieCardContainer>
    <MovieTitle>
      {movie.Title}
    </MovieTitle>
    <MoviePoster>
      <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
    </MoviePoster>
    <MovieYear>
      {movie.Year}
    </MovieYear>
  </MovieCardContainer>
}

export default MovieCard;