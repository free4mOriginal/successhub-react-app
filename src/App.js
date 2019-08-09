import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

// MUI stuff:
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fee0b8",
      main: "#fe9814",
      dark: "#7f4c0a",
      contrastText: "#fff"
    }
  },
  typography: {
    userNextVariants: true,
    fontFamily: {
      primary: "Roboto",
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <header>
          <h1>The Beer Bank</h1>
          <h5>Find your favorite beer here</h5>
        </header>
        <main />
      </MuiThemeProvider>
    );
  }
}

export default App;
