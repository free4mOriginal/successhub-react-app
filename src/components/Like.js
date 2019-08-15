import React, { Component } from "react";

// Individual item from Similar items:
class Like extends Component {
  render() {
    const { title, image_url, onToggleModal } = this.props;

    return (
      <div className="modal-card" onClick={onToggleModal}>
        <img src={image_url} alt={title} className="like-img" />
        <h2 className="like-title">
          <b>{title}</b>
        </h2>
      </div>
    );
  }
}

export default Like;
