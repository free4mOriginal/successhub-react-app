import React, { Component, Fragment } from "react";

export default class Beer extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

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
      <Fragment>
        {this.state.isOpen && (
          <Modal onToggleModal={this.toggleModal}>
            <img
              onClick={this.toggleModal}
              src={image_url}
              alt="Beer"
              className="modal-img"
            />
            <h3 className="cardTitle">
              <b>{name}</b>
            </h3>
            <p className="tagline">{tagline}</p>
            <hr className="line"/>
            <br/>
            <span><b>IBU:</b> {ibu}</span>
            <span><b>ABV:</b> {abv}</span>
            <span><b>EBC:</b> {ebc}</span>
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
          <h3 className="cardTitle">
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
