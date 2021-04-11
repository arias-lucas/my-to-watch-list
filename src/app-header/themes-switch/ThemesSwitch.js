import React, { useState } from 'react';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { ThemesContainer, IconContainer, ThemeSwitch } from './ThemesSwitch.styles';

function ThemesSwitch({ handleThemeChange }) {
  const dark = false;
  const light = true;
  const [switchThemeValue, setSwitchThemeValue] = useState(dark);

  const changeSwitch = () => {
    setSwitchThemeValue(prev => !prev)
    handleThemeChange();
  }

  return <ThemesContainer>
    <IconContainer style={{
      left: '-10px'
    }}
      onClick={() => (switchThemeValue !== dark) && changeSwitch()}
      role="darkThemeIcon">
      <NightsStayIcon />
    </IconContainer>
    <ThemeSwitch
      onChange={changeSwitch}
      color="default"
      checked={switchThemeValue}
      inputProps={{
        role: 'themeSwitch',
        'aria-label': "Switch theme's site"
      }}
    />
    <IconContainer style={{
      right: '-10px'
    }}
      onClick={() => (switchThemeValue !== light) && changeSwitch()}
      role="lightThemeIcon">
      <WbSunnyIcon />
    </IconContainer>
  </ThemesContainer>
}

export default ThemesSwitch; 