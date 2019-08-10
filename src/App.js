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
      favoredBeers: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.searchBeerApi = this.searchBeerApi.bind(this);
  }

  handleClick() {
    console.log(this.state.favoredBeers);
  }

  searchBeerApi() {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then(res => {
        console.log("res", res);
        return res.data.map(beerItem => {
          return {
            image_url: beerItem.image_url,
            title: beerItem.name,
            tagline: beerItem.tagline,
            ibu: beerItem.ibu,
            abv: beerItem.abv,
            ebc: beerItem.ebc,
            description: beerItem.description,
            bestServed: beerItem.food_pairing
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
        <NavBar />
        <Header handleClick={this.handleClick} />
        <Main allBeers={this.state.allBeers} />
      </div>
    );
  }
}

export default App;
