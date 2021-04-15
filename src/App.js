import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./home/Home";
import MovieDetails from "./movie-details/MovieDetails";
import MyToWatchList from "./my-to-watch-list/MyToWatchList";
import NoMatch from "./no-match/NoMatch";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME, DARK_THEME } from "./themes";
import AppHeader from "./header/AppHeader";
import { ThemeContext } from "./themes";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [theme, setTheme] = useState(() => DARK_THEME);
  const changeTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME
    );

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <ThemeContext.Provider value={{ theme, changeTheme }}>
          <AppHeader></AppHeader>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={MovieDetails} />
            <Route path="/my-list" component={MyToWatchList} />
            <Route component={NoMatch} />
          </Switch>
        </ThemeContext.Provider>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
