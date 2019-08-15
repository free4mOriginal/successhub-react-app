import React, { Component } from "react";

export class Like extends Component {
  render() {
    const { title, image_url } = this.props;

    return (
      <div className="modal-card">
        <img
        //   onClick={this.toggleModal}
          src={image_url}
          alt={title}
          className="like-img"
        />
        <h2 className="like-title">
          <b>{title}</b>
        </h2>
      </div>
    );
  }
}

export default Like;
