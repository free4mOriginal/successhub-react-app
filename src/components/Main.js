import React, { Component } from "react";
import Beer from "./Beer";
import Data from "../util/testJSON";

console.log(Data);

export default class Main extends Component {
  state = {
    beers: []
  };

  render() {
    return (
      <div className="flex-container">
        <div className='flex-container inner'>
          <Beer beerData={Data[0]} />
          <Beer beerData={Data[1]} />
          <Beer beerData={Data[2]} />
          <Beer beerData={Data[3]} />
          <Beer beerData={Data[4]} />
          <Beer beerData={Data[5]} />
        </div>
      </div>
    );
  }
}
