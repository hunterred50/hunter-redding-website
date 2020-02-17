import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Code extends Component {
  render() {
    return (
      <Modal title="Coding portfolio" closeModal={this.props.display} icon="defrag" className="modal" 
        style={{right: "30%", top: "15%", height: 150}}>
        <a href="https://gdurl.com/Jgwe" target="_blank" rel="noopener noreferrer">resume</a><br />
      </Modal>
    )
  }
}

export default Code