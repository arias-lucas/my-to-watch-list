import React from 'react';
import styled from 'styled-components';
import { doHyeonFont } from '../fonts';
import ThemesSwitch from './themes-switch/ThemesSwitch';

const Header = styled.h1`
  text-align: center;
  ${doHyeonFont}
  font-weight: 100;
`;

function AppHeader() {
  return <>
    <Header>MY TO WATCH LIST</Header>
    <ThemesSwitch></ThemesSwitch>
  </>
}

export default AppHeader;