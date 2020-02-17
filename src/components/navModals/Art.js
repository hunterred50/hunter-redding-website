import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Art extends Component {
  render() {
    return (
      <Modal title="My art" closeModal={this.props.display} icon="mspaint" className="modal" 
        style={{right: "30%", top: "15%", height: "80%", width: "30%"}}>
          <div style={{width: "100%", height: "100%", overflowY: "scroll"}}>
            <h3>Sketchbook instagram feed</h3> <br />
            {/* LightWidget WIDGET */} 
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe title="insta" src="//lightwidget.com/widgets/d41457aac05c5cd5ade6cb3d956c2730.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" 
            style={{width: "100%", height: "100%", border: "0"}}></iframe><br />
          </div>
      </Modal>
    )
  }
}

export default Art