import React, { Component } from 'react';
import Modal from '@react95/core/Modal'
import { Breakpoint } from 'react-socks'

const imgStyle = {  display: "block", 
                    marginTop: "1em", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    width: "300px", 
                    height: "380px", 
                    objectPosition: "100% 10%", 
                    objectFit: "cover", 
                    boxShadow: "10px 10px" }
const divForText = {display: "block", 
                    marginTop: "1em", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    width: 325, 
                    height: 380, 
                    objectPosition: "100% 10%", 
                    objectFit: "cover" }

class Bio extends Component {
  render() {
    return (
      <Modal title="About me" closeModal={this.props.display} icon="notepad" className="modal" 
        style={{left: "3%", top: "7%", height: 670, width: 380, zIndex: 0}}>
          <img src="https://gdurl.com/pTtP" alt="me" style={imgStyle}/>
          <div style={divForText}>
            <Breakpoint medium up>
              <p><br />Hello, welcome to my website!</p><br />My name is Hunter Redding, I'm a software developer, musician, and an artist of many forms.<br /><br />
              I'm currently a freelance web developer and artist, if you have interest in working with me, check out the contact window above, thanks!<br /><br />
              Feel free to use the icons at the top to explore my various works :)
            </Breakpoint>
            <Breakpoint small down>
              <p><br />Hello, welcome to my website!</p><br />My name is Hunter Redding, I'm a software developer, musician, and an artist of many forms.<br /><br />
              I'm currently a freelance web developer and artist, if you have interest in working with me, check out the contact window above, thanks!<br /><br />
              Feel free to use the start button at the top to explore my various works :)
            </Breakpoint>
          </div>
      </Modal>
    )
  }
}

export default Bio