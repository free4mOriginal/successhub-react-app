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
    this.handleFavorites = this.handleFavorites.bind(this);
    this.searchBeerApi = this.searchBeerApi.bind(this);
    this.toggleFavor = this.toggleFavor.bind(this);
  }

  handleFavorites() {
    console.log(this.state.allBeers);
  }

  toggleFavor(index) {
    // console.log(this.state.allBeers);
    // console.log('before', this.state.allBeers[index].favored);

    if (!this.state.allBeers[index].favored) {
      this.setState(prevState => ({
        allBeers: prevState.allBeers.map(
          beer => beer.index === index ? { ...beer, favored: true } : beer
        )
      }));
      return false;
    } else {
      this.setState(prevState => ({
        allBeers: prevState.allBeers.map(
          beer => beer.index === index ? { ...beer, favored: false } : beer
        )
      }));
      return true;
    }
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
        <NavBar handleFavorites={this.handleFavorites} />
        <Header searchBeerApi={this.searchBeerApi} />
        <Main allBeers={this.state.allBeers} toggleFavor={this.toggleFavor} favored={this.state.allBeers} />
      </div>
    );
  }
}

export default App;
