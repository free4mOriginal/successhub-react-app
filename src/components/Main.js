import React, { Component } from "react";
import Beer from "./Beer";
import Data from "../util/testJSON";
import axios from "axios";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeers: [],
      favoredBeers: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.favoredBeers);
  }

  componentDidMount() {
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
          };
        });
      })
      .then(beerItems => {
        console.log(beerItems);
        this.setState({ allBeers: beerItems });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="flex-container">
        <div className="flex-container inner">
          <Beer beerData={Data[0]} handleClick={this.handleClick} />
          <Beer beerData={Data[1]} handleClick={this.handleClick} />
          <Beer beerData={Data[2]} handleClick={this.handleClick} />
          <Beer beerData={Data[3]} handleClick={this.handleClick} />
          <Beer beerData={Data[4]} handleClick={this.handleClick} />
          <Beer beerData={Data[5]} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
