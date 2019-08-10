import React, { Component } from "react";

export default class Navbar extends Component {
  handleClick() {
    console.log("clicked");
  }

  render() {
    return (
      <div className="nav">
        <span onClick={this.handleClick}>
          <i class="fas fa-home" /> HOME
        </span>
        <span onClick={this.handleClick}>
          <i class="fas fa-star" />
          <i class="far fa-star" /> FAVORITE
        </span>
      </div>
    );
  }
}
