import React, { Component } from "react";

class Beer extends Component {
  render() {
    return (
      <figure onClick={() => this.props.favorBeer(this.props.id)} >
        <div className="favorite">
          <i className="far fa-star" />
        </div>
        <img src={this.props.image_url} alt="Beer" />
        <h3 className="cardTitle">
          <b>{this.props.name}</b>
        </h3>
        <p className="tagline">{this.props.tagline}</p>
      </figure>
    );
  }
}

export default Beer;
