import React, { Component } from "react";

class Beer extends Component {
  render() {
    const { image_url, name, tagline } = this.props.beerData;
    return (
      <figure>
        <div className="favorite">
          <i className="far fa-star" />
        </div>
        <img src={image_url} alt="Beer" />
        <h2 className="cardTitle">
          <b>{name}</b>
        </h2>
        <p className="tagline">{tagline}</p>
      </figure>
    );
  }
}

export default Beer;
