import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <span onClick={() => this.props.searchBeerApi('')}>
          <i className="fas fa-home"/> HOME
        </span>
        <span onClick={() => this.props.handleFavorites()}>
          <i className="fas fa-star"/> FAVORITE
        </span>
      </div>
    );
  }
}
