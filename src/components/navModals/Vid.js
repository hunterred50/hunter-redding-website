import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Vid extends Component {
  render() {
    return (
      <Modal title="My videography" closeModal={this.props.display} icon="media_video" className="modal" 
        style={{right: "30%", top: "15%", height: 150}}>
          coming soon...<br />
      </Modal>
    )
  }
}

export default Vid