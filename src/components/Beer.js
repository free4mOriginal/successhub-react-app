import React, { Component, Fragment } from "react";

export default class Beer extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      random: []
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.randomBeers = this.randomBeers.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  randomBeers() {
    const { allBeers } = this.props;

    let ranArray = Array.from(
      [1, 1, 1],
      x => x * Math.floor(Math.random() * 80)
    );
    
    ranArray = allBeers.filter(beer =>
      beer.id === parseInt(ranArray[0]) || beer.id === parseInt(ranArray[1]) || beer.id === parseInt(ranArray[2]));

    console.log(ranArray);
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
      bestServed,
    } = this.props;

    this.randomBeers();

    return (
      <Fragment>
        {this.state.isOpen && (
          <Modal onToggleModal={this.toggleModal}>
            <img
              onClick={this.toggleModal}
              src={image_url}
              alt="Beer"
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
              <div className="might-like">
                <h3 className="card-title">
                  <b>You might also like: </b>
                </h3>
              </div>
              <div className="flex-three">
                <div className="modal-card">
                  {}
                </div>
                <div className="modal-card" />
                <div className="modal-card" />
              </div>
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
      </Fragment>
    );
  }
}

const Modal = ({ children, onToggleModal }) => {
  return (
    <div
      className="background"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      onClick={onToggleModal}
    >
      <div className="window" onClick={event => event.stopPropagation()}>
        <i className="far fa-times-circle close" onClick={onToggleModal} />
        {children}
      </div>
    </div>
  );
};
