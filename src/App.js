import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import axios from 'axios';

// MUI stuff:
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import Header from "./components/Header";

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
        <Header />
      </MuiThemeProvider>
    );
  }
}

export default App;
