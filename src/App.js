import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './home/Home';
import MovieDetails from './movie-details/MovieDetails';
import MyToWatchList from './my-to-watch-list/MyToWatchList';
import NoMatch from './no-match/NoMatch';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes"
import AppHeader from './app-header/AppHeader';

const AppContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  min-height: 100vh;
  display:  flex;
  flex-direction: column;
`;

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const changeTheme = () => setTheme(prevTheme => prevTheme === darkTheme ? lightTheme : darkTheme);

  return <ThemeProvider theme={theme}>
    <AppContainer>
      <AppHeader handleChange={changeTheme}></AppHeader>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={MovieDetails} />
        <Route path="/my-list" component={MyToWatchList} />
        <Route component={NoMatch} />
      </Switch>
    </AppContainer>
  </ThemeProvider>
}

export default App;
