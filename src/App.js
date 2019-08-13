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
      allBeers: [],
    };
    this.handleFavorites = this.handleFavorites.bind(this);
    this.searchBeerApi = this.searchBeerApi.bind(this);
    this.toggleFavor = this.toggleFavor.bind(this);
  }

  handleFavorites() {
    this.setState(prevState => ({
      allBeers: prevState.allBeers.filter(beer => beer.favored)
    }));
  }

  toggleFavor(id) {
    let selectedBeer = this.state.allBeers.filter(item => item.id === id);

    if (!selectedBeer[0].favored) {
      this.setState(prevState => ({
        allBeers: prevState.allBeers.map(beer =>
          beer.id === id ? { ...beer, favored: true } : beer
        )
      }));
    } else {
      this.setState(prevState => ({
        allBeers: prevState.allBeers.map(beer =>
          beer.id === id ? { ...beer, favored: false } : beer
        )
      }));
    }
  }

  searchBeerApi(term) {
    Api.searchBeers(term).then(beerItems => {
      this.setState({ allBeers: beerItems });
    });
  }

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
