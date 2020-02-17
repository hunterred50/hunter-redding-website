import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Art extends Component {
  render() {
    return (
      <Modal title="My art" closeModal={this.props.display} icon="mspaint" className="modal" 
        style={{right: "30%", top: "15%", height: 150}}>
          Coming soon...<br />
      </Modal>
    )
  }
}

export default Art