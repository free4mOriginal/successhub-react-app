import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";
import { Api } from "./util/Api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeers: [],
      similar: []
    };
    this.handleFavorites = this.handleFavorites.bind(this);
    this.searchBeerApi = this.searchBeerApi.bind(this);
    this.toggleFavor = this.toggleFavor.bind(this);
    this.similarBeerApi = this.similarBeerApi.bind(this);
  }

  handleFavorites() {
    this.setState(prevState => ({
      allBeers: prevState.allBeers.filter(beer => beer.favored)
    }));
  }

  toggleFavor(id) {
    this.setState(prevState => ({
      allBeers: prevState.allBeers.map(beer =>
        beer.id === id ? { ...beer, favored: !beer.favored } : beer
      )
    }));
  }

  searchBeerApi(term) {
    Api.searchBeers(term).then(beerItems => {
      this.setState({ allBeers: beerItems });
    });
  }

  similarBeerApi(num) {
    Api.similarBeers(num).then(beerItems => {
      this.setState({ similar: beerItems })
    });
  }

  componentDidMount() {
    this.searchBeerApi("");
    this.similarBeerApi(30);
  }

  render() {
    return this.state.allBeers ? (
      <div>
        <NavBar
          handleFavorites={this.handleFavorites}
          searchBeerApi={this.searchBeerApi}
        />
        <Header searchBeerApi={this.searchBeerApi} />
        <Main
          allBeers={this.state.allBeers}
          similar={this.state.similar}
          similarCall={this.similarBeerApi}
          toggleFavor={this.toggleFavor}
        />
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default App;
