import React from 'react';
import UserPersistedState from './utils/UserPersistedState';
import GlobalStyle from './styles/global';
import Header from './components/header';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import {ThemeProvider, DefaultTheme} from 'styled-components';

function App() {
  const [theme, setTheme] = UserPersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark
    )
  }
  return (
    <ThemeProvider theme = {theme}>
      <>
      <GlobalStyle />
      <Header toggleTheme = {toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
