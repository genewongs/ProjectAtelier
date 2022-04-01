import React from 'react';

function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? 'modal-block' : 'modal-none';

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <button
          type="button"
          className="modal-close"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
