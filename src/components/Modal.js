import React from 'react';
import { Api } from "../util/Api";

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

  export default Modal;