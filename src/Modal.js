import React from 'react'

function Modal({closeModal}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-text">
          <p>Connect Wallet</p>
          <img src="./img/x.svg" alt="close icon" className="close-modal" onClick={() => closeModal(false)}/>
        </div>
        <div className="choice-wrap">
        <p className="choice">Choose your preferred wallet</p>
        <img src="./img/Frame 37.svg" alt="metamask logo" className="metamask" />
        <img src="./img/Frame 38.svg" alt="wallet connect logo" className="wallet-connect" />
        </div>
        </div>
    </div>
  )
}

export default Modal
