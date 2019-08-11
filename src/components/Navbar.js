import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <span onClick={this.props.handleClick}>
          <i className="fas fa-home" /> HOME
        </span>
        <span onClick={this.handleClick}>
          <i className="fas fa-star" />
           FAVORITE
        </span>
      </div>
    );
  }
}
