import React from 'react';
import './Modal.css';

const Modal = (props: React.Props<any>) => {

  return (
    <div className="Modal">
      <div className="modal-content">{ props.children }</div>
    </div>
  );
};

export default Modal;
