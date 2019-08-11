import React, { Component } from "react";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    this.props.searchBeerApi('');
  }

  render() {
    return (
      <div className="nav">
        <span onClick={this.handleSearch}>
          <i className="fas fa-home" /> HOME
        </span>
        <span>
          <i className="fas fa-star" />
          FAVORITE
        </span>
      </div>
    );
  }
}

export default Navbar;
