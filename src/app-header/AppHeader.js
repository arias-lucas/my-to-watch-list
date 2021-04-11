import React from 'react';
import styled from 'styled-components';
import { doHyeonFont } from '../fonts';
import ThemesSwitch from './themes-switch/ThemesSwitch';

const Header = styled.h1`
  text-align: center;
  ${doHyeonFont}
  font-weight: 100;
`;

function AppHeader({ handleThemeChange }) {
  return <>
    <Header>MY TO WATCH LIST</Header>
    <ThemesSwitch handleThemeChange={handleThemeChange}></ThemesSwitch>
  </>
}

export default AppHeader;