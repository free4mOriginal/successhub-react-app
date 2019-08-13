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
    const { id, favored, image_url, name, tagline, toggleFavor } = this.props;

    return (
      <Fragment>
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
        {this.state.isOpen && (
          <Modal onToggleModal={this.toggleModal}>
            <p>Modal</p>
            <p>Data</p>
          </Modal>
        )}
      </Fragment>
    );
  }
}

const Modal = ({ children, onToggleModal }) => {
  return (
    <div
      className="background"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onToggleModal}
    >
      <div className="window" onClick={event => event.stopPropagation()}>
        <button className="close" onClick={onToggleModal}>
          Close here
        </button>
        {children}
      </div>
    </div>
  );
};
