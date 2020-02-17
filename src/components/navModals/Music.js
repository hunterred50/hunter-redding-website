import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Music extends Component {
  render() {
    return (
      <Modal title="My music" closeModal={this.props.display} icon="media_cd" className="modal" 
        style={{right: "30%", top: "15%", height: 150}}>
          coming soon...<br />
      </Modal>
    )
  }
}

export default Music