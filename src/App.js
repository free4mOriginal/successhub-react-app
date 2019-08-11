import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeers: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.searchBeerApi = this.searchBeerApi.bind(this);
    this.favorBeer = this.favorBeer.bind(this);
  }

  handleClick() {
    console.log(this.state.favoredBeers);
  }

  favorBeer(id) {
    const currentState = this.state.allBeers;
    console.log(currentState);
    this.setState(() => ({
      [this.state.allBeers[id-1].favored]: true
    }));
  }

  searchBeerApi() {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then(res => {
        return res.data.map(beerItem => {
          return {
            image_url: beerItem.image_url,
            title: beerItem.name,
            tagline: beerItem.tagline,
            ibu: beerItem.ibu,
            abv: beerItem.abv,
            ebc: beerItem.ebc,
            description: beerItem.description,
            bestServed: beerItem.food_pairing,
            id: beerItem.id,
            favored: false,
          };
        });
      })
      .then(beerItems => {
        this.setState({ allBeers: beerItems });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.searchBeerApi();
  }

  render() {
    return (
      <div>
        <NavBar handleClick={this.searchBeerApi} />
        <Header handleClick={this.searchBeerApi} />
        <Main allBeers={this.state.allBeers} favorBeer={this.favorBeer} />
      </div>
    );
  }
}

export default App;
