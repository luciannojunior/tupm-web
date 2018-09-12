import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffefd7'},
    secondary: { main: '#57c5d0'},
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider theme={theme}>
        <Home/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
