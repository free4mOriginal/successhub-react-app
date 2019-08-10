import React, { Component } from "react";

export default class Navbar extends Component {
  handleClick() {
    console.log("clicked");
  }

  render() {
    return (
      <div className="nav">
        <span onClick={this.handleClick}>HOME</span>
        <span onClick={this.handleClick}>FAVORITE</span>
      </div>
    );
  }
}
