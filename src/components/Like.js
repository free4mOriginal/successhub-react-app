import React, { Component } from "react";
import Modal from './Modal';

class Like extends Component {
    likeItem() {
        return (
            <Modal />
        )
    }

  render() {
    const { title, image_url } = this.props;

    return (
      <div className="modal-card" onClick={this.likeItem}>
        <img src={image_url} alt={title} className="like-img" />
        <h2 className="like-title">
          <b>{title}</b>
        </h2>
      </div>
    );
  }
}

export default Like;
