import { Component } from "react/cjs/react.production.min";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  };
  
  componentWillUnmount() {
  window.removeEventListener('keydown', this.handleKeyDown)
}

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }
  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
    this.props.onClose()
  }
  }
  
  render() {
    return createPortal (
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          {this.props.children}
        </div>
      </div>, modalRoot
    )
  }
}
export default Modal