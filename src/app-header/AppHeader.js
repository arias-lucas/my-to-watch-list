import React from 'react';
import styled from 'styled-components';
import { doHyeonFont } from '../fonts';
import ThemesSwitch from './themes-switch/ThemesSwitch';

const Header = styled.h1`
  text-align: center;
  ${doHyeonFont}
  font-weight: 100;
`;

function AppHeader({ handleChange }) {
  return <>
    <Header>MY TO WATCH LIST</Header>
    <ThemesSwitch handleChange={handleChange}></ThemesSwitch>
  </>
}

export default AppHeader;