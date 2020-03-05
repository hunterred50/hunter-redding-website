import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Modal from '@react95/core/Modal'
import { Breakpoint } from 'react-socks'
import { Switch, Route } from 'react-router-dom'
// import shared from '@react95/core'
import Music from './components/navModals/Music'
import Photo from './components/navModals/Photo'
import Vid from './components/navModals/Vid'
import Art from './components/navModals/Art'
import Code from './components/navModals/Code'
import Contact from './components/navModals/Contact';
// import Contact from './components/navModals/Contact';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBio: false,
      displaySite: false,
      displayMusic: false,
      displayPhoto: false,
      displayVid: false,
      displayArt: false,
      displayCode: false,
      displayContact: false,
      bkgdCount: 0
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
  setCount = (count) => {
    this.setState(state => ({
      bkgdCount: count
    }));
  }
  changeBkgd = () => {
    if (this.state.bkgdCount < 2) {
      this.setCount(this.state.bkgdCount + 1)
    }
    else {
      this.setCount(0)
    }
  }

  render() {
    const bkgds = ["https://gdurl.com/7YDR", "https://gdurl.com/a01J", "https://gdurl.com/jK8m"]

    return (
      <div className="App" > {/* style={{backgroundImage: "url(" + bkgds[bkgdCount] + ")"}}> */}
        <Breakpoint small down>
          <Navbar 
            toggleBio={this.toggleBio}
            toggleSite={this.toggleSite}
            toggleMusic={this.toggleMusic}
            togglePhoto={this.togglePhoto}
            toggleVid={this.toggleVid}
            toggleArt={this.toggleArt}
            toggleCode={this.toggleCode}
            toggleContact={this.toggleContact}
            displayBio={this.state.displayBio}
            displaySite={this.state.displaySite}
            displayMusic={this.state.displayMusic}
            displayPhoto={this.state.displayPhoto}
            displayVid={this.state.displayVid}
            displayArt={this.state.displayArt}
            displayCode={this.state.displayCode}
            displayContact={!this.state.displayContact}
            changeBkgd={this.changeBkgd} />
        </Breakpoint>
        <Breakpoint medium up>
          <Navbar 
            toggleBio={this.toggleBio}
            toggleSite={this.toggleSite}
            toggleMusic={this.toggleMusic}
            togglePhoto={this.togglePhoto}
            toggleVid={this.toggleVid}
            toggleArt={this.toggleArt}
            toggleCode={this.toggleCode}
            toggleContact={this.toggleContact}
            displayBio={this.state.displayBio}
            displaySite={this.state.displaySite}
            displayMusic={this.state.displayMusic}
            displayPhoto={this.state.displayPhoto}
            displayVid={this.state.displayVid}
            displayArt={this.state.displayArt}
            displayCode={this.state.displayCode}
            displayContact={this.state.displayContact}
            changeBkgd={this.changeBkgd} />
        </Breakpoint>
        <Switch>
          <Route exact path='/'>
            {!this.state.displayBio && <Bio display={this.toggleBio} />}
            <Breakpoint medium up>
            {!this.state.displayContact && <Contact display={this.toggleContact} />}
              {!this.state.displaySite && <Modal title="About this site" closeModal={this.toggleSite} icon="defrag" className="modal" 
                style={{left: "26%", top: "60%", height: 170, width: 310}}>
                  This site was developed using React!<br /><br />Click and drag the blue bar at the top of this window around!<br/><br/>Wow! This was implemented using the UI library React95.
              </Modal>}
            </Breakpoint>
          </Route>
          {/* <Route path='/about'> // make another path for bio and make mobile homepage just the site details
            {!this.state.displayMusic && <Music display={this.toggleMusic} />}
          </Route> */}
          <Route path='/music'>
            {!this.state.displayMusic && <Music display={this.toggleMusic} />}
          </Route>
          <Route path='/photo'>
            {!this.state.displayPhoto && <Photo display={this.togglePhoto} />}
          </Route>
          <Route path='/vid'>
            {!this.state.displayVid && <Vid display={this.toggleVid} />}
          </Route>
          <Route path='/art'>
            {!this.state.displayArt && <Art display={this.toggleArt} />}
          </Route>
          <Route path='/code'>
            {!this.state.displayCode && <Code display={this.toggleCode} />}
          </Route>
          <Route path='/contact'>
            {this.state.displayContact && <Contact display={this.toggleContact} />}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;

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
              Feel free to use the icons at the top to explore my various works!
            </Breakpoint>
            <Breakpoint small down>
              <p><br />Hello, welcome to my website!</p><br />My name is Hunter Redding, I'm a software developer, musician, and an artist of many forms.<br /><br />
              I'm currently a freelance web developer and artist, if you have interest in working with me, check out the contact window above, thanks!<br /><br />
              Feel free to use the start button at the top to explore my various works!
            </Breakpoint>
          </div>
      </Modal>
    )
  }
}