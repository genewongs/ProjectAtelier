import React from 'react';

function Modal({ show, children, toggleModal }) {
  const showHideClassName = show ? 'modal-block' : 'modal-none';

  return (
    <div className={showHideClassName}>
      <div className="modal-container" aria-hidden="true" onClick={toggleModal}>
        <div className="modal-content" aria-hidden="true" onClick={(e) => { e.stopPropagation(); }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
