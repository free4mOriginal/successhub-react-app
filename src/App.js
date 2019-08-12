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
      favoredBeers: []
    };
    this.handleFavorites = this.handleFavorites.bind(this);
    this.searchBeerApi = this.searchBeerApi.bind(this);
    this.toggleFavor = this.toggleFavor.bind(this);
  }

  handleFavorites() {
    this.setState(prevState => ({
      allBeers: prevState.allBeers.map(
        beer => beer.favored ? { ...beer, favored: true } : beer
      )
    }));
  }

  toggleFavor(index) {
    console.log(this.state.allBeers);
    
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
    this.searchBeerApi('');
  }

  render() {
    return (
      this.state.allBeers ? (
        <div>
        <NavBar handleFavorites={this.handleFavorites} searchBeerApi={this.searchBeerApi} />
        <Header searchBeerApi={this.searchBeerApi} />
        <Main allBeers={this.state.allBeers} toggleFavor={this.toggleFavor} allBeersState={this.state.allBeers} />
      </div>
      ) : (
        <p>Loading...</p>
      )
    );
  }
}

export default App;
