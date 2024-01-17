import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { vars, classes } from '@fastcampus/themes';
import styled from '@emotion/styled';

function App() {
  const theme = {
    colors: vars.colors.$static.light,
  };

  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

export default App;

const View = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Text>
        font color is {vars.colors.$static.light.red[500]} {vars.box.radii.base}
      </Text>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

const Text = styled.p`
  /* color: ${({ theme }) => {
    //@ts-ignore
    return theme.colors.red[900];
  }}; */
  color: ${vars.colors.$static.light.red[500]};
`;
