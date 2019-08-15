import React, { Component } from "react";
import { Api } from "../util/Api";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ebc: this.props.ebc,
      similar: []
    };
    this.similarBeerApi = this.similarBeerApi.bind(this);
  }

  similarBeerApi(num) {
    Api.similarBeers(num).then(beerItems => {
      this.setState({ similar: beerItems.slice(0, 3) });
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
            <div className="modal-card">{console.log(this.state.similar)}</div>
            <div className="modal-card" />
            <div className="modal-card" />
          </div>
        </div>
      </div>
    );
  }
}
