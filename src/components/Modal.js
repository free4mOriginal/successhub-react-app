import React, { Component } from "react";
import { Api } from "../util/Api";

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      ebc: 100,
      similar: []
    };
    this.similarBeerApi = this.similarBeerApi.bind(this);
  }

  similarBeerApi(num) {
    Api.similarBeers(num).then(beerItems => {
      this.setState({ similar: beerItems });
    });
  }

  componentDidMount() {
    this.similarBeerApi(this.state.ebc);
  }

  render() {
    const { children, onToggleModal } = this.props;

    return (
      <div
        className="background"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        onClick={onToggleModal}
      >
        <div className="window" onClick={event => event.stopPropagation()}>
          <i className="far fa-times-circle close" onClick={onToggleModal} />
          {children}
          <div className="might-like">
            <h3 className="card-title">
              <b>You might also like: </b>
            </h3>
          </div>
          <div className="flex-three">
            <div className="modal-card">{}</div>
            <div className="modal-card" />
            <div className="modal-card" />
          </div>
        </div>
      </div>
    );
  }
}
