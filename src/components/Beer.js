import React, { Component } from "react";

class Beer extends Component {
  render() {
    const { index, allBeersState, image_url, name, tagline, toggleFavor } = this.props;

    console.log(index, allBeersState, allBeersState[index]);

    return (
      <figure>
        <div className="favorite">
          {true ? (
            <i className="fas fa-star"
              onClick={() => toggleFavor(index)}
            />
          ) : (
            <i className="far fa-star"
              onClick={() => toggleFavor(index)}
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

export default Beer;
