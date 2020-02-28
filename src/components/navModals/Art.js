import React from 'react'
import Modal from '@react95/core/Modal'

function Art(props) {
  return (
    <Modal title="My art" closeModal={props.display} icon="mspaint" className="modal" 
      style={{left: "10%", top: "8%", height: "85%", width: "80%",}}>
        <div style={{width: "100%", height: "100%", overflowY: "scroll"}}>
          coming soon...
          {/* <h3>Sketchbook instagram feed</h3> <br />
          {/* LightWidget WIDGET */} 
          {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
          <iframe title="insta" src="//lightwidget.com/widgets/d41457aac05c5cd5ade6cb3d956c2730.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" 
          style={{width: "70%", height: "100%", border: "0", display: "block", margin: "auto"}}></iframe><br /> */}
        </div>
    </Modal>
  )
}

export default Art