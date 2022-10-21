import React from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalBlock } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

class Modal extends React.Component {

componentDidMount(){
  window.addEventListener('keydown', this.closeModal)
}

componentWillUnmount(){
  window.removeEventListener('keydown', this.closeModal)
}

closeModal = e => {
  if(e.currentTarget === e.target || e.code === 'Escape'){
    this.props.onClose();
  }
}
render(){
  return(
    createPortal(
<Overlay onClick={this.closeModal}>
  <ModalBlock>
    {this.props.children}
  </ModalBlock>
</Overlay>, modalRoot))}

}

export default Modal;