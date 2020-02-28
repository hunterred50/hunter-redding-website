import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Contact extends Component {
  render() {
    return (
      <div>
        <Modal title="Contact me" closeModal={this.props.display} icon="phone_2" className="modal" 
        style={{right: "5%", top: "5%", height: 150, width: 200}}>
          Hunter Redding<br />
          hunterred50@gmail.com<br /><br />
          <a href="https://www.linkedin.com/in/hunter-redding/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://github.com/hunterred50" target="_blank" rel="noopener noreferrer">github</a>
        </Modal>
      </div>
    )
  }
}

export default Contact