import React, { Component } from "react";

export default class Beer extends Component {
  render() {
    const { id, favored, image_url, name, tagline, toggleFavor } = this.props;

    return (
      <figure>
        <div className="favorite">
          {favored ? (
            <i className="fas fa-star"
              onClick={() => toggleFavor(id)}
            />
          ) : (
            <i className="far fa-star"
              onClick={() => toggleFavor(id)}
            />
          )}
        </div>
        <img src={image_url} alt="Beer" />
        <h3 className="cardTitle">
          <b>{name}</b>
        </h3>
        <p className="tagline">{tagline}</p>
      </figure>
    );
  }
}

