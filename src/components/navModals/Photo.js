import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Photo extends Component {
  render() {
    return (
      <Modal title="My photography" closeModal={this.props.display} icon="camera" className="modal" 
        style={{right: "30%", top: "15%", height: 150}}>
          coming soon...<br />
      </Modal>
    )
  }
}

export default Photo