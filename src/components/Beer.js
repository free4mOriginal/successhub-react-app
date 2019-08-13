import React, { Component, Fragment } from "react";

export default class Beer extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
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
          <img onClick={this.showModal} src={image_url} alt="Beer" />
          <h3 className="cardTitle">
            <b>{name}</b>
          </h3>
          <p className="tagline">{tagline}</p>
        </figure>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <p>Modal</p>
          <p>Data</p>
        </Modal>
      </Fragment>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};