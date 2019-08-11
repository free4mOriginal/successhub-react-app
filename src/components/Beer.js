import React, { Component } from "react";

class Beer extends Component {
  render() {
    return (
      <figure>
        <div className="favorite">
          {this.props.favored[this.props.index].favored ? (
            <i className="fas fa-star"
              onClick={() => this.props.toggleFavor(this.props.index)}
            />
          ) : (
            <i className="far fa-star"
              onClick={() => this.props.toggleFavor(this.props.index)}
            />
          )}
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
