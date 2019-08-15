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
    };
    this.handleFavorites = this.handleFavorites.bind(this);
    this.searchBeerApi = this.searchBeerApi.bind(this);
    this.toggleFavor = this.toggleFavor.bind(this);
  }

  // Filters allBeers to only show favored beers:
  handleFavorites() {
    this.setState(prevState => ({
      allBeers: prevState.allBeers.filter(beer => beer.favored)
    }));
  }

  // Toggles the favored property of allBeers on specified beer id:
  toggleFavor(id) {
    this.setState(prevState => ({
      allBeers: prevState.allBeers.map(beer =>
        beer.id === id ? { ...beer, favored: !beer.favored } : beer
      )
    }));
  }

  // Calls up the beer Api with the search term and sets the allBeers state to result:
  // (on initial call maximum allowed number of beers is set)
  searchBeerApi(term) {
    Api.searchBeers(term).then(beerItems => {
      this.setState({ allBeers: beerItems });
    });
  }

  // Making the initial Api call:
  componentDidMount() {
    this.searchBeerApi("");
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
          toggleFavor={this.toggleFavor}
        />
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default App;
