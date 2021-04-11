import React from "react";
import styled from "styled-components";
import { doHyeonFont } from "../fonts";
import ThemesSwitch from "./themes-switch/ThemesSwitch";
import { ThemeContext } from "./../themes";

const Header = styled.h1`
  text-align: center;
  ${doHyeonFont}
  font-weight: 100;
`;

function AppHeader() {
  return (
    <>
      <Header>MY TO WATCH LIST</Header>
      <ThemeContext.Consumer>
        {(themeContext) => <ThemesSwitch {...themeContext}></ThemesSwitch>}
      </ThemeContext.Consumer>
    </>
  );
}

export default AppHeader;
