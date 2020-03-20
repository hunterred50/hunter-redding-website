import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Code extends Component {
  render() {
    return (
      <Modal title="Coding portfolio" closeModal={this.props.display} icon="defrag" className="modal" 
        style={{left: "40%", top: "30%", height: "20%", width: "45%",}}>
        <a href="https://gdurl.com/Jgwe" target="_blank" rel="noopener noreferrer">resume</a><br />
      </Modal>
    )
  }
}

export default Code