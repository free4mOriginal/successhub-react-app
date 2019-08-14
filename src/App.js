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
      randomThree: []
    };
    this.handleFavorites = this.handleFavorites.bind(this);
    this.searchBeerApi = this.searchBeerApi.bind(this);
    this.toggleFavor = this.toggleFavor.bind(this);
    this.randomBeers = this.randomBeers.bind(this);
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

  randomBeers() {
    const ranArray = Array.from(
      [1, 1, 1],
      x => x * Math.floor(Math.random() * 80)
    );
    this.setState({
      randomThree: ranArray
    });
  }

  componentDidMount() {
    this.searchBeerApi("");
    this.randomBeers();
  }

  render() {
    console.log(this.state.randomThree);
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
          randomBeers={this.randomBeers}
          randomThree={this.state.randomThree}
        />
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default App;
