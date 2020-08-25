import styled from 'styled-components';
import { nunitoFont } from './../../fonts';

const flexContentCentered = `
  display: flex;
  justify-content: center;
`;

const MovieCardContainer = styled.div`
  ${flexContentCentered}
  margin: 30px 50px;
  flex-direction: column;
  width: 300px; 
  cursor: pointer;
`;

const MovieTitle = styled.h2`
  ${flexContentCentered}
  align-items: center;
  height: 50px;
  text-align: center;
  ${nunitoFont}
  font-size: 18px;
`;

const MovieYear = styled.h4`
  ${flexContentCentered}
  ${nunitoFont}
  font-weight: 100;
`;

const MoviePoster = styled.div`
  ${flexContentCentered}
`;

export { MovieCardContainer, MovieTitle, MovieYear, MoviePoster }