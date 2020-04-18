import React, { Component } from 'react'
import Modal from '@react95/core/Modal'

class Code extends Component {
  render() {
    return (
      <Modal title="Coding portfolio" closeModal={this.props.display} icon="defrag" className="modal" 
        style={this.props.homeStyle ? {left: "40%", top: "300px", height: "15em", width: "44em",} : {left: "5%", top: "10%", height: "82%", width: "90%"}}>
        <div style={this.props.homeStyle ? {width: "100%", maxHeight: "200px", overflowY: "scroll"} : {width: "100%", maxHeight: "560px", overflowY: "scroll"}}>
          <a href="https://gdurl.com/Jgwe" target="_blank" rel="noopener noreferrer">resume</a>
          <br/><br/>
          <p><h2>Actic Boards</h2>(In development) Working on a kanban board web app with a colleague using ReactJS for our frontend (React-Bootstrap UI, Axios for API calls), NodeJS (Express framework) for backend development, and MongoDB (Mongoose) for our data server.</p>
          <br/>
          <p><h2>hunterredding.com</h2>I developed this website as my portfolio using ReactJS and SCSS. For styled components and modals I used React95 UI Library to give my website a unique Windows95 look.</p>
          <br/>
          <p><h2 href="https://blindtiger.rocks/">blindtiger.rocks</h2>I developed this website for the Florida metal band Blind Tiger using ReactJS and CSS. I also used the React-bootstrap frontend framework to develop the UI components.</p>
        </div>
      </Modal>
    )
  }
}

export default Code