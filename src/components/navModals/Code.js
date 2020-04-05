import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Code extends Component {
  render() {
    return (
      <Modal title="Coding portfolio" closeModal={this.props.display} icon="defrag" className="modal" 
        style={this.props.homeStyle ? {left: "40%", top: "300px", height: "15em", width: "44em",} : {left: "5%", top: "10%", height: "82%", width: "90%"}}>
        <a href="https://gdurl.com/Jgwe" target="_blank" rel="noopener noreferrer">resume</a><br />
      </Modal>
    )
  }
}

export default Code