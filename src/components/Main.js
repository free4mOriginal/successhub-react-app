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

  render() {
    return (
      <div className="flex-container">
        <div className="flex-container inner">
          {this.state.allBeers ? (
            this.state.allBeers.map(item => {
              return (
                <Beer
                  key={item.title}
                  image_url={item.image_url}
                  name={item.title}
                  tagline={item.tagline}
                  handleClick={this.props.handleClick}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}

