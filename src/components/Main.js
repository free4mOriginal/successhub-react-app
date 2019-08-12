import React, { Component } from "react";
import Beer from "./Beer";

export default class Main extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-container inner">
          {this.props.allBeers ? (
            this.props.allBeers.map(item => {
              console.log(this.props.allBeersState)
              return (
                <Beer
                  key={item.title}
                  image_url={item.image_url}
                  name={item.title}
                  tagline={item.tagline}
                  toggleFavor={this.props.toggleFavor}
                  index={item.index}
                  allBeersState={this.props.allBeersState}
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
