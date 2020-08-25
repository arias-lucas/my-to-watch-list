import React from 'react';
import styled from 'styled-components';
import { nunitoFont } from './../../fonts';

const Input = styled.input`
  height: 55px;
  padding: 0px 15px;
  align-self: center;
  ${nunitoFont}
  font-size: 22px;
  width: 40%;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

function SearchInput({ value, onChange }) {
  return <Input type="text" placeholder="Find a movie" value={value} onChange={onChange}></Input>
}

export default SearchInput;