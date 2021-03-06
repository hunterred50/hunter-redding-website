import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Contact extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        {!this.props.close && <Modal title="Contact me" closeModal={this.props.display} icon="phone_2" className="modal" 
        style={{right: "2%", top: "7%", height: 170, width: 230}}>
          Hunter Redding<br />
          hunterred50@gmail.com<br /><br />
          currently located in the Atlanta, GA area<br/><br />
          <a href="https://www.linkedin.com/in/hunter-redding/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://github.com/hunterred50" target="_blank" rel="noopener noreferrer">github</a>
        </Modal>}
      </div>
    )
  }
}

export default Contact