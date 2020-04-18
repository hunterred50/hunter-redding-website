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
          <p><a href="https://chromadecor.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h2>ChromaDecor</h2></a>Helped create the frontend of this interior design app. For a software engineering college course, my colleagues and I created this app using ReactJS and NodeJS, which utilized the Amazon API to generate a selection of furniture based on a generated color palette and a choice of a furniture option. We used firebase for our database and Cloudinary for storing images.</p>
          <br/>
          <p><h2>Actic Boards</h2>(In development) Working on a kanban board web app with a colleague using ReactJS for our frontend (React-Bootstrap UI, Axios for API calls), NodeJS (Express framework) for backend development, and MongoDB (Mongoose) for our data server.</p>
          <br/>
          <p><h2>hunterredding.com</h2>I developed this website as my portfolio using ReactJS and SCSS. For styled components and modals I used React95 UI Library to give my website a unique Windows95 look.</p>
          <br/>
          <p><a href="https://blindtiger.rocks/" target="_blank" rel="noopener noreferrer"><h2>blindtiger.rocks</h2></a>I developed this website for the Florida metal band Blind Tiger using ReactJS and CSS. I also used the React-bootstrap frontend framework to develop the UI components.</p>
        </div>
      </Modal>
    )
  }
}

export default Code