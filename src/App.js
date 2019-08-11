import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";
import Api from "./util/Api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeers: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.searchBeerApi = this.searchBeerApi.bind(this);
    this.favorBeer = this.favorBeer.bind(this);
  }

  handleClick() {
    console.log(this.state.favoredBeers);
  }

  favorBeer(index) {
    this.setState(() => ({
      [this.state.allBeers[index].favored]: true
    }));
  }

  searchBeerApi(term) {
    Api.searchBeers(term).then(beerItems => {
      this.setState({ allBeers: beerItems });
    });
  }

  componentDidMount() {
    this.searchBeerApi();
  }

  render() {
    return (
      <div>
        <NavBar searchBeerApi={this.searchBeerApi} />
        <Header searchBeerApi={this.searchBeerApi} />
        <Main allBeers={this.state.allBeers} favorBeer={this.favorBeer} />
      </div>
    );
  }
}

export default App;
