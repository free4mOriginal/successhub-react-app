import React, { Component } from "react";

// Header:
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // Sets search term:
  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  // Calls beer Api with term from above:
  handleSearch() {
    this.props.searchBeerApi(this.state.term);
  }

  render() {
    return (
      <div className="header-container">
        <div className="header">
          <h1>The Beer Bank</h1>
          <h5>Find your favorite beer here</h5>
          <input
            type="textfield"
            placeholder="Search for beer name"
            onChange={this.handleTermChange}
          />
          <i className="fas fa-search" onClick={this.handleSearch} />
        </div>
      </div>
    );
  }
}
