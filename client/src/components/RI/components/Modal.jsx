import React from 'react';

export default function Modal({ show, children, toggleModal }) {
  const showHideClassName = show ? 'modal-block' : 'modal-none';
  return (
    <div className={showHideClassName}>
      <div className="modal-container" aria-hidden="true" onClick={toggleModal}>
        {children}
      </div>
    </div>
  );
}
