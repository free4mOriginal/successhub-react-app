import React, { Component } from "react";
import Beer from "./Beer";

export default class Main extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-container inner">
          {this.props.allBeers ? (
            this.props.allBeers.map(item => {
              return (
                <Beer
                  key={item.title}
                  image_url={item.image_url}
                  name={item.title}
                  tagline={item.tagline}
                  toggleFavor={this.props.toggleFavor}
                  id={item.id}
                  favored={item.favored}
                  ibu={item.ibu}
                  abv={item.abv}
                  ebc={item.ebc}
                  description={item.description}
                  bestServed={item.bestServed}
                  randomBeers={this.props.randomBeers}
                  randomThree={this.props.randomThree}
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
