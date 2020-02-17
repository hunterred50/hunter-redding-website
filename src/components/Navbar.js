import React, { Component } from 'react'
import Button from '@react95/core/Button'
import Icon from '@react95/core/Icon'
import Modal from '@react95/core/Modal'

import Music from './navModals/Music'
import Photo from './navModals/Photo'
import Vid from './navModals/Vid'
import Art from './navModals/Art'
import Code from './navModals/Code'
import Contact from './navModals/Contact'

const imgStyle = {  display: "block", 
                    marginTop: "1em", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    width: "270px", 
                    height: "380px", 
                    objectPosition: "100% 10%", 
                    objectFit: "cover", 
                    boxShadow: "10px 10px" }
const divForText = {display: "block", 
                    marginTop: "1em", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    width: 270, 
                    height: 380, 
                    objectPosition: "100% 10%", 
                    objectFit: "cover" }

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBio: true,
      displaySite: true,
      displayMusic: false,
      displayPhoto: false,
      displayVid: false,
      displayArt: false,
      displayCode: false,
      displayContact: true
    }
    this.clearState = this.clearState.bind(this);
    this.toggleBio = this.toggleBio.bind(this);
    this.toggleSite = this.toggleSite.bind(this);
    this.toggleMusic = this.toggleMusic.bind(this);
    this.togglePhoto = this.togglePhoto.bind(this);
    this.toggleVid = this.toggleVid.bind(this);
    this.toggleArt = this.toggleArt.bind(this);
    this.toggleCode = this.toggleCode.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
  }
  clearState() {
    this.setState(state => ({
      displayBio: false,
      displaySite: false,
      displayMusic: false,
      displayPhoto: false,
      displayVid: false,
      displayArt: false,
      displayCode: false,
      displayContact: false
    }));
  }
  toggleBio() {
    this.setState(state => ({
      displayBio: !state.displayBio
    }));
  }
  toggleSite() {
    this.setState(state => ({
      displaySite: !state.displaySite
    }));
  }
  toggleMusic() {
    this.setState(state => ({
      displayMusic: !state.displayMusic
    }));
  }
  togglePhoto() {
    this.setState(state => ({
      displayPhoto: !state.displayPhoto
    }));
  }
  toggleVid() {
    this.setState(state => ({
      displayVid: !state.displayVid
    }));
  }
  toggleArt() {
    this.setState(state => ({
      displayArt: !state.displayArt
    }));
  }
  toggleCode() {
    this.setState(state => ({
      displayCode: !state.displayCode
    }));
  }
  toggleContact = () => {
    this.setState(state => ({
      displayContact: !state.displayContact
    }));
  }
  render() {
    return (
      <div className="nav">
        <div className="nav-item" onClick={this.clearState}> {/*option could be to reset to initial state, which would be startup*/}
          <Icon name="computer_5"/>
          <p>home</p>
        </div>

        <div className="nav-item" onClick={this.toggleBio}>
          <Icon name="notepad"/>
          <p>about me</p>
        </div>
        {this.state.displayBio && <Bio display={this.toggleBio} />}

        {this.state.displaySite && <Modal title="About this site" closeModal={this.toggleSite} icon="defrag" className="modal" 
          style={{left: "27%", top: "40%", height: 170, width: 310}}>
            This site was developed using React!<br /><br />Click and drag the blue bar at the top of this window around!<br/><br/>Wow! This was implemented using the UI library React95.
        </Modal>}

        <div className="nav-item" onClick={this.toggleMusic}>
          <Icon name="media_cd"/>
          <p>music</p> {/* click to play a random song from a playlist of songs I've been a part of */}
        </div>
        {this.state.displayMusic && <Music display={this.toggleMusic} />}

        <div className="nav-item" onClick={this.togglePhoto}>
          <Icon name="camera"/>
          <p>photography</p>
        </div>
        {this.state.displayPhoto && <Photo display={this.togglePhoto} />}

        <div className="nav-item" onClick={this.toggleVid}>
          <Icon name="media_video"/>
          <p>video</p>
        </div>
        {this.state.displayVid && <Vid display={this.toggleVid} />}

        <div className="nav-item" onClick={this.toggleArt}>
          <Icon name="mspaint"/>
          <p>visual art</p>
        </div>
        {this.state.displayArt && <Art display={this.toggleArt} />}

        <div className="nav-item" onClick={this.toggleCode}>
          <Icon name="defrag"/>
          <p>coding</p>
        </div>
        {this.state.displayCode && <Code display={this.toggleCode} />}

        <div className="nav-item" onClick={this.toggleContact}>
          <Icon name="phone_2"/>
          <p>contact me</p>
        </div>
        {this.state.displayContact && <Contact display={this.toggleContact} />}

        <Button>click me!</Button>
      </div>
    )
  }
}
export default Navbar

class Bio extends Component {
  render() {
    return (
      <Modal title="About me" closeModal={this.props.display} icon="notepad" className="modal" 
        style={{left: "5%", top: "10%", height: 650, width: 350}}>
          <img src="https://gdurl.com/pTtP" alt="me" style={imgStyle}/>
          <div style={divForText}>
            <p><br />Hello, welcome to my website!</p><br />My name is Hunter Redding, I'm a software developer, musician, and an artist of many forms.<br /><br />
            Feel free to use the icons at the top to explore my various works!
          </div>
      </Modal>
    )
  }
}