import React, { Component } from "react";
import Data from "../util/testJSON";

console.log(Data);

class Beer extends Component {
  render() {
    return (
      <div className="beerCard">
        <img src={Data[0].image_url} alt="Beer" />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    );
  }
}

export default Beer;
