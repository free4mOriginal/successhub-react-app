import React, { Component } from "react";
import Modal from './Modal';

// Individual Beer cards (with Modal):
export default class Beer extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  // Turns Modal on or off:
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {
      id,
      favored,
      image_url,
      name,
      tagline,
      toggleFavor,
      ibu,
      abv,
      ebc,
      description,
      bestServed
    } = this.props;

    return (
      <div>
        {this.state.isOpen && (
          <Modal ebc={ebc} onToggleModal={this.toggleModal}>
            <img
              src={image_url}
              alt={name}
              className="modal-img"
            />
            <div>
              <h2 className="card-title">
                <b>{name}</b>
              </h2>
              <p className="tagline">{tagline}</p>
              <hr className="line" />
              <br />
              <span className="numbers">
                <b>IBU: </b> {ibu}
              </span>
              <span className="numbers">
                <b>ABV: </b> {abv}
              </span>
              <span className="numbers">
                <b>EBC: </b> {ebc}
              </span>
              <p className="description">{description}</p>
              <p>
                <b>Best served with:</b>
              </p>
              <ul>
                {bestServed.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Modal>
        )}
        <figure>
          <div className="favorite">
            {favored ? (
              <i className="fas fa-star" onClick={() => toggleFavor(id)} />
            ) : (
              <i className="far fa-star" onClick={() => toggleFavor(id)} />
            )}
          </div>
          <img onClick={this.toggleModal} src={image_url} alt="Beer" />
          <h3 className="card-title">
            <b>{name}</b>
          </h3>
          <p className="tagline">{tagline}</p>
        </figure>
      </div>
    );
  }
}

