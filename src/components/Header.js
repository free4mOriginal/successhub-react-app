import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <h1>The Beer Bank</h1>
          <h5>Find your favorite beer here</h5>
          <input type="textfield" placeholder="Search for beer name" />
          <i
            className="fas fa-search"
            onClick={() => this.props.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Header;
