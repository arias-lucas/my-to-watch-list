import React from "react";
import { useHistory } from "react-router-dom";
import {
  MovieCardContainer,
  MovieTitle,
  MovieYear,
  MoviePoster,
} from "./MovieCard.styles";

function MovieCard({ movie }) {
  const history = useHistory();

  function handleClick({ imdbID }) {
    history.push(`/details/${imdbID}`);
  }

  return (
    <MovieCardContainer onClick={() => handleClick(movie)}>
      <MovieTitle>{movie.Title}</MovieTitle>
      <MoviePoster>
        <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
      </MoviePoster>
      <MovieYear>{movie.Year}</MovieYear>
    </MovieCardContainer>
  );
}

export default MovieCard;
