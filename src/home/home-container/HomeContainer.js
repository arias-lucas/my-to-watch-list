import React from 'react';
import styled from 'styled-components';
import SearchInput from './../search-input/SearchInput';
import MoviesGrid from './../movies-grid/MoviesGrid';

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color};
`;

function HomeContainer({ searchMovieInput, handleChange, movies, isLoading }) {
  return <StyledHomeContainer>
    <SearchInput value={searchMovieInput} onChange={handleChange} />
    {isLoading && 'Loading...'}
    {!isLoading && <MoviesGrid movies={movies} />}
  </StyledHomeContainer>
}

export default HomeContainer;