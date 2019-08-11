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
                  favorBeer={this.props.favorBeer}
                  index={item.index}
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

